const { Router } = require("express");
const CategoriasControllers = require("../controllers/CategoriasControllers");

const router = Router()

//get
router.get("/catrgorias",CategoriasControllers.pegarTodosAsCategorias)
//delete
router.delete("/categorias/:id",CategoriasControllers.deletarCategoria)
//put
//put
router.put("/categorias/:id",CategoriasControllers.editaCategoria)

module.exports = router
