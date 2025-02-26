let listaAmigos = [];
let campoAmigo = document.getElementById("amigo");
let ulListaAmigos = document.getElementById("listaAmigos");
let ulResultado = document.getElementById("resultado");

function agregarAmigo() {
    if (campoAmigo.value === "") {
        alert("Por favor, inserte un nombre");
    } else {
        let nombreAmigo = campoAmigo.value;
        listaAmigos.push(nombreAmigo);
        ulListaAmigos.innerHTML += `<li>${nombreAmigo}</li>`;
        campoAmigo.value = "";
    }
}

function sortearAmigo() {
    let amigoSecreto = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
    ulResultado.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`;
}
