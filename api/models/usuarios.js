"use strict"
const { Model } = require("sequelize")
const bcrypt = require("bcrypt")

module.exports = (sequelize, DataTypes) => {
  class usuarios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  usuarios.init(
    {
      nome: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            args: true,
            msg: "O campo nome é obrigatório"
          }
        }
      },
      email: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: { args: true, msg: "O campo email é obrigatório" }
        }
      },
      senha: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            args: true,
            msg: "O campo senha é obrigatório"
          },
          len: {
            args: [8, 100],
            msg: "A senha é obrigatória e deve ser maior que 8 caracteres"
          }
        }
      }
    },
    {
      sequelize,
      modelName: "usuarios"
    }
  )
  usuarios.addHook("beforeCreate", async usuario => {
    const senhaHash = await bcrypt.hash(usuario.senha, 8)
    usuario.senha = senhaHash
  })
  return usuarios
}
