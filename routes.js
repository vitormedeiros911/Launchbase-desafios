const express = require("express")
const routes = express.Router()

const main = require("./controllers/MainController")
const recipes = require("./controllers/RecipesController")

routes.get("/", main.index)
  .get("/about", main.about)
  .get("/recipes", main.recipes)
  .get("/recipe/:id", main.show)

  .get("/admin/recipes", recipes.index)
  .get("/admin/recipe/create", recipes.create)
  .get("/admin/recipe/:id", recipes.show)
  .get("/admin/recipe/:id/edit", recipes.edit)

  .post("/admin/recipes", recipes.post)
  .put("/admin/recipes", recipes.put)
  .delete("/admin/recipes", recipes.delete)

module.exports = routes
