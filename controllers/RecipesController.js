const fs = require('fs')
const data = require("../data.json")

exports.index = (req, res) => {
  return res.render("admin/index", { recipes: data.recipes })
}

exports.show = (req, res) => {
  const { id } = req.params

  const foundRecipe = data.recipes.find(recipe => recipe.id == id)

  if (!foundRecipe) return res.send("Recipe not found").status(404)

  return res.render("admin/recipe-detail", { recipe: foundRecipe })
}

exports.edit = (req, res) => {
  const { id } = req.params

  const foundRecipe = data.recipes.find(recipe => recipe.id == id)

  if (!foundRecipe) return res.send("Recipe not found").status(404)

  return res.render("admin/edit", { recipe: foundRecipe })
}

exports.create = (req, res) => {
  return res.render('admin/create')
}

exports.post = function (req, res) {
  let { image, ingredients, preparations, information, author, title } = req.body

  const created_at = Date.now()
  const id = Number(data.recipes.length + 1)

  data.recipes.push({
    id,
    image,
    ingredients,
    preparations,
    information,
    title,
    author
  })

  fs.writeFile("data.json", JSON.stringify(data, null, 2), function (err) {
    if (err) return res.send("Write file error!!!")

    return res.redirect("/admin/recipes")
  })
}

exports.put = function (req, res) {
  const { id } = req.body
  let index = 0

  const foundRecipe = data.recipes.find(function (recipe, foundIndex) {
      if (id == recipe.id) {
          index = foundIndex
          return true
      }
  })

  if (!foundRecipe) return res.send("Recipe not found").status(404)

  const recipe = {
      ...foundRecipe,
      ...req.body,
      id: Number(req.body.id)
  }

  data.recipes[index] = recipe

  fs.writeFile("data.json", JSON.stringify(data, null, 2), function (err) {
      if (err) return res.send("Write Error")

      return res.redirect(`/admin/recipe/${id}`)
  })

}

exports.delete = function (req, res) {
  const { id } = req.body

  const filteredRecipes = data.recipes.filter(function (recipe) {
      return recipe.id != id
  })

  data.recipes = filteredRecipes

  fs.writeFile("data.json", JSON.stringify(data, null, 2), function (err) {
      if (err) return res.send("Write file ERROR")

      return res.redirect("/admin/recipes")
  })
}
