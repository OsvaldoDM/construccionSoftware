/* El ingreso total recibido por cada actor*/
SELECT SUM(sueldo) AS 'Ingreso total'
FROM Elenco
GROUP BY nombre
ORDER BY SUM(sueldo);

/* El monto total destinado a películas por cada Estudio Cinematográfico,
 durante la década de los 80's.*/

SELECT SUM(presupuesto) AS 'Monto destinado'
FROM Pelicula
WHERE año>=1980 AND año<1990
GROUP BY nomestudio
ORDER BY SUM(presupuesto);

/*Nombre y sueldo promedio de los actores (sólo hombres)
 que reciben en promedio un pago superior a 5 millones de dolares por película.*/

SELECT nombre, AVG(sueldo) AS 'Sueldo promedio'
FROM Elenco E JOIN Actor A on E.nombre = A.nombre
WHERE sexo = 'Hombre'
HAVING AVG(sueldo)>5000000;

/*Título y año de producción de las películas con menor presupuesto. */

SELECT titulo, año, MIN(presupuesto)
FROM pelicula
GROUP BY titulo;

/* Mostrar el sueldo de la actriz mejor pagada.*/

SELECT nombre, sueldo
FROM Elenco
ORDER BY sueldo DESC
LIMIT 1;