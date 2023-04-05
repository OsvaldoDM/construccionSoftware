const personajes = [
    {
        link: 'https://i.pinimg.com/originals/96/77/85/96778559c753ce2248471031e06a19d0.jpg',
        nombre: 'Mai Sakurajima',
        desc: 'Ella es una actriz/modelo notable y va en tercer año en la preparatoria Minegahara.'
    },
    {
        link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRg-4uImfNlAJo-b6I2irdGbVNwhwZib-cbg&usqp=CAU',
        nombre: 'Zero Two',
        desc: 'Ella es un híbrido humano-klaxo sapien y miembro de la élite de pilotos de FRANXX.'
    },
    {
        link: 'http://cm1.narvii.com/8547/679798b894bc15f612124ccc100a2d7e1e4edf0c_00.jpg',
        nombre: 'Violett Evergarden',
        desc: 'Se trata de una joven huérfana de aproximadamente 14 años la cual trabaja como Auto Memory Doll en la Compañía Postal CH'
    },
    {
        link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3hSmPfrvKy9gDlKZtLVPNxFrNRSqK-yl5YA&usqp=CAU',
        nombre: 'Asuna Yuki',
        desc: 'Ella fue uno de los 10.000 jugadores atrapados en el juego de la muerte Sword Art Online.'
    },
];

module.exports = class personaje {
    constructor(data){
        this.link = data.link || 'https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2022/12/Princesas-Disney-scaled.jpg?fit=2560%2C1440&quality=50&strip=all&ssl=1';
        this.nombre = data.nombre || 'lorem ipsum';
        this.desc = data.desc || 'lorem ipsum dollor ammet';
    };

    save(){
        personajes.push(this);
    }

    static fetchAll(){
        return personajes;
    }

    static find(valor){
        return personajes;
    }
};