const { Router } = require("express");
const CharacterController = require("./controllers/CharacterController");

const routes = Router();

routes.get("/", CharacterController.index);

module.exports = routes;
