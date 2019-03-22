/***********************
 *  Funciones 
 ***********************/

function obstacles(cantidadObs){

  var posicionObs = [];  // Matriz que guardara en cada fila la posicion x, y random creada

  if (cantidadObs > 10) {   // Si se han introducido mas de 10 obstaculos:
    cantidadObs = 10;       // Limita el numero de obstaculos a 10
  } 
                                                // -Borra los obstaculos anteriores-
  for (var y = 0; y < grid.length; y++) {       // Recorre las filas del tablero
    for (var x = 0; x < grid[y].length; x++) {    // Recorre las columnas del tablero
      if (grid[y][x] === 'X') {                     // si hay algun obstaculo:
        grid[y][x] = ' ';                             // lo borrqa.
      }
    }
  }
  
  for (var obsIndex = 0; obsIndex < cantidadObs; obsIndex++) {   // Bucle con numero de vueltas igual a la cantidad de obstaculos

    var obsDuplicado = false;                 // flag que marcara si la posicion del nuevo obstaculo ya existe
    var x = Math.floor(Math.random() * 10);   // Crea una posicion x, y random
    var y = Math.floor(Math.random() * 10);   // 
 
    if (obsIndex === 0) {       // si es el primer obstaculo a posicionar...
      if (grid[y][x] === 'O') {   // ...si la primera posicion coincide con algun rover:
        obsDuplicado = true;        // activamos el flag de colision
      }

    } else {                                          // si no es el primer obstaculo a posicionar...
      for (var arrayIndex = 0; arrayIndex < posicionObs.length; arrayIndex++) {    // Recorre el array de las posiciones
        // si la posicion 'arrayIndex' del array es igual a la creada de forma aleatoria con las variables x, y: 
        // o bien, en la la posicion random que marca x, y ya hay un Rover: 
        if ( ((posicionObs[arrayIndex][0] === x) && (posicionObs[arrayIndex][1] === y)) || (grid[y][x] === 'O') ) {   
          obsDuplicado = true;  //  Activo el flag que indica que la posicion esta duplicada o no es valida por colision
        } 
      }
    }  

    if (obsDuplicado === true) {      // si el flag de colision ha sido activado:
      obsIndex --;                      // restamos en una unidad el indice del bucle para que de una vuelta mas para posicionar el obstaculo
    } else {                          // si no se ha activado el flag de colision:
      posicionObs[obsIndex] = [x, y];   // introducimos en el array la posicion correcta para que pueda ser comprobada para obstaculos sucesores
      grid[y][x] = 'X';                 // pinta en el tablerola el obstaculo
    }
    
  }

  printObstaclesBrowser(grid);  // Cuando esta el tablero completo, llama a la funcion que dibuja los obstaculos en el browser
  start(rover);          // Llama a lafuncion que pinta el grid y muestra la direccion y posicion del Rover actual
  printTurnoRover();            // Llama a la funcion que indica el turno de Rover
}
