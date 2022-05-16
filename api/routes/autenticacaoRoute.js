const { Router } = require("express")
const { autenticaUsuario } = require("../middlewares")
const AutenticacaoController = require("../controllers/AutenticacaoController")

const router = Router()

router.post(
  "/login",
  autenticaUsuario.local,
  AutenticacaoController.logaUsuario
)

module.exports = router
