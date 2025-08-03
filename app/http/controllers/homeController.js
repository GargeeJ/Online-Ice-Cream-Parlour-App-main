const Menu = require("../../models/menu");
function homeController() {
  return {
    async index(req, res) {
      const icecreams = await Menu.find();
      return res.render("home", { icecreams: icecreams });
    },
  };
}

module.exports = homeController;
