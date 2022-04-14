const bodyParser = require("body-parser")
const videos = require("./videosRoute")

module.exports = app => {
  app.use(bodyParser.json())
  app.use(videos)
}
