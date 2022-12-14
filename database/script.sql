--Querys Base de datos Especies
--PROYECTO FINAL DESARROLLO DEL LADO DEL SERVIDOR II
--BEATRIZ NARANJO ELIZONDO


--Crear base de datos
GO
CREATE DATABASE Especies;
GO


USE Especies;

--Crear tabla de sitios de muestreo
CREATE TABLE sitios
(
    id int IDENTITY(1,1) NOT NULL,
    nombre nvarchar(100) NOT NULL,
    region nvarchar(100) NOT NULL,
    PRIMARY KEY(id)
)
GO


--Insertar datos de sitios
INSERT INTO sitios
VALUES
    ('El Ancla', 'Isla del Caño'),
    ('El Viejón', 'Golfo Santa Elena'),
    ('Roca Sucia', 'Isla del Coco'),
    ('Bajo Alcyone', 'Isla del Coco');
GO

--Leer registros de sitios
SELECT *
FROM sitios


--Crear tabla Listado de especies
GO
CREATE TABLE lista_especies
(
    id int IDENTITY(1,1) NOT NULL,
    familia nvarchar(50) NOT NULL,
    nombre nvarchar(100) NOT NULL,
    cantidad int NOT NULL,
    sitio int NOT NULL,
    PRIMARY KEY (id),
    CONSTRAINT FK_EspecieSitio FOREIGN KEY (sitio) REFERENCES sitios(id)
)
GO

--CREATE > Insertar datos de especies
INSERT INTO lista_especies
VALUES
    ('Scorpaenidae', 'Scorpaena afuerae', 3, 1),
    ('Pomacanthidae', 'Holacanthus passer', 5, 2),
    ('Carcharhinidae', 'Carcharhinus galapagensis', 1, 3),
    ('Carcharhinidae', 'Triaenodon obesus', 1, 4),
    ('Pomacanthidae', 'Pomacanthus zonipectus', 3, 1),
    ('Pomacanthidae', 'Pomacanthus zonipectus', 5, 2),
    ('Carcharhinidae', 'Galeocerdo cuvier', 1, 3),
    ('Lutjanidae', 'Lutjanus argentiventris', 1, 1);
GO

--READ 

SELECT *
FROM lista_especies

--Obtener datos de una especie por id
SELECT *
FROM lista_especies
WHERE id = 1

--Obtener conteo de avistamientos de especies
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

--Ver especies por sitio
SELECT S.region, S.nombre AS sitio, L.nombre AS especie
FROM lista_especies L
    INNER JOIN sitios S
    ON L.sitio = S.id
WHERE L.sitio = 1
ORDER BY S.region ASC


--UPDATE  
UPDATE lista_especies SET familia = 'Labridae', nombre = 'Bodianus diplotaenia', cantidad = 5 WHERE id = 1

--DELETE 
DELETE lista_especies WHERE id = 1