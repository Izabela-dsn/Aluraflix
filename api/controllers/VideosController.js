const database = require("../models")
//const validaInformacoesVideo = require("../utils/validarInformacoesVideo")

class VideosController {
  static async criaVideo(req, res) {
    const novoVideo = req.body
    try {
      const novoVideoCriado = await database.videos.create(novoVideo)
      return res.status(200).json(novoVideoCriado)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  //get
  static async pegaTodosOsVideos(req, res) {
    try {
      const todosOsVideos = await database.videos.findAll()
      return res.status(200).json(todosOsVideos)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  // get um video só
  static async pegaUmVideo(req, res) {
    const { id } = req.params
    try {
      const umVideo = await database.videos.findOne({
        where: { id: Number(id) }
      })

      if (res.status(200)) {
        if (umVideo != null) {
          return res.json(umVideo)
        } else {
          return res.json({ mensagem: "Video não encontrado" })
        }
      } else {
        return res.json({ mensagem: "Video não encontrado" })
      }
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  // delete
  static async deletaVideo(req, res) {
    const { id } = req.params
    try {
      await database.videos.destroy({ where: { id: Number(id) } })
      return res.status(200).json({ mensagem: `video deletado com sucesso` })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  // put
  static async editaVideo(req, res) {
    const { id } = req.params
    const novasInfos = req.body
    try {
      await database.videos.update(novasInfos, { where: { id: Number(id) } })
      const videoAtualizado = await database.videos.findOne({
        where: { id: Number(id) }
      })
      return res.status(200).json(videoAtualizado)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
}

module.exports = VideosController
