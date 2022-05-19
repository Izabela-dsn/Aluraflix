const { Router } = require("express")
const { autenticaUsuario } = require("../middlewares")

const VideosController = require("../controllers/VideosController")

const router = Router()

// post
router.post("/videos", autenticaUsuario.bearer, VideosController.criaVideo)

// get
router.get(
  "/videos",
  autenticaUsuario.bearer,
  VideosController.pegaTodosOsVideos
)

router.get("/videos/free", VideosController.pegaTodosOsVideos)
// get um video
router.get("/videos/:id", autenticaUsuario.bearer, VideosController.pegaUmVideo)
// delete
router.delete(
  "/videos/:id",
  autenticaUsuario.bearer,
  VideosController.deletaVideo
)
// put
router.put("/videos/:id", autenticaUsuario.bearer, VideosController.editaVideo)

module.exports = router
