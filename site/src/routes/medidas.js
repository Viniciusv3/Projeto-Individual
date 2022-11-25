var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas/:idAquario", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

router.get("/tempo-real/:idAquario", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
})

router.get("/atualizarGlobal", function (req, res) {
    medidaController.atualizarMedidas(req, res);
})

router.get("/atualizarGlobal1", function (req, res) {
    medidaController.atualizarMedidas1(req, res);
})

router.get("/atualizarGlobal2", function (req, res) {
    medidaController.atualizarMedidas2(req, res);
})

router.get("/atualizarGlobal3", function (req, res) {
    medidaController.atualizarMedidas3(req, res);
})

module.exports = router;