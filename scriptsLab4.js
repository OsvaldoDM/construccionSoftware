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

const pedirSuma = ()=>{
    let n1 = Math.floor(Math.random()*100);
    let n2 = Math.floor(Math.random()*100);
    let tiempoInicio = Date.now()
    let resultado = prompt(`${n1} + ${n2} =`);
    let tiempo = (Date.now()-tiempoInicio)/1000;
    texto = document.getElementById("resultadoTXT");
    resultado == n1+n2 ?
        texto.textContent = "Correcto": texto.textContent = "Incorrecto";
    texto.textContent = texto.textContent + ` - Tardaste ${tiempo} segundos`;
};

const contador=()=>{
    let numeros = [];
    let resultado=[0,0,0];
    const obtenerNumero = (n)=>{
        n > 0.5 ? numero= n*100 : numero = n*-100;
        return numero
    };
    for(let i=0;i<100;i++){
        numeros.push(obtenerNumero(Math.random()));
    }
    for(x of numeros){
        if(x<0){
            resultado[0]++;
        }else if(x==0){
            resultado[1]++;
        }else{
            resultado[2]++;
        }
    };

    document.getElementById("negativos").textContent = resultado[0];
    document.getElementById("ceros").textContent = resultado[1];
    document.getElementById("positivos").textContent = resultado[2];
};

const promedio=()=>{
    let matriz = [];
    let longitud = Math.floor(Math.random()*10+1);
    //Asigna valores aleatorios a la matriz
    for(let i = 0; i<longitud;i++){
        let array = [];
        for(let j=0; j<longitud;j++){
            array.push(Math.random()*100);
        }
        matriz.push(array);
    }
    //Obtener promedios
    let promedioTabla = document.getElementById("tablaProm");

    let filaCh = document.getElementById("numeroFila");
    let promedioCh = document.getElementById("promedioFila");

    let fila = document.createElement("tr");
    fila.id = "numeroFila";
    let prom = document.createElement("tr");
    prom.id = "promedioFila";

    for(let i = 0; i<longitud;i++){
        let promedio=0;
        let data = document.createElement("td");
        let dataProm = document.createElement("td");
        for(let j=0; j<longitud;j++){
            promedio += matriz[i][j];
        }
        promedio/=longitud;
        data.textContent = i;
        dataProm.textContent = promedio.toFixed(2);
        fila.appendChild(data);
        prom.appendChild(dataProm);
    }
    promedioTabla.replaceChild(fila,filaCh);
    promedioTabla.replaceChild(prom,promedioCh);
};

const invertir=()=>{
    let numero = prompt("Ingresa un numero");
    numero=numero.toString();
    let aux="";
    for(let i=numero.length-1;i>=0;i--){
        aux +=numero[i];
    }
    document.getElementById("nInvertido").textContent = aux;
}

const generarLista = ()=>{
    let lista = [];
    let cantidad = 10;
    //generar numeros aleatorios
    for(let i=0;i<cantidad;i++){
        lista.push(Math.floor(Math.random()*100));
    }
    //Obtener elementos
    let origenCh = document.getElementById("desordenada");
    let respuestaCh = document.getElementById("ordenada");
    //imprimir lista desordenada
    origenCh.textContent = lista;

    lista = insertionSort(lista);
    respuestaCh.textContent=lista;
}

const insertionSort = (arr) => {
    const l = arr.length;
    let j, temp;
    for ( let i = 1; i < l; i++ ) {
      j = i;
      temp = arr[ i ];
      while ( j > 0 && arr[ j - 1 ] > temp ) {
        arr[ j ] = arr[ j - 1 ];
        j--;
      }
      arr[ j ] = temp;
    }
    return arr;
};