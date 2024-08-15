const express = require("express");
const Cliente = require("../models/cliente");
const router = express.Router();

const validateUserInput = (req, res, next) => {
  const { name, address, celphone, mail } = req.body;

  if (!name || !address || !celphone || !mail) {
    return res.status(400).json({ error: "Todos los campos son requeridos" });
  }

  next();
};

router.post("/", validateUserInput, async (req, res) => {
  try {
    const { name, address, description, celphone, mail } = req.body;

    const cliente = new Cliente({
      Name: name,
      Address: address,
      Description: description,
      Celphone: celphone,
      Mail: mail,
    });

    const savedCliente = await cliente.save();
    res.status(201).json(savedCliente);
  } catch (error) {
    res.status(500).json({ error: "Error al guardar cliente" });
  }
});

module.exports = router;
