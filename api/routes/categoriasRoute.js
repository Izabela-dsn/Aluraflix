const { Router } = require("express")
const CategoriasController = require("../controllers/CategoriasController")

const router = Router()

//post
router.post("/categorias", CategoriasController.criarCategoria)
//put
router.put("/categorias/:id", CategoriasController.editaCategoria)
//get 1
router.get("/categorias/:id", CategoriasController.pegaUmaCategoria)
//get
router.get(
  "/categorias/:id/videos",
  CategoriasController.pegaVideosPorCategoria
)
//delete

module.exports = router
