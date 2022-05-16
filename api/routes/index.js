const bodyParser = require("body-parser")
const videos = require("./videosRoute")
const categorias = require("./categoriasRoute")
const autenticacao = require("./autenticacaoRoute")
const usuarios = require("./usuariosRoute")

module.exports = app => {
  app.use(bodyParser.json())
  app.use(videos)
  app.use(categorias)
  app.use(autenticacao)
  app.use(usuarios)
}
