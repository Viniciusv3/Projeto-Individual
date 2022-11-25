var express = require("express");
var router = express.Router();

var cruzadinhaController = require("../controllers/cruzadinhaController");

router.get("/ultimas", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

router.get("/", function (req, res) {
    cruzadinhaController.testar(req, res);
});

router.get("/listar", function (req, res) {
    cruzadinhaController.listar(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de cruzadinhaController.js
router.post("/cadastrar", function (req, res) {
    cruzadinhaController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    cruzadinhaController.entrar(req, res);
});

module.exports = router;