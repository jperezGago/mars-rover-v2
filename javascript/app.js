/***********************
 *  Clases
 ***********************/

class Rover {
  constructor() {
    this.direction = "N";
    this.x = 0;
    this.y = 0;
    this.travelLog = [
      [0, 0]
    ];
  }
}



/***********************
 *  variables Globales
 ***********************/

 var grid = [
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ']
];

var roverArray = [];  // Array donde guardaremos los objetos de la clase roer
var turnoRover;       // variable que marca el turno del Rover que le toca moverse
var rover;     // rover contendra el objeto rover que le toque moverse



/***********************
 *  Funciones 
 ***********************/

  function start (rover) {
    printDirection(rover);  // Llama a la funcion que imprime la direccion de rover
    printPosition(rover);	  // Llama a la funcion que imprime la posicion de rover
    printGrid(rover);       // Llama a la funcion que actualiza e imprime el grid
  }



/***********************
 *  Main
 ***********************/

roverArray[0] = new Rover();            // El primer objeto de Rover lo introducimos en la primera posicion del array de Rovers

turnoRover = 0;                         // Turno inicial
rover = roverArray[turnoRover];  // Rover inicial 

alert("Hola me llamo Rover, y hoy vas a ser mi piloto por los páramos de Marte");  

start(rover);  // Llama a lafuncion que pinta el grid y muestra la direccion y posicion del Rover actual
printTurnoRover();    // Llama a la funcion que indica el turno de Rover
