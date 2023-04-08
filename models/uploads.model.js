const db = require('../util/databse');
const bcrypt = require('bcryptjs');

module.exports = class usuario{
    constructor(data){
        this.ruta = data;
    }

    registrar(){
        return db.execute(`INSERT INTO UPLOADS(ruta) VALUES(?)`,[this.ruta]);
    }

    static fetchAll(){
        return db.execute(`SELECT * FROM UPLOADS`);
    }
}