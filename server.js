//importa o express
const express = require('express')

//inicia o express
const app = express ()

//-----------------------------------------------------------//

//configurando ejs e a pasta publica
app.set('view-engine','ejs')
app.use(express.static('public'))

//---------------------------------------------------------//

//importando body-parser
const bodyParser = require('body-parser')

//configurando body-parser
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//-----------------------------------------------------------//

//rotas
app.get("/", (req, res)=>{
    res.send("Teste")
})


//configuração da porta
app.listen(3000)