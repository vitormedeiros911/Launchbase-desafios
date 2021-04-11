const data = require("../data.json")

exports.index = (req, res) => {
  return res.render("index", { recipes: data.recipes })
}

exports.about = (req, res) => {
  return res.render("about")
}

exports.recipes = (req, res) => {
  return res.render("recipes", { recipes: data.recipes })
}

exports.show = (req, res) => {
  const { id } = req.params

  const foundRecipe = data.recipes.find(recipe => recipe.id == id)

  if (!foundRecipe) return res.send("Recipe not found").status(404)

  return res.render("recipe", { recipe: foundRecipe })
}
