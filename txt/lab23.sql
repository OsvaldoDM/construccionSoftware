CREATE PROCEDURE `configUsuario`
    (IN `nombreP` VARCHAR(500), IN `nombreUsuarioP` VARCHAR(500), IN `contrasenaP` VARCHAR(500)) 
    NOT DETERMINISTIC CONTAINS SQL SQL SECURITY 
    DEFINER INSERT INTO USUARIO(nombre, nombreUsuario,contrasena) 
            VALUES (nombreP, nombreUsuarioP, contrasenaP);

