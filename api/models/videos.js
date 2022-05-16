"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class videos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      videos.belongsTo(models.categorias, {
        foreignKey: "categoria_id",
        defaultValue: 1
      })
    }
  }
  videos.init(
    {
      titulo: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Por favor informar um título válido" },
          notEmpty: {
            args: true,
            msg: "O campo é obrigatório"
          }
        }
      },
      descricao: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notNull: { msg: "Por favor informar uma descrição válida" },
          notEmpty: {
            args: true,
            msg: "O campo é obrigatório"
          }
        }
      },
      url: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isUrl: {
            args: true,
            msg: "URL invalida"
          },
          notEmpty: {
            args: true,
            msg: "O campo é obrigatório"
          }
        }
      }
    },
    {
      sequelize,
      modelName: "videos"
    }
  )
  return videos
}
