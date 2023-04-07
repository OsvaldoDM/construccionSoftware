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

CREATE TABLE PRIVILEGIO(
    idPrivilegio INT AUTO_INCREMENT,
    nombre VARCHAR(40),
    fechaCreacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(idPrivilegio)
);

CREATE TABLE ROL(
    idRol INT AUTO_INCREMENT,
    nombre VARCHAR(40),
    descripcion VARCHAR(100),
    PRIMARY KEY(idRol)
);

CREATE TABLE ACCIONES(
    idRol INT,
    idPrivilegio INT,
    fechaCreacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(idRol, idPrivilegio, fechaCreacion),
    FOREIGN KEY (idRol) REFERENCES ROL(idRol),
    FOREIGN KEY (idPrivilegio) REFERENCES PRIVILEGIO(idPrivilegio)
);

CREATE TABLE USUARIO_ROL(
    idRol INT,
    idUsuario INT,
    fechaCreacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(idRol, idUsuario, fechaCreacion),
    FOREIGN KEY (idRol) REFERENCES ROL(idRol),
    FOREIGN KEY (idUsuario) REFERENCES USUARIO(idUsuario)
);

INSERT INTO `PERSONAJE` (`idPersonaje`, `nombre`, `img`, `descripcion`) VALUES
(1, 'Mai Sakurajima', 'https://i.pinimg.com/originals/96/77/85/96778559c753ce2248471031e06a19d0.jpg', 'Ella es una actriz/modelo notable y va en tercer año en la preparatoria Minegahara.'),
(2, 'Zero Two', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRg-4uImfNlAJo-b6I2irdGbVNwhwZib-cbg&usqp=CAU', 'Ella es un híbrido humano-klaxo sapien y miembro de la élite de pilotos de FRANXX.'),
(3, 'Violett Evergarden', 'https://dthezntil550i.cloudfront.net/00resources/images/page/banner/6b/6b1263ec-e9bf-4613-beee-76e81a42409b.jpg', 'Se trata de una joven huérfana de aproximadamente 14 años la cual trabaja como Auto Memory Doll en la Compañía Postal CH'),
(4, 'Asuna Yuki', 'https://pbs.twimg.com/media/FCH9cXxUcAQk3IW?format=jpg&name=large', 'Ella fue uno de los 10.000 jugadores atrapados en el juego de la muerte Sword Art Online.'),
(7, 'Fridita :3', '/img/frida.jpeg', 'Mi princesa <3 Te amo!'),
(9, 'Eva Elfie', 'https://img5.goodfon.com/wallpaper/big/7/e3/eva-elfie-devushka-koltso-volosy.jpg', 'Best best'),
(10, 'Hermione Granger', 'https://i.pinimg.com/originals/65/3d/01/653d01c977ea7ce63d9eb06f5a273d7d.jpg', 'Una de los tres protagonistas principales de la serie de libros de Harry Potter, publicados por J. K. Rowling'),
(11, 'Pokimane', 'https://www.egames.news/__export/1618013878959/sites/debate/img/2021/04/09/twitch_por_qux_pokimane_ya_no_es_la_streamer_mxs_popular_1.jpg_976912859.jpg', 'Mi esposa');

INSERT INTO `USUARIO` (`idUsuario`, `nombre`, `nombreUsuario`, `contrasena`, `fechaCreacion`) VALUES
(1, 'Osvaldo Del Valle Mejia', 'osval147', '$2a$12$Wn9Ke7oTPoOcCin9UgnX6eWezr/Ld5Un.lLGkV2FyhVJGH5QVnDca', '2023-04-06 15:26:05'),
(2, 'Mai Sakurajima', 'Mai', '$2a$12$Gfcvy8ZPvNd..Jcjr1WBWeyRnPu97ln5GFQ2Ys1R7QcbyoMneLRq6', '2023-04-06 20:14:18');

INSERT INTO PRIVILEGIO(nombre) VALUES
('verPersonajes'),('agregarPersonajes'),('editarPersonajes');

INSERT INTO ROL(nombre) VALUES('Admin'),('Lector');

INSERT INTO ACCIONES(idRol, idPrivilegio) VALUES
(1,1),
(1,2),
(1,3),
(2,1);

INSERT INTO USUARIO_ROL(idRol, idUsuario) VALUES (1,1),(2,2);
