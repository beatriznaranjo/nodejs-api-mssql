"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _especiesController = require("../controllers/especies.controller.js");

var router = (0, _express.Router)(); //CRUD para tala de lista de especies
//C

router.post("/especies/createEspecie", _especiesController.createEspecie); //R - ejemplo simple

router.get("/especies/getEspecies", _especiesController.getEspecies); //R - ejemplo con parametro

router.get("/especies/getEspecieById/:id_especie", _especiesController.getEspecieById); //R - contar especies

router.get("/especies/countEspecies", _especiesController.countEspecies); //R


router.put("/especies/updateEspecie/:id_especie", _especiesController.updateEspecie); //D

router["delete"]("/especies/deleteEspecieById/:id_especie", _especiesController.deleteEspecieById); //Ruta en caso de digitar una erronea

router.get("/especies/*", _especiesController.defaultEspecies);
var _default = router;
exports["default"] = _default;