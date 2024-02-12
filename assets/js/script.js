document.addEventListener('DOMContentLoaded', function() {
  const button = document.getElementById('jugarButton');
  button.addEventListener('click', jugar);
});

function obtenerJugadaComputadora() {
  const opciones = ["Piedra", "Papel", "Tijera"];
  const indiceAleatorio = Math.floor(Math.random() * 3);
  return opciones[indiceAleatorio];
}

function determinarGanador(jugadaUsuario, jugadaComputadora) {
  if (
    (jugadaUsuario === "Piedra" && jugadaComputadora === "Tijera") ||
    (jugadaUsuario === "Papel" && jugadaComputadora === "Piedra") ||
    (jugadaUsuario === "Tijera" && jugadaComputadora === "Papel")
  ) {
    return "usuario";
  } else if (jugadaUsuario === jugadaComputadora) {
    return "empate";
  } else {
    return "computadora";
  }
}

function mostrarResultado(resultado) {
  const resultadoElement = document.getElementById("resultado");
  resultadoElement.textContent = resultado;
}

function jugar() {
  const jugadas = ["Piedra", "Papel", "Tijera"];
  let jugadaUsuario = prompt("Elige: Piedra, Papel o Tijera").toLowerCase();

  // Validar la entrada del usuario
  while (!jugadas.some(opcion => opcion.toLowerCase() === jugadaUsuario)) {
    alert("Por favor, elige una opción válida: Piedra, Papel o Tijera");
    jugadaUsuario = prompt("Elige: Piedra, Papel o Tijera").toLowerCase();
  }

  const jugadaComputadora = obtenerJugadaComputadora();

  console.log("Tu jugada:", jugadaUsuario);
  console.log("Jugada de la computadora:", jugadaComputadora);

  const ganador = determinarGanador(jugadaUsuario, jugadaComputadora);

  if (ganador === "usuario") {
    mostrarResultado("¡Felicidades! ¡Has ganado!");
  } else if (ganador === "computadora") {
    mostrarResultado("Lo siento, has perdido contra la máquina.");
  } else {
    mostrarResultado("Es un empate.");
  }
}
