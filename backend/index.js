const express = require("express");
const menu = require("./db/menuData");
const app = express();
const cors = require("cors");
const { v4: uuid } = require("uuid");

app.use(express.json());
app.use(cors());

const orders = [];

app.get("/", (req, res) => {
  res.send(menu);
});

app.post("/orders", (req, res) => {
  orders.push({ ...req.body, id: uuid() });
  console.log(orders);
  res.send(201).send;
});

app.get("/orders", (req, res) => {
  res.send(orders);
});

app.delete("/orders/:id", (req, res) => {
  const index = orders.findIndex((order) => order.id === req.params.id);

  if (index !== -1) {
    orders.splice(index, 1);
    res.status(200).send({ message: "Order deleted successfully" });
  } else {
    res.status(404).send({ message: "Order not found" });
  }
});

app.listen(3000, () => {
  console.log("FUNCIONANDO EN EL PUERTO 3000");
});
