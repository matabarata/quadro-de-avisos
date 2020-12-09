const router = require('express').Router()

const Avisos = require('./avisos')

router.get("/", (req, res) =>{
  res.send("Página Inicial")
})

router.get("/avisos", async (req, res) =>{
  const avisos = await Avisos.selecionarTodos()
  res.render('avisos', {avisos})
})

router.get("/avisos/novo", (req, res) =>{
  res.render("formulario_avisos")

})

router.post("/avisos/novo", async (req, res)=>{
  const titulo = req.body.titulo
  const data = req.body.data
  const mensagem = req.body.mensagem

  const msg = await Avisos.salvar({titulo,data,mensagem})
  res.render('formulario_avisos',{msg})

})

router.get('/avisos/excluir/:id', async (req, res) =>{
  const id = Number(req.params.id)
  await Avisos.excluir(id)
  res.redirect('/avisos')
})

module.exports = router
