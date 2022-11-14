// Traer elementos al HTML

var input1 = document.querySelector("#input1");
var input2 = document.querySelector("#input2");

var botonSuma = document.querySelector("#sumar");
var botonResta = document.querySelector("#restar");
var botonDivision = document.querySelector("#dividir");
var botonMultiplicacion = document.querySelector("#multiplicar");
var botonResetear = document.querySelector("#resetear");
var resultado = document.querySelector("#resultado");

var valorResultado = 0;


function sumar(){
if(valorResultado = Number(input1.value) + Number(input2.value));
        resultado.innerHTML = valorResultado;
}
botonSuma.addEventListener("click", sumar);

function restar(){
if( valorResultado = Number(input1.value) - Number(input2.value));
        resultado.innerHTML = valorResultado;
}
botonResta.addEventListener("click",restar);

function multiplicar(){
if(valorResultado = Number(input1.value) * Number(input2.value));
        resultado.innerHTML = valorResultado;
}
botonMultiplicacion.addEventListener("click",multiplicar);

function dividir(){
if(valorResultado = Number(input1.value) / Number(input2.value));
    resultado.innerHTML = valorResultado;
}
botonDivision.addEventListener("click", dividir);

function reset(){
if(valorResultado= "0"); Input1=""; Input2 = "";
        resultado.innerHTML = valorResultado;
}
botonResetear.addEventListener("click",reset);





