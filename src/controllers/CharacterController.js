const Character = require("../models/Character");

module.exports = {
  async index(res) {
    const characters = await Character.find();
    return res.json(characters);
  },
};
