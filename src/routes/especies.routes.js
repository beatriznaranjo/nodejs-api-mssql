import { Router } from "express";
import { 
    createEspecie,
    getEspecies,
    getEspecieById,
    getEspeciesByName,
    getEspeciesByFamily,
    updateEspecie,
    deleteEspecieById,
    defaultEspecies,
    countEspecies
 } from "../controllers/especies.controller.js";

const router = Router();

//CRUD para tala de lista de especies

//C
router.post("/especies/createEspecie", createEspecie);


//R - ejemplo simple
router.get("/especies/getEspecies", getEspecies);

//R - ejemplo con parametro
router.get("/especies/getEspecieById/:id", getEspecieById);

//R - contar especies
router.get("/especies/countEspecies", countEspecies);

//R - lista por nombre ascendente
router.get("/especies/getEspeciesByName", getEspeciesByName);

//R - obtener especies por familia
router.get("/especies/getEspeciesByFamily/:familia", getEspeciesByFamily);

//U
router.put("/especies/updateEspecie/:id", updateEspecie);

//D
router.delete("/especies/deleteEspecieById/:id", deleteEspecieById);


//Ruta en caso de digitar una erronea
router.get("/especies/*", defaultEspecies);


export default router;
