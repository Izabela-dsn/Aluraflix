const database = require("../models")

class CategoriasController {
  //post
  static async criarCategoria(req, res) {
    const novaCategoria = req.body
    try {
      const novaCategoriaCadastrada = await database.categorias.create(
        novaCategoria
      )
      return res.status(201).json(novaCategoriaCadastrada)
    } catch (error) {
      return res.status(400).json(error.message)
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
          return res.status(404).json({ mensagem: "Categoria não encontrada" })
        }
      } else {
        return res.status(404).json({ mensagem: "Categoria não encontrada" })
      }
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  // get categorias
  static async pegarTodosAsCategorias(req, res) {
    try {
      const { page } = req.query
      const limit = page ? 5 : 5
      const offset = page ? parseInt(limit * page) : 0
      const categorias = await database.categorias.findAll({
        offset: offset,
        limit: limit
      })
      return categorias.length != 0
        ? res.status(200).json(categorias)
        : res.status(204).json({ message: "não há categorias cadastradas" })
    } catch (error) {
      return res.status(500).json(error.massage)
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
      const { page } = req.query
      const limit = page ? 5 : 5
      const offset = page ? parseInt(page * limit) : 0
      const videosDaCategoria = await database.videos.findAll(
        {
          where: { categoria_id: Number(id) }
        },
        {
          limit: limit,
          offset: offset
        }
      )
      return res.status(200).json(videosDaCategoria)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async deletarCategoria(req, res) {
    const { id } = req.params
    try {
      await database.categorias.destroy({ where: { id: Number(id) } })
      return res
        .status(200)
        .json({ mensagem: "Categoria deletado com sucesso" })
    } catch (error) {
      return res.status(500).jason(error.message)
    }
  }
}

module.exports = CategoriasController
