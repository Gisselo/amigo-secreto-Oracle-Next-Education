// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = []; //almacenar amigos

//guardar amigos
function agregarAmigo(){

    let input = document.getElementById('amigo');
    let nombre = input.value; // obtiene el valor del input

if (nombre) { // verifica que el input no esté vacío
        amigos.push(nombre); // agrega el nombre al array
        input.value = ''; // limpia el campo de entrada
        mostrarAmigos(); // llama a la función para mostrar la lista 
    } else {
        alert("Por favor, ingresa un nombre."); // alerta si el input está vacío
    }
}

function mostrarAmigos(){
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // limpia la lista antes de mostrarla

    amigos.forEach(function(amigo) {
        let li = document.createElement('li'); // crea un nuevo elemento de lista
        li.textContent = amigo; 
        listaAmigos.appendChild(li); // agrega el nombre a la lista
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Agrega al menos 2 nombres antes de sortear :)");
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * amigos.length); 
    let ganador = amigos[indiceAleatorio]; // Obtenemos el nombre de la lista

    //mostrar resultado:
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${ganador}</strong> 🎉</li>`;
}
