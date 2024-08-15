const express = require("express");
const { v4: uuid } = require("uuid");
const router = express.Router();

const orders = [];

router.post("/", (req, res) => {
  orders.push({ ...req.body, id: uuid() });
  console.log(orders);
  res.send(201).send;
});

router.get("/", (req, res) => {
  res.send(orders);
});

router.delete("/:id", (req, res) => {
  const index = orders.findIdex((order) => order.id === req.params.id);

  if (index !== -1) {
    orders.splice(index, 1);
    res.status(200).send({ message: "Order deleted successfully" });
  } else {
    res.status(404).send({ message: "Order not found" });
  }
});

module.exports = router;
