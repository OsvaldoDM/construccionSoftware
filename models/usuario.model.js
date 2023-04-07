const db = require('../util/databse');
const bcrypt = require('bcryptjs');

module.exports = class usuario{
    constructor(data){
        this.nombre = data.nombre;
        this.nombreUsuario = data.nombreUsuario;
        this.contrasena = data.contrasena;
    }

    registrar(){
        return db.execute(`SELECT * FROM USUARIO WHERE nombreUsuario = ?`,[this.nombreUsuario])
        .then(([rows,fieldData])=>{
            if(!(rows.length > 0)){
                return bcrypt.hash(this.contrasena, 12)
                .then((pswCifrado)=>{
                    return db.execute(`INSERT INTO USUARIO(nombre,nombreUsuario,contrasena) 
                VALUES(?,?,?)`,[this.nombre,this.nombreUsuario,pswCifrado])
                })
                .catch(err=>console.log(err))
            }
            else{
                console.log('Usuario ya existente');
                return db.execute(`SELECT * FROM USUARIO`);
            }
        })
        .catch(err=>console.log(err));
    }

    static fetchAll(){
        return db.execute(`SELECT * FROM USUARIO`);
    }

    static fetchOne(user){
        return db.execute(`SELECT * FROM USUARIO WHERE nombreUsuario = ?`,[user]);
    }

    static fetchPrivilegios(user){
        return db.execute(`SELECT P.nombre
        FROM USUARIO  U JOIN USUARIO_ROL UR ON U.idUsuario = UR.idUsuario
        JOIN ACCIONES A ON UR.idRol = A.idRol 
        JOIN PRIVILEGIO P ON A.idPrivilegio = P.idPrivilegio
        WHERE U.idUsuario = ?`,[user]);
    }
}