SELECT razonsocial, SUM(cantidad) AS 'Total unidades'
FROM proveedores as p, entregan as e
WHERE p.rfc = e.rfc
GROUP BY razonsocial
HAVING SUM(cantidad)>1000
ORDER BY cantidad DESC;

SELECT m.descripcion AS 'Material', COUNT(*) AS 'N Entregas'
FROM materiales m, entregan e
WHERE m.clave = e.clave
AND fecha BETWEEN '2000-01-01' AND '2009-12-31'
GROUP BY m.descripcion
ORDER BY COUNT(*);

SELECT p.razonsocial, COUNT(*)
FROM proveedores p, entregan e
WHERE p.rfc = e.rfc
GROUP BY p.razonsocial
HAVING COUNT(*) > (SELECT COUNT(*)
                  FROM proveedores p, entregan e
                  WHERE p.rfc = e.rfc
                  AND razonsocial = 'Oviedo');