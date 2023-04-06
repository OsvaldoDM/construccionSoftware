DROP DATABASE IF EXISTS WAIFU;
CREATE DATABASE WAIFU;
USE WAIFU;

CREATE TABLE PERSONAJE(
    idPersonaje INT AUTO_INCREMENT,
    nombre VARCHAR(40),
    img VARCHAR(500),
    descripcion VARCHAR(200),
    PRIMARY KEY(idPersonaje)
);

CREATE TABLE USUARIO(
    idUsuario INT AUTO_INCREMENT,
    nombre VARCHAR(200),
    nombreUsuario VARCHAR(40),
    contrasena VARCHAR(400),
    fechaCreacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(idUsuario)
);

INSERT INTO PERSONAJE (nombre, img, descripcion) VALUES
('Mai Sakurajima','https://i.pinimg.com/originals/96/77/85/96778559c753ce2248471031e06a19d0.jpg','Ella es una actriz/modelo notable y va en tercer año en la preparatoria Minegahara.'),
('Zero Two','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRg-4uImfNlAJo-b6I2irdGbVNwhwZib-cbg&usqp=CAU','Ella es un híbrido humano-klaxo sapien y miembro de la élite de pilotos de FRANXX.'),
('Violett Evergarden','http://cm1.narvii.com/8547/679798b894bc15f612124ccc100a2d7e1e4edf0c_00.jpg','Se trata de una joven huérfana de aproximadamente 14 años la cual trabaja como Auto Memory Doll en la Compañía Postal CH'),
('Asuna Yuki','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3hSmPfrvKy9gDlKZtLVPNxFrNRSqK-yl5YA&usqp=CAU','Ella fue uno de los 10.000 jugadores atrapados en el juego de la muerte Sword Art Online.');