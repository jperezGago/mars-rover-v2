/***********************
 *  Funciones
 ***********************/

 // Buttons

function createObstacles() {      // boton obstaculos
  // Captura desde una ventana emergente el numero de obstaculos a introducir
  var cantidadObs = prompt("Por favor, introduzca el numero de obstaculos deseados, 10 obstaculos maximo");

  if (obstacles != null) {
    obstacles(cantidadObs); // LLama a la funcion que crea los obstaculos con la cantidad introducida
  }
}


function createCommands() {       // 'Aceptar' comandos
  var commands;

  commands = document.getElementById("commands").value; // Captura el dato introducido desde el input
  commandList(commands); // Llama a la funcion que ejecuta los comandos introducidos
}


// Imagenes Rover

function actualizaImagenRover(rover) {
  document.getElementById("rover-pic" + turnoRover).style.left = rover.x * 60 + "px"; // Actualizar la posicion x de la imagen de Rover
  document.getElementById("rover-pic" + turnoRover).style.top = rover.y * 60 + "px"; // Actualizar la posicion y de la imagen de Rover
}


function printRoverBrowser(rover) {
  document.getElementById("rover-pic" + turnoRover).style.opacity = 1; // Muestra la imagen del nuevo rover
}


// Imagenes Emoji

function switchFinger(rover) {

  switch (rover.direction) {
    case "N":                                                   // Si la direccion de rover es Norte:
      document.getElementById("finger-up").style.opacity = 1;     // Muestra la imagen finger up
      document.getElementById("finger-down").style.opacity = 0;   // Oculta la imagen finger down
      document.getElementById("finger-left").style.opacity = 0;   // Oculta la imagen finger left
      document.getElementById("finger-right").style.opacity = 0;  // Oculta la imagen finger right
      break;

    case "S":                                                   // Si la direccion de rover es Sur:
      document.getElementById("finger-up").style.opacity = 0;
      document.getElementById("finger-down").style.opacity = 1;
      document.getElementById("finger-left").style.opacity = 0;
      document.getElementById("finger-right").style.opacity = 0;
      break;

    case "W":                                                   // Si la direccion de rover es Oeste:
      document.getElementById("finger-up").style.opacity = 0;
      document.getElementById("finger-down").style.opacity = 0;
      document.getElementById("finger-left").style.opacity = 1;
      document.getElementById("finger-right").style.opacity = 0;
      break;

    case "E":                                                   // Si la direccion de rover es Este:
      document.getElementById("finger-up").style.opacity = 0;
      document.getElementById("finger-down").style.opacity = 0;
      document.getElementById("finger-left").style.opacity = 0;
      document.getElementById("finger-right").style.opacity = 1;
      break;

    default:
      break;
  }
}

function switchBorderFinger(turnoRover) {
  var propiedadesBorde;

  switch (turnoRover) {
    case 0:
      propiedadesBorde = "2px solid blue";
      break;
    case 1:
      propiedadesBorde = "2px solid red";
      break;
    case 2:
      propiedadesBorde = "2px solid green";
      break;
    default: 
      break;
  }

  document.getElementById('finger-up').style.border = propiedadesBorde;     // Crea un borde de color propiedadesBorde
  document.getElementById("finger-down").style.border = propiedadesBorde;  // Crea un borde de color propiedadesBorde
  document.getElementById("finger-left").style.border = propiedadesBorde;  // Crea un borde de color propiedadesBorde
  document.getElementById("finger-right").style.border = propiedadesBorde;  // Crea un borde de color propiedadesBorde
}


// Obstacles

function printObstaclesBrowser(grid) {
  var numObs = 0; // marca el numero de la posicion del obstaculo a mostrar

  for (var i = 0; i < 10; i++) {
    // Reinicio los obstaculos por si se han creado con anterioridad
    document.getElementById("obstaculo" + i).style.opacity = 0; // Oculto la imagen del obstaculo correspondiente
    document.getElementById("obstaculo" + i).style.left = 0 + "px"; // Reseteo la posicion del obstaculo a la posicion 0,0
    document.getElementById("obstaculo" + i).style.top = 0 + "px";
  }

  for (var y = 0; y < grid.length; y++) {
    for (var x = 0; x < grid[y].length; x++) {
      if (grid[y][x] === "X") {
        document.getElementById("obstaculo" + numObs).style.opacity = 1; // Muestra la imagen del obstaculo correspondiente
        document.getElementById("obstaculo" + numObs).style.left =
          x * 60 + "px"; // Actualiza la posicion de la imagen del obstaculo correspondiente
        document.getElementById("obstaculo" + numObs).style.top = y * 60 + "px";

        numObs++; // Aumento en 1 el numero de obstaculos mostrados
      }
    }
  }
}


