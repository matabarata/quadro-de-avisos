const router = require('express').Router()

router.get("/", (req, res) =>{
  res.send("Página Inicial")
})

router.get("/avisos", (req, res) =>{
  res.send("Página de Avisos Cadastrados")
})

router.get("/avisos/novo", (req, res) =>{
  res.render("formulario_avisos")
})

module.exports = router
