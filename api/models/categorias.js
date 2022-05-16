"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class categorias extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      categorias.hasMany(models.videos, {
        foreignKey: "categoria_id",
        defaultValue: 1,
        include: models.videos,
        as: "videos"
      })
    }
  }
  categorias.init(
    {
      titulo: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Por favor informar o título da categoria" },
          notEmpty: {
            args: true,
            msg: "O campo é obrigatório"
          }
        }
      },
      cor: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Por favor informar a cor em hexadecimal" },
          notEmpty: {
            args: true,
            msg: "O campo é obrigatório"
          }
        }
      }
    },
    {
      sequelize,
      modelName: "categorias"
    }
  )
  return categorias
}
