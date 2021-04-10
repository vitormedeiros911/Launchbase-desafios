const express = require("express")
const nunjucks = require("nunjucks")

const server = express()
server.use(express.static("public"))

const receitas = require('./data')

server.set("view engine", "njk")

nunjucks.configure("views", {
  express: server,
  autoescape: false,
  noCache: true
})

server.get("/", function (req, res) {
  return res.render("index", { receitas })
})

server.get("/about", function (req, res) {
  return res.render("about")
})

server.get("/recipes", function (req, res) {
  return res.render("recipes", { receitas })
})

server.get("/recipe/:id", function (req, res) {
  const id = req.params.id

  const receita = receitas.find(function (receita) {
    return receita.id == id
  })

  if (!receita) return res.status(404)

  return res.render("recipe", { receita })
})

server.listen(3000, function () {
  console.log("server is running")
})
