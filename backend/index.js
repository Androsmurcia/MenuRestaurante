const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const menu = require("./db/menuData");
const ordersRouter = require("./routers/orders");
const usersRouter = require("./routers/users");
const logger = require("./logger/logger");
const { requestLogger, errorHandler } = require("./middlewares");

const PORT = 3000;
const user = "andrewmurciap";
const password = "zNqPRUPNJuL4kgNO";
const baseData = "menuProyectoFinal";

const app = express();

mongoose.connect(
  `mongodb+srv://${user}:${password}@cluster0.8r1sq.mongodb.net/${baseData}?retryWrites=true&w=majority&appName=Cluster0`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use(express.json());
app.use(cors());

app.use(requestLogger);

app.get("/", (req, res) => {
  res.send(menu);
});

app.use("/orders", ordersRouter);
app.use("/user", usersRouter);

app.use(errorHandler);

app.listen(PORT, () => {
  logger.info(`Servidor funcionando en el puerto ${PORT}`);
  console.log(`FUNCIONANDO EN EL PUERTO ${PORT}`);
});
