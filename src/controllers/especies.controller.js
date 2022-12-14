import { getConnection, queries, sql } from "../models";
import Joi from 'joi';

//Funciones para validar inputs 

function validateEspecie(especie) {
  const schema = Joi.object({
    familia: Joi.string().min(5).required(),
    nombre: Joi.string().min(5).required(),
    cantidad: Joi.number().optional(),
    sitio: Joi.number().required()
  });
  return schema.validate(especie, {abortEarly: false});
};

function validateSitio(sitio) {
  const schema = Joi.object({
    nombre: Joi.string().min(6).required(),
    region: Joi.string().min(6).required()
  });
  return schema.validate(sitio, {abortEarly: false});
};

//Funcion para crear un nuevo registro de especie
export const createEspecie = async (req, res) => {
    let { familia, nombre, cantidad, sitio } = req.body;
     //validacion
    const {error} = validateEspecie(req.body);
    if (error) {
      console.log(error);
      return res.status(400).send(`Error de validación: ${error.details.map(x => x.message).join(', ')}`);
    }

    try {
      const pool = await getConnection();
      await pool
        .request()
        .input("familia", sql.VarChar, familia)
        .input("nombre", sql.VarChar, nombre)
        .input("cantidad", sql.Int, cantidad)
        .input("sitio", sql.Int, sitio)
        .query(queries.createEspecie);
      res.json({ familia, nombre, cantidad, sitio });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

//Funcion para crear un nuevo registro de sitio
export const createSitio = async (req, res) => {
  let { nombre, region } = req.body;
   //validacion
  const {error} = validateSitio(req.body);
  if (error) {
    console.log(error);
    return res.status(400).send(`Error de validación: ${error.details.map(x => x.message).join(', ')}`);
  }

  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("nombre", sql.VarChar, nombre)
      .input("region", sql.VarChar, region)
      .query(queries.createSitio);
    res.json({ nombre, region });
  } catch (error) {
      res.status(500);
      res.send(error.message);
  }
};

//Funcion para obtener todos los sitios registrados
export const getSitios = async (req, res) => {
  try {
      const pool = await getConnection();
      const result = await pool.request().query(queries.getSitios);
      res.json(result.recordset);
  } catch (error) {
      res.status(500); 
      res.send(error.message);
  }
};

//Funcion para obtener datos de todas las observaciones de especies
export const getEspecies = async (req, res) => {
  try {
      const pool = await getConnection();
      const result = await pool.request().query(queries.getEspecies);
      res.json(result.recordset);
  } catch (error) {
      res.status(500); 
      res.send(error.message);
  }
};

//Obtener datos de una especie por id
export const getEspecieById = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("id", req.params.id)
      .query(queries.getEspecieById);
    if (result.rowsAffected[0] === 0) return res.status(404).json({"Error 404": `No se encontró especie con ID = ${req.params.id}`});
    return res.json(result.recordset[0]);
  } catch (error) {
      res.status(500);
      res.send(error.message);
  }
};

//Contar observaciones de especies en la lista
export const countObservaciones = async (req, res) => {
  const pool = await getConnection();
  const result = await pool.request().query(queries.countObservaciones);
  return res.json(`Hay ${result.recordset[0][""]} observaciones en la lista`);
};

//Ordenar especies por nombre, mostrando solo nombre de la especie
export const getEspeciesSortByName = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(queries.getEspeciesSortByName);
    res.json(result.recordset.map(x => x.nombre));
  } catch (error) {
    res.status(500); 
    res.send(error.message);
  }
};


//Obtener observaciones de especies filtradas por una familia
export const getEspeciesByFamily = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool
    .request()
    .input("familia", req.params.familia)
    .query(queries.getEspeciesByFamily);
    res.json(result.recordset);
  } catch (error) {
    res.status(500); 
    res.send(error.message);
  }
};

//Obtener lista de observaciones registradas por un sitio especifico, ordenadas por region
export const getEspeciesPorSitio = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool
    .request()
    .input("id", req.params.id)
    .query(queries.getEspeciesPorSitio);
    res.json(result.recordset);
  } catch (error) {
    res.status(500); 
    res.send(error.message);
  }
};

//Actualizar info de una especie, obteniendola por ID
export const updateEspecie = async (req, res) => {
  const { familia, nombre, cantidad } = req.body;
  //validacion
  const {error} = validateEspecie(req.body);
  if (error) {
      return res.status(400).send(error.details[0].message);
  }
 
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("familia", sql.VarChar, familia)
      .input("nombre", sql.VarChar, nombre)
      .input("cantidad", sql.Int, cantidad)
      .input("id", req.params.id)
      .query(queries.updateEspecie);
    if (result.rowsAffected[0] === 0) return res.status(404).json({"Error 404": `No se encontró especie con ID = ${req.params.id}`});
    res.json({ familia, nombre, cantidad });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
  
//Eliminar una especie de la lista por id
export const deleteEspecieById = async (req, res) => {
    try {
      const pool = await getConnection();
  
      const result = await pool
        .request()
        .input("id", req.params.id)
        .query(queries.deleteEspecieById);
      if (result.rowsAffected[0] === 0) return res.status(404).json({"Error 404": `No se encontró especie con ID = ${req.params.id}`});
      return res.sendStatus(204);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
};
  
export const defaultEspecies = (req, res) => res.send('Error 404 | La ruta indicada no existe en esta API');
  
