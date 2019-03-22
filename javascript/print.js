/***********************
 *  Funciones 
 ***********************/

function printDirection(rover) {
  console.log("dir: " + rover.direction);	// Imprime la direccion de rover
}


function printPosition(rover) {
  console.log("pos: " + rover.x + ", " + rover.y);	// Imprime la posicion de rover
}


function printChronology(rover) {
  console.log("Chronology: ")

  for (var i = 0; i < rover.travelLog.length; i++) {  // Bucle para que se imprima de una manera mas legible la cronologia de rover
    console.log(" " + (i + 1) + ". " + rover.travelLog[i])  // Imprime la cronologia de rover
  }

}


function printGrid(rover) {
  console.log("Grid:");
  grid[rover.y][rover.x] = 'O'; // Actualiza en el grid la posicion de rover
  console.log(grid); // Dibuja la posicion del grid
}


function printTurnoRover() {
  console.log("turno de Rover " + (turnoRover + 1));  // informa del turno de Rover
}