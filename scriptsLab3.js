//Ejercicio 1
const tablaNumeros = ()=>{
    tabla = document.getElementById("table");
    tBody = document.getElementById("tBody");
    nuevaTabla = document.createElement("tbody");
    nuevaTabla.id = "tBody";
    let numero = prompt("Ingresa un numero para mostrar su tabla de cuadraddos y cubos:");
    //llenar tabla
    for(i=1;i<=numero;i++){
        //crear tr
        row = document.createElement("tr");
        for(j=1;j<=3;j++){
            //añadir valores a ttr
            data = document.createElement("td");
            data.textContent = Math.pow(i,j);
            row.append(data);
        }
        //añadir tr a tbody
        nuevaTabla.appendChild(row);
    }
    //cambiar tbody
    tabla.replaceChild(nuevaTabla,tBody);
};