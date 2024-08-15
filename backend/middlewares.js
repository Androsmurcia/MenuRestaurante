const logger = require("./logger/logger");

const requestLogger = (request, response, next) => {
  console.log("Method:", request.method);
  console.log("Path:  ", request.path);
  console.log("Body:  ", request.body);
  logger.warn("Method:", request.method);
  logger.warn("Path:  ", request.path);
  logger.warn("Body:  ", request.body);
  console.log("---");
  next();
};

const errorHandler = (error, request, response, next) => {
  console.error(error);
  console.error(error.message);
  logger.error(error.message);

  if (error.name === "CastError") {
    logger.error({ error: "id incorrecto" });
    return response.status(400).send({ error: "id incorrecto" });
  } else if (error.name === "ValidationError") {
    return response.status(400).json({ error: error.message });
  }

  next(error);
};

module.exports = { requestLogger, errorHandler };
