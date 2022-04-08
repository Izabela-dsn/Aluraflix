import express from "express"

import bodyParser from "body-parser"

const app = express()

// avisa ao express que o body parser vai ser utilizado

app.use(bodyParser.json())

const port = 8080

app.get("/teste", (req, res) => {

  res.status(200).send({ mensagem: "hello, welcome" })

})

app.listen(port, () => {

  console.log(`servidor esta rodando na porta ${port}`)

})

export default app