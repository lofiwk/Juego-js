/* 
Función obtenerJugadaComputadora():
    opciones = ["Piedra", "Papel", "Tijera"]
    índiceAleatorio = Generar un número aleatorio entre 0 y 2
    devolver opciones[índiceAleatorio]

Función determinarGanador(jugadaUsuario, jugadaComputadora):
    Si (jugadaUsuario es igual a jugadaComputadora):
        devolver "empate"
    Sino si (jugadaUsuario es "Piedra" y jugadaComputadora es "Tijera") o
            (jugadaUsuario es "Papel" y jugadaComputadora es "Piedra") o
            (jugadaUsuario es "Tijera" y jugadaComputadora es "Papel"):
        devolver "usuario"
    Sino:
        devolver "computadora"

Función mostrarResultado(resultado):
    Mostrar resultado en la pantalla

Función jugar():
    vecesAJugar = Solicitar al usuario las veces que desea jugar consecutivamente
    Para cada juego en el rango de vecesAJugar:
        jugadaUsuario = Solicitar al usuario su jugada
        jugadaComputadora = obtenerJugadaComputadora()
        Mostrar "Tu jugada: [jugadaUsuario]" en pantalla
        Mostrar "Jugada de la computadora: [jugadaComputadora]" en pantalla
        ganador = determinarGanador(jugadaUsuario, jugadaComputadora)
        Si (ganador es "usuario"):
            mostrarResultado("¡Felicidades! ¡Has ganado!")
        Sino si (ganador es "computadora"):
            mostrarResultado("Lo siento, has perdido contra la máquina.")
        Sino:
            mostrarResultado("Es un empate.")
 */

// Función para obtener la jugada aleatoria de la computadora
function obtenerJugadaComputadora() {
  const opciones = ["Piedra", "Papel", "Tijera"];
  const indiceAleatorio = Math.floor(Math.random() * 3);
  return opciones[indiceAleatorio];
}

// Función para determinar al ganador de la partida
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

// Función para actualizar el resultado en la pantalla
function mostrarResultado(resultado) {
  const resultadoElement = document.getElementById("resultado");
  resultadoElement.textContent = resultado;
}

// Función principal del juego
function jugar() {
  const jugadas = ["Piedra", "Papel", "Tijera"];
  const jugadaUsuario = prompt("Elige: Piedra, Papel o Tijera");
  if (!jugadas.includes(jugadaUsuario)) {
    alert("Por favor, elige una opción válida: Piedra, Papel o Tijera");
    return;
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
