const db = require('../util/databse');

const personajes = [
    {
        img: 'https://i.pinimg.com/originals/96/77/85/96778559c753ce2248471031e06a19d0.jpg',
        nombre: 'Mai Sakurajima',
        descripcion: 'Ella es una actriz/modelo notable y va en tercer año en la preparatoria Minegahara.'
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRg-4uImfNlAJo-b6I2irdGbVNwhwZib-cbg&usqp=CAU',
        nombre: 'Zero Two',
        descripcion: 'Ella es un híbrido humano-klaxo sapien y miembro de la élite de pilotos de FRANXX.'
    },
    {
        img: 'http://cm1.narvii.com/8547/679798b894bc15f612124ccc100a2d7e1e4edf0c_00.jpg',
        nombre: 'Violett Evergarden',
        descripcion: 'Se trata de una joven huérfana de aproximadamente 14 años la cual trabaja como Auto Memory Doll en la Compañía Postal CH'
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3hSmPfrvKy9gDlKZtLVPNxFrNRSqK-yl5YA&usqp=CAU',
        nombre: 'Asuna Yuki',
        descripcion: 'Ella fue uno de los 10.000 jugadores atrapados en el juego de la muerte Sword Art Online.'
    },
];

module.exports = class personaje {
    constructor(data){
        this.img = data.img || 'https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2022/12/Princesas-Disney-scaled.jpg?fit=2560%2C1440&quality=50&strip=all&ssl=1';
        this.nombre = data.nombre || 'lorem ipsum';
        this.descripcion = data.descripcion || 'lorem ipsum dollor ammet';
    };

    save(){
        //Antes de usar DB
        //personajes.push(this);
        return db.execute(`INSERT INTO PERSONAJE (nombre, img, descripcion) VALUES (?,?,?)`,
        [this.nombre,this.img,this.descripcion]);
    }

    static delete(id){
        return db.execute(`DELETE FROM PERSONAJE WHERE idPersonaje = ?`,[id]);
    }

    edit(id){
        return db.execute(`UPDATE PERSONAJE SET nombre = ?, img = ?, descripcion = ? WHERE idPersonaje = ?`,
        [this.nombre,this.img,this.descripcion,id]);
    }

    static fetchAll(){
        //Antes de usar DB
        //return personajes;
        return db.execute(`SELECT * FROM PERSONAJE`);
    }

    static fetchOne(id){
        return db.execute(`SELECT * FROM PERSONAJE WHERE idPersonaje = ?`,[id])
    }
    static find(valor){
        return db.execute(
            `SELECT * FROM PERSONAJE WHERE nombre LIKE ? or descripcion LIKE ?`,
            ['%'+valor+'%','%'+valor+'%']
        );
    }
};