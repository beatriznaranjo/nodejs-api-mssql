"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queries = void 0;
var queries = {
  //C
  createEspecie: "INSERT INTO lista_especies VALUES (@familia, @nombre_especie, @cantidad)",
  //R
  getEspecies: "SELECT * FROM lista_especies",
  //R
  getEspecieById: "SELECT * FROM lista_especies WHERE id_especie = @id_especie",
  //
  countEspecies: "SELECT COUNT(*) FROM lista_especies",
  //U
  updateEspecie: "UPDATE lista_especies SET familia = @familia, nombre_especie = @nombre_especie, cantidad = @cantidad WHERE id_especie = @id_especie",
  //D
  deleteEspecieById: "DELETE lista_especies WHERE id_especie = @id_especie"
};
exports.queries = queries;