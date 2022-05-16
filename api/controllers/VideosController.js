const Sequelize = require("sequelize")
const database = require("../models")
const { Op } = Sequelize

class VideosController {
  static async criaVideo(req, res) {
    const novoVideo = req.body
    try {
      novoVideo.categoria_id === " " || novoVideo.categoria_id === ""
        ? (novoVideo.categoria_id = 1)
        : (novoVideo.categoria_id = novoVideo.categoria_id)
      const novoVideoCriado = await database.videos.create(novoVideo)
      return res.status(201).json(novoVideoCriado)
    } catch (error) {
      return res.status(400).json(error.message)
    }
  }

  //get
  static async pegaTodosOsVideos(req, res) {
    try {
      const where = {}
      // paginação
      const page = req.query.page
      const limit = page ? 5 : 5
      const offset = page ? parseInt(page * limit) : 0
      // busca
      const titulo = req.query.search
      titulo ? (where.titulo = {}) : null
      titulo ? (where.titulo[Op.substring] = titulo) : null
      const todosOsVideos = await database.videos.findAll(
        {
          where
        },
        {
          limit: limit,
          offset: offset
        }
      )
      return todosOsVideos != []
        ? res.status(200).json(todosOsVideos)
        : res.status(204).json({ mensagem: "videos não encontrados" })
    } catch (error) {
      console.log(error.name)
      if (error.name === "TypeError") {
        return res.status(500).json(error.message)
      }
      return res.status(404).json(error.message)
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
          return res.status(404).json({ mensagem: "Video não encontrado" })
        }
      } else {
        return res.status(404).json({ mensagem: "Video não encontrado" })
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
      return res.status(201).json(videoAtualizado)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
}

module.exports = VideosController
