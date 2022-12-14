import { Router } from "express";
import { 
    createEspecie,
    createSitio,
    getEspecies,
    getSitios,
    getEspecieById,
    getEspeciesSortByName,
    getEspeciesByFamily,
    getEspeciesPorSitio,
    updateEspecie,
    deleteEspecieById,
    defaultEspecies,
    countObservaciones
 } from "../controllers/especies.controller.js";

const router = Router();

//CRUD para tala de lista de especies

//C 
router.post("/especies/createEspecie", createEspecie);

//
router.post("/especies/createSitio", createSitio);

//R - Obtener todas las observaciones de especies
router.get("/especies/getEspecies", getEspecies);

//R - Obtener todos los sitios registrados
router.get("/especies/getSitios", getSitios);

//R - ejemplo con parametro
router.get("/especies/getEspecieById/:id", getEspecieById);

//R - contar especies
router.get("/especies/countObservaciones", countObservaciones);

//R - lista por nombre ascendente
router.get("/especies/getEspeciesSortByName", getEspeciesSortByName);

//R - obtener especies por familia
router.get("/especies/getEspeciesByFamily/:familia", getEspeciesByFamily);

//R - obtener observaciones registradas ordenadas por region-sitio
router.get("/especies/getEspeciesPorSitio/:id", getEspeciesPorSitio);

//U
router.put("/especies/updateEspecie/:id", updateEspecie);

//D
router.delete("/especies/deleteEspecieById/:id", deleteEspecieById);


//Ruta en caso de digitar una erronea
router.get("/especies/*", defaultEspecies);


export default router;
