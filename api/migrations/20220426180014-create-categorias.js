"use strict"
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("categorias", {
      id: {
        type: Sequelize.INTEGER,
        defaultValue: 1,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      titulo: {
        type: Sequelize.STRING
      },
      cor: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("categorias")
  }
}
