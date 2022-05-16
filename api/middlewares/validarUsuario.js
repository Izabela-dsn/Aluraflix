const passport = require("passport")
const LocalStrategy = require("passport-local").Strategy
const BearerStrategy = require("passport-http-bearer").Strategy
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const models = require("../models")

function verificaUsuario(usuario) {
  try {
    if (!usuario) {
      throw new Error({ message: "Usuario não existe" })
    }
  } catch (error) {
    throw new Error({ message: error.message })
  }
}

async function verificaSenha(senha, senhaHash) {
  try {
    const senhaValida = await bcrypt.compare(senha, senhaHash)
    if (!senhaValida) {
      throw new Error({ message: "Email ou senha invalidos" })
    }
  } catch (error) {
    throw new Error({ message: error.message })
  }
}

passport.use(
  // objeto de configuração da estratégia local
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "senha",
      session: false
    },
    async (email, senha, done) => {
      // função de verificação
      try {
        const usuario = await models.usuarios.findOne({
          where: { email }
        })
        console.log(usuario)
        verificaUsuario(usuario)
        await verificaSenha(senha, usuario.senha)
        done(null, usuario)
      } catch (erro) {
        done(erro)
      }
    }
  )
)

passport.use(
  new BearerStrategy(async (token, done) => {
    try {
      // verifica se o token está na blacklist
      //await verificaTokenNaBlacklist(token)
      // devolve payload se o token estiver váliado
      const payload = jwt.verify(token, process.env.CHAVE_JWT)
      // recupera o usuário via id
      const usuario = await models.usuarios.findOne({
        where: { id: payload.id }
      })
      // eslint-disable-next-line object-shorthand
      done(null, usuario, { token: token })
    } catch (erro) {
      done(erro)
    }
  })
)
