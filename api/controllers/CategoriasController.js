const database = require("../models")
//const validaInformacoesCategoria = require("../utils/validarInformacoesCategorias")

class CategoriasController {
  //post
  static async criarCategoria(req, res) {
    const novaCategoria = req.body
    try {
      const novaCategoriaCadastrada = await database.categorias.create(
        novaCategoria
      )
      return res.status(200).json(novaCategoriaCadastrada)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  //get 1 categoria
  static async pegaUmaCategoria(req, res) {
    const { id } = req.params
    try {
      const umaCategoria = await database.categorias.findOne({
        where: { id: Number(id) }
      })

      if (res.status(200)) {
        if (umaCategoria != null) {
          return res.json(umaCategoria)
        } else {
          return res.json({ mensagem: "Categoria não encontrada" })
        }
      } else {
        return res.json({ mensagem: "Categoria não encontrada" })
      }
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  //put
  static async editaCategoria(req, res) {
    const { id } = req.params
    const novasInfos = req.body
    try {
      await database.categorias.update(novasInfos, {
        where: { id: Number(id) }
      })
      const categoriaAtualizada = await database.categorias.findOne({
        where: { id: Number(id) }
      })
      return res.status(200).json(categoriaAtualizada)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  //get categorias/:id/videos/
  static async pegaVideosPorCategoria(req, res) {
    const { id } = req.params
    try {
      const videosDaCategoria = await database.videos.findAll({
        where: { categoria_id: Number(id) }
      })
      return res.status(200).json(videosDaCategoria)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
}

module.exports = CategoriasController