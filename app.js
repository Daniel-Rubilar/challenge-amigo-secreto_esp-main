let amigos = [];

function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nombreAmigo = inputAmigo.value.trim();

    // Expresión regular para validar nombres.
    let regexNombre = /^[A-Za-zÁáÉéÍíÓóÚúÑñ\s]+$/;

    if (!nombreAmigo) {
        alert("Por favor, ingrese un nombre");
        return;
    }

    //verifica si el nombre ingresado es válido y envia alerta.
    if (!regexNombre.test(nombreAmigo)) {
        alert("Solo se permiten nombres válidos (sin números ni caracteres especiales)");
        return;
    }

    // Verificar si el nombre ya existe en la lista (insensible a mayúsculas/minúsculas).
    let nombreNormalizado = nombreAmigo.toLowerCase();
    let existe = amigos.some(amigo => amigo.toLowerCase() === nombreNormalizado);

    //validar que el nombre no este duplicado.
    if (existe) {
        alert(`El nombre "${nombreAmigo}" ya está en la lista`);
        return;
    }

    amigos.push(nombreAmigo); // Se guarda el nombre en el array con su formato original
    inputAmigo.value = "";
    inputAmigo.focus();
    actualizarLista();
}

// funcion para actualizar la lista de amigos en la interfaz
function actualizarLista() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; 

    amigos.forEach(amigo => {
        let item = document.createElement("li");
        item.textContent = amigo;
        listaAmigos.appendChild(item);
    });
}

//funcion para seleccionar un amigo aleatorio.
function sortearAmigo() {
    //validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert("No hay amigos para sortear");
        return;
    }

    // Elegir un amigo aleatorio.
    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceSorteado];

    // Mostrar el resultado
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;

    // Eliminar al amigo sorteado de la lista
    amigos.splice(indiceSorteado, 1);

    // Actualizar la lista visualmente
    actualizarLista();

    // Verificar si la lista está vacía después de actualizar
    setTimeout(() => {
        if (amigos.length === 0) {
            alert("Todos los amigos han sido sorteados.");
        }
    }, 100);
}