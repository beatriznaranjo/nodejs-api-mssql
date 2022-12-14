export const queries = {


//C  Crear Observacion de especie
createEspecie: "INSERT INTO lista_especies VALUES (@familia, @nombre, @cantidad, @sitio)",

//C  Crear nuevo sitio
createSitio: "INSERT INTO sitios VALUES (@nombre, @region)",

//R Ver todas las observaciones en lista de especie
getEspecies: "SELECT * FROM lista_especies",

//R  Ver todos los sitios registrados
getSitios: "SELECT * FROM sitios",

//R  Filtrar especies por ID
getEspecieById: "SELECT * FROM lista_especies WHERE id = @id",

//R  Obtener todas las especies, ordendas alfabeticamente (asc)
getEspeciesSortByName: "SELECT L.* FROM lista_especies L ORDER BY L.nombre ASC",

//R Filtrar observaciones por nombre de familia
getEspeciesByFamily: "SELECT L.* FROM lista_especies L WHERE familia = @familia",

//R Contar observaciones en lista de especies
countObservaciones: "SELECT COUNT(*) FROM lista_especies",

//R Ver observaciones por sitio, ordenadas por region
getEspeciesPorSitio: "SELECT S.region, S.nombre, L.nombre FROM lista_especies L INNER JOIN sitios S ON L.sitio = S.id ORDER BY S.region ASC",

//U
updateEspecie: "UPDATE lista_especies SET familia = @familia, nombre = @nombre, cantidad = @cantidad WHERE id = @id",

//D
deleteEspecieById: "DELETE lista_especies WHERE id = @id",



};