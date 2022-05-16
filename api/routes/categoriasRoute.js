const { Router } = require("express")
const { autenticaUsuario } = require("../middlewares")
const CategoriasController = require("../controllers/CategoriasController")

const router = Router()

//post
router.post(
  "/categorias",
  autenticaUsuario.bearer,
  CategoriasController.criarCategoria
)
//put
router.put(
  "/categorias/:id",
  autenticaUsuario.bearer,
  CategoriasController.editaCategoria
)
//get 1
router.get(
  "/categorias/:id",
  autenticaUsuario.bearer,
  CategoriasController.pegaUmaCategoria
)
//get
router.get(
  "/categorias",
  autenticaUsuario.bearer,
  CategoriasController.pegarTodosAsCategorias
)
router.get(
  "/categorias/:id/videos",
  autenticaUsuario.bearer,
  CategoriasController.pegaVideosPorCategoria
)
//delete
router.delete(
  "/categorias/:id",
  autenticaUsuario.bearer,
  CategoriasController.deletarCategoria
)

module.exports = router
