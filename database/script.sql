--Querys Base de datos Especies

--Crear base de datos
GO
CREATE DATABASE Especies;
GO


USE Especies;

--Crear tabla Listado de especies
GO
CREATE TABLE lista_especies
(
    id int IDENTITY(1,1) NOT NULL,
    familia nvarchar(50) NOT NULL,
    nombre nvarchar(100) NOT NULL,
    cantidad int,
    PRIMARY KEY (id)
)
GO


--CREATE > Insertar datos de especies
INSERT INTO lista_especies
VALUES
    ('Scorpaenidae', 'Scorpaena afuerae', 3),
    ('Pomacanthidae', 'Holacanthus passer', 5),
    ('Carcharhinidae', 'Carcharhinus galapagensis', 1),
    ('Carcharhinidae', 'Triaenodon obesus', 1)
GO

--READ 

SELECT *
FROM lista_especies

--Obtener datos de una especie por id
SELECT *
FROM lista_especies
WHERE id = 1

--Obtener conteo de especies
SELECT COUNT(*)
FROM lista_especies

--Ordenar especies por nombre
SELECT L.*
FROM lista_especies L
ORDER BY L.nombre ASC

--Seleccionar especies de una familia
SELECT L.*
FROM lista_especies L
WHERE familia = 'Carcharhinidae'


--UPDATE  
UPDATE lista_especies SET familia = 'Labridae', nombre = 'Bodianus diplotaenia', cantidad = 5 WHERE id = 1

--DELETE 
DELETE lista_especies WHERE id = 1