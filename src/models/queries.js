export const queries = {


//C
createEspecie: "INSERT INTO lista_especies VALUES (@familia, @nombre, @cantidad)",

//R
getEspecies: "SELECT * FROM lista_especies",

//R
getEspecieById: "SELECT * FROM lista_especies WHERE id = @id",

//R
getEspeciesByName: "SELECT L.* FROM lista_especies L ORDER BY L.nombre ASC",

//
countEspecies: "SELECT COUNT(*) FROM lista_especies",

//U
updateEspecie: "UPDATE lista_especies SET familia = @familia, nombre = @nombre, cantidad = @cantidad WHERE id = @id",

//D
deleteEspecieById: "DELETE lista_especies WHERE id = @id",



};