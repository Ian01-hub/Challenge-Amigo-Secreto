// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//creamos lista
let amigos = [];


//añadir amigos y verificar si no esta en blanco
function agregarAmigo() {
let nombreAmigos = (document.getElementById('amigo').value);

if(!nombreAmigos || nombreAmigos.trim().length === 0){
    alert("Por favor inserte un nombre valido");
}else{
    amigos.push(nombreAmigos);
    console.log (amigos);
    limpiarCaja();
    mostrarAmigos();

    return;
}

}

//crear lista de amigos
function mostrarAmigos (){

let lista = document.getElementById('listaAmigos');

 lista.innerHTML = "";
// Recorre el array y agrega cada nombre como un elemento k<li>
    amigos.forEach(amigo => {
        let nuevoElementoLista = document.createElement("li");
        nuevoElementoLista.textContent = amigo;
        lista.appendChild(nuevoElementoLista);
    })
  return;

}



function limpiarCaja (){

     document.querySelector('#amigo').value = ''; 
}