const { Router } = require("express")
const UsuarioController = require("../controllers/UsuarioController")

const router = Router()

router.post("/user", UsuarioController.criaUsuario)
router.get("/user", UsuarioController.pegaTodosOsUsuarios)

module.exports = router
