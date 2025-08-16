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
// Recorre el array y agrega cada nombre como un elemento <li>
    amigos.forEach(amigo => {
        let nuevoElementoLista = document.createElement("li");
        nuevoElementoLista.textContent = amigo;
        lista.appendChild(nuevoElementoLista);
        console.log(nuevoElementoLista);
    })
  return;

}

//sacamos un número aleatorio y mostramos el amigo que corresponde a ese número
function sortearAmigo(){
    validarNumeroAmigos();
     let sorteo = Math.floor(Math.random()*amigos.length);

   console.log(sorteo);

    let amigoSecreto = amigos[sorteo];
 
    let sorteado = document.getElementById('resultado');

     sorteado.innerHTML = `El amigo secreto es ${amigoSecreto}`;
    
return;
}


// funcion para verificar si hay amigos en la lista y si hay mas de dos
function validarNumeroAmigos(){
    if (amigos == "" || amigos.length <= 2){
        alert("Agregue mas amigos para poder realizar el sorteo");
    }
    return;

}


//limpiamos caja
function limpiarCaja (){

     document.querySelector('#amigo').value = ''; 
}