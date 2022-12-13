import { getConnection, queries, sql } from "../models";
import Joi from 'joi';

//Funcion para validar inputs 

function validateEspecie(especie) {
  const schema = Joi.object({
    familia: Joi.string().min(5).required(),
    nombre: Joi.string().min(5).required(),
    cantidad: Joi.number().optional()
  });
  return schema.validate(especie, {abortEarly: false});
}

//Funcion para crear un nuevo registro de especie
export const createEspecie = async (req, res) => {
    let { familia, nombre, cantidad } = req.body;
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
        .query(queries.createEspecie);
      res.json({ familia, nombre, cantidad });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

//Funcion para obtener datos de todas las especies
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

//Contar especies en la lista
export const countEspecies = async (req, res) => {
  const pool = await getConnection();
  const result = await pool.request().query(queries.countEspecies);
  return res.json(`Hay ${result.recordset[0][""]} especies en la lista`);
};

//Ordenar especies por nombre
export const getEspeciesByName = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(queries.getEspeciesByName);
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
  
