--Querys Base de datos Especies

--Crear base de datos
GO
CREATE DATABASE Especies;
GO


USE Especies;

--Crear tabla Listado
GO
CREATE TABLE lista
(
    id_especie int IDENTITY(1,1) NOT NULL,
    nombre_especie nvarchar(100) NOT NULL,
    PRIMARY KEY (id_especie)
)
GO

--Read species 

SELECT *
FROM lista_especies
SELECT *
FROM lista_especies
WHERE id_especie = 1

--Insertar datos de especies
INSERT INTO lista
VALUES
    ('Scorpaena afuerae')

--Update  lista de especies
UPDATE lista_especies SET nombre_especie = 'Bodianus diplotaenia' WHERE id_especie = 1

--Delete especie
DELETE lista_especies WHERE id_especie = 1

 