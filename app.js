// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//creamos lista
let listaAmigos = [];



function agregarAmigo() {
let nombreAmigos = (document.getElementById('amigo').value);

if(nombreAmigos == ""){
    alert("Por favor inserte un nombre valido");
}else{
    listaAmigos.push(nombreAmigos);
    console.log (listaAmigos);
    limpiarCaja();
}

}

function limpiarCaja (){

     document.querySelector('#amigo').value = ''; 
}