const jwt = require("jsonwebtoken")
require("dotenv").config()

function criaTokenJWT(usuario) {
  const payload = {
    id: usuario.id
  }
  const token = jwt.sign(payload, process.env.CHAVE_JWT, {
    expiresIn: "15m"
  })
  console.log(token)
  return token
}

class AutenticacaoController {
  static logaUsuario(req, res) {
    console.log(req.email)
    const token = criaTokenJWT(req.user)
    res.set("Authorization", token)
    res.status(200).send({ token })
  }
}

module.exports = AutenticacaoController
