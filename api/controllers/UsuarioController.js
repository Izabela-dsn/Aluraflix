const database = require("../models")

class UsuarioController {
  static async criaUsuario(req, res) {
    const novoUsuario = req.body
    try {
      const novoUsuarioCadastrado = await database.usuarios.create(novoUsuario)
      return res.status(200).json(novoUsuarioCadastrado)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async pegaTodosOsUsuarios(req, res) {
    try {
      const todosOsUsuarios = await database.usuarios.findAll()
      return todosOsUsuarios.length != 0
        ? res.status(200).json(todosOsUsuarios)
        : res.status(204).json({ message: "não há usuários cadastrados" })
    } catch (error) {
      return res.status(500).json(error.massage)
    }
  }
}

module.exports = UsuarioController
