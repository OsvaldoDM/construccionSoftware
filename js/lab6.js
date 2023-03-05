const ocultar = () =>{
    let objeto = document.getElementById("objeto");
    if(objeto.style.visibility == "hidden"){
        objeto.style.visibility = "visible";
        alert("Aqui estoy!!");
    }else{
        objeto.style.visibility = "hidden";
        alert("Me escondi");
    }
};

const left = ()=>{
    document.querySelector(".left").style.position = "absolute";
};

const moverTop = ()=>{
    document.querySelector(".top").style.position = "absolute";
};

//Control de carrito
const agregar = (nombre)=>{
    let producto = document.getElementById(nombre);
    let cantidad =parseInt(producto.textContent,10)+1;
    producto.textContent=cantidad;
    calcularSubtotal(nombre,cantidad);
}
const quitar = (nombre)=>{
    let producto = document.getElementById(nombre);
    let cantidad =parseInt(producto.textContent,10);
    if(cantidad>0) cantidad-=1;
    producto.textContent=cantidad;
    calcularSubtotal(nombre,cantidad);
}

const calcularSubtotal=(nombre, cantidad)=>{
    let precio =parseInt(document.getElementById(nombre+"Precio").textContent.slice(1),10);
    let subtotalElement = document.getElementById(nombre+"Sub");
    subtotalElement.textContent = precio * cantidad;
    subtotalElement.textContent = "$" + subtotalElement.textContent;
    calculo();
    cambiarColor(nombre);
}

const calculo = ()=>{
    vik = document.getElementById("valorVikSub").textContent;
    bir = document.getElementById("valorBirSub").textContent;
    bor = document.getElementById("valorBorSub").textContent;
    ivaEle = document.getElementById("iva");
    totalEle = document.getElementById("total");

    total = parseInt(vik.slice(1))+parseInt(bir.slice(1))+parseInt(bor.slice(1));
    iva = total * 0.16;
    total += iva;
    ivaEle.textContent = iva.toFixed(2);
    ivaEle.textContent = "$" + ivaEle.textContent;
    totalEle.textContent = total.toFixed(2);
    totalEle.textContent = "$" + totalEle.textContent;
}

//cambiarColor
const cambiarColor = (nombre)=>{
    elemento = document.getElementById(nombre+"Sub");
    colores = ["red", "cyan", "yellow", "black", "blue", "green"];
    elemento.style.color = colores[Math.floor(Math.random()*colores.length)];
}

const aparecer=()=>{
    document.getElementById("alerta").style.visibility = "visible";
}

const desaparecer = ()=>{
    document.getElementById("alerta").style.visibility = "hidden";
}