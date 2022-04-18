const URL = require("url").URL

const validaInformacoesVideo = (titulo, descricao, url) => {
  try {
    if (
      titulo != "" &&
      descricao != "" &&
      url != "" &&
      titulo != " " &&
      descricao != " " &&
      url != " "
    ) {
      return new URL(url) ? true : false
    }
  } catch (error) {
    return console.log(error.message)
  }
}

module.exports = validaInformacoesVideo
