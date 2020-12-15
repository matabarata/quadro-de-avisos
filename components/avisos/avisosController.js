const router = require('express').Router()

const Avisos = require('./avisos')

router.get("/", async (req, res) =>{
  const avisos = await Avisos.selecionarTodos()
  res.render('index', {avisos})
})

router.get("/avisos", async (req, res) =>{
  const avisos = await Avisos.selecionarTodos()

  res.render('avisos', {avisos})
})

router.get("/avisos/novo", (req, res) =>{
  res.render("formulario_avisos")

})

router.get("/avisos/editar/:id", async(req, res) =>{
  const id = req.params.id
  const aviso = await Avisos.selecionarAviso(id)

  res.render('formulario_avisos', {aviso})
})

router.get('/avisos/excluir/:id', async (req, res) =>{
  const id = Number(req.params.id)
  await Avisos.excluir(id)
  res.redirect('/avisos')
})

router.post("/avisos/novo", async (req, res)=>{
  const titulo = req.body.titulo
  const data = req.body.data
  const mensagem = req.body.mensagem
  const submit = req.body.submit

  if(submit == "cadastrar"){
    const msg = await Avisos.salvar({titulo,data,mensagem})
    res.render('formulario_avisos',{msg})  
  }

  else if(submit == "limpar"){
    res.render('formulario_avisos')
  }

})

router.post("/avisos/editar/:id", async (req, res) =>{
  const id = req.body.id
  const titulo = req.body.titulo
  const data = req.body.data
  const mensagem = req.body.mensagem
  const submit = req.body.submit

  if(submit == "cadastrar"){

    const msg = await Avisos.editar({titulo,data,mensagem}, id)
    
    if (msg.tipo = "sucesso") {
    
      res.redirect('/avisos')
  
    } else {
      res.render('formulario_avisos', {msg})
    }  
  }

  else if(submit == "cancelar"){
    res.redirect('/avisos')
  }
 
})




module.exports = router
