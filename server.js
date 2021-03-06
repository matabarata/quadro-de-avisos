//-------------------------------------------------------------//

//importa o express
const express = require('express')
//importando body-parser
const bodyParser = require('body-parser')
const moment = require('moment')

//------------------------------------------------------------//

//importando nossas próprias rotas do outro arquivo
const routerAvisos = require('./components/avisos/avisosController')

//------------------------------------------------------------//

//inicia o express
const app = express()
//configurando ejs e a pasta publica
app.set('view engine', 'ejs')
app.use(express.static('public'))

//---------------------------------------------------------//

//configurando o moment
moment.locale("pt-br")
app.locals.moment = moment

//---------------------------------------------------------//

//configurando body-parser
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//-----------------------------------------------------------//

//rotas
app.use(routerAvisos)


//configuração da porta
app.listen(3000)
