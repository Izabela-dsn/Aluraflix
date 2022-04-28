const { Router } = require("express")
const VideosController = require("../controllers/VideosController")

const router = Router()

// post
router.post("/videos", VideosController.criaVideo)

// get
router.get("/videos", VideosController.pegaTodosOsVideos)
// get um video
router.get("/videos/:id", VideosController.pegaUmVideo)
// delete
router.delete("/videos/:id", VideosController.deletaVideo)
// put
router.put("/videos/:id", VideosController.editaVideo)

module.exports = router
