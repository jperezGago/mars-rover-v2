/***********************
 *  Funciones 
 ***********************/

function turnLeft(rover) {

  switch (rover.direction) {  // Gira 90 grados a la izquierda, segun la direccion actual de rover
    case "N": 
      rover.direction = "W";  // Actualiza la direccion de Rover
      break;
    case "W":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "E";  // Llama a la funcion que actualiza la posicion del icono finger. Le pasamos un 4 para que muestre el right
      break;
    case "E":
      rover.direction = "N";  // Llama a la funcion que actualiza la posicion del icono finger. Le pasamos un 4 para que muestre el finger finger up 
      break;
    default: 
      break;
  }

  printDirection(rover);	// Llama a la funcion que imprime la direccion de rover 
  switchFinger(rover);  // Llama a la funcion que cambia la direccin del emoji
}


function turnRight(rover) {

  switch (rover.direction) {  
    case "N": 
      rover.direction = "E";  
      break;
    case "E":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "N";
      break;
    default: 
      break;
  }

  printDirection(rover);  // Llama a la funcion que imprime la direccion de rover 
  switchFinger(rover);  // Llama a la funcion que cambia la direccin del emoji
}


function moveForward(rover) {

  var colision = false;         // Variable que recibira de una funcion, true: si existe colision, false: si no la hay. 
  grid[rover.y][rover.x] = ' ';	// Borramos la posicion actual de rover en el grid antes de actualizar las propiedades x, y

  switch (rover.direction) {
    case "N":     // Si rover apunta a la direccion Norte...
      colision = checkColision(rover, 'forward'); // Guarda en la variable colision lo que devuelve la funcion checkColision,
                                                  // a la que le pasa por parametros a rover y el movimiento que va hacer
      if (!colision) {
        rover.y--;                                // Actualiza la propiedad "y" hacia una fila superior (hacia arriba)
        rover.travelLog.push([rover.x, rover.y]); // Introduce la posicion en la propiedad tavelLog
      }
      break;

    case "E":     // Si rover apunta a la direccion Este...
      colision = checkColision(rover, 'forward'); // Guarda en la variable colision lo que devuelve la funcion checkColision,
                                                  // a la que le pasa por parametros a rover y el movimiento que va hacer
      if (!colision) {
        rover.x++;                                // Actualiza la propiedad "y" hacia una fila superior (hacia arriba)
        rover.travelLog.push([rover.x, rover.y]); // Introduce la posicion en la propiedad tavelLog
      }
      break;

    case "S":     // Si rover apunta a la direccion Sur...
      colision = checkColision(rover, 'forward'); // Guarda en la variable colision lo que devuelve la funcion checkColision,
                                                  // a la que le pasa por parametros a rover y el movimiento que va hacer
      if (!colision) {
        rover.y++;                                // Actualiza la propiedad "y" hacia una fila superior (hacia arriba)
        rover.travelLog.push([rover.x, rover.y]); // Introduce la posicion en la propiedad tavelLog
      }
      break;

    case "W":     // Si rover apunta a la direccion Oeste...
      colision = checkColision(rover, 'forward'); // Guarda en la variable colision lo que devuelve la funcion checkColision,
                                                  // a la que le pasa por parametros a rover y el movimiento que va hacer
      if (!colision) {
        rover.x--;                                // Actualiza la propiedad "y" hacia una fila superior (hacia arriba)
        rover.travelLog.push([rover.x, rover.y]); // Introduce la posicion en la propiedad tavelLog
      }
      break;

    default:
      break;

    }
  
	printPosition(rover);	        // Llama a la funcion que imprime la posicion de rover
  printGrid(rover);             // Llama a la funcion que actualiza e imprime el grid
  actualizaImagenRover(rover);  // Llama a la funcion que actualiza la posicion de la imagen de rover

  if (!colision && !noActualizarTurno) {  // Si no existe colision:
    actualizaTurnoRover();                  // Llama a la funcion que actualiza el turno de rover. Si existiera volveria a moverse el mismo.
  } 
}


function moveBackward(rover) {

  var colision = false;
  grid[rover.y][rover.x] = ' '; 

  switch (rover.direction) {
    case "N": 
      colision = checkColision(rover, 'backward');

      if (!colision) {
        rover.y++;                                
        rover.travelLog.push([rover.x, rover.y]); 
      }
      break;

    case "E":
      colision = checkColision(rover, 'backward');

      if (!colision) {
        rover.x--;                                
        rover.travelLog.push([rover.x, rover.y]); 
      }
      break;

    case "S":
      colision = checkColision(rover, 'backward');

      if (!colision) {
        rover.y--;                                
        rover.travelLog.push([rover.x, rover.y]); 
      }
      break;

    case "W":
      colision = checkColision(rover, 'backward');

      if (!colision) {
        rover.x++;                                
        rover.travelLog.push([rover.x, rover.y]); 
      }
      break;

    default:
      break;
  }
    
  printPosition(rover);                     
  printGrid(rover); 
  actualizaImagenRover(rover);            
    
  if (!colision && !noActualizarTurno) { 
    actualizaTurnoRover(); 
  }
}


function checkColision (rover, sense) {
  var colision = 0;   // 0: no colision - 1: fin del tablero - 2: colision con obstaculo - 3: colision con otro rover.

  var nextPositionNorth = (rover.direction === 'N' && sense === 'forward') || (rover.direction === 'S' && sense === 'backward');
  var nextPositionSouth = (rover.direction === 'S' && sense === 'forward') || (rover.direction === 'N' && sense === 'backward');
  var nextPositionEast = (rover.direction === 'E' && sense === 'forward') || (rover.direction === 'W' && sense === 'backward');
  var nextPositionWest = (rover.direction === 'W' && sense === 'forward') || (rover.direction === 'E' && sense === 'backward');
  
  if (nextPositionNorth) {  // si la posicion a checkear es la siguiente en direccion Norte...
    if (rover.y === 0) {      // ...y si en la fila superior no hay tablero:
      colision = 1;             // fin de tablero
    } else if ( grid[(rover.y)-1][rover.x] === 'O' ) {  // ...y si en la fila superior no hay otro Rover:
      colision = 2;                                       // colision con Rover
    } else if (grid[(rover.y)-1][rover.x] === 'X') {    // ...y si en la fila superior hay un obstaculo:
      colision= 3;                                        // colision con obstaculo
    }

  } else if (nextPositionSouth) {  // si la posicion a checkear es la siguiente en direccion Sur...
    if (rover.y === 9) {   
      colision = 1;
    } else if ( grid[(rover.y)+1][rover.x] === 'O' ) {     
      colision = 2;
    } else if ( grid[(rover.y)+1][rover.x] === 'X' ) {
      colision = 3;
    }else { colision = 0; }

  } else if (nextPositionEast) {  // si la posicion a checkear es la siguiente en direccion Eorte...
    if (rover.x === 9) {   
      colision = 1;
    } else if ( grid[rover.y][(rover.x)+1] === 'O' ) {     
      colision = 2;
    } else if ( grid[rover.y][(rover.x)+1] === 'X' ) {
      colision = 3;
    } else { colision = 0; }

  } else if (nextPositionWest) {  // si la posicion a checkear es la siguiente en direccion Oeste...
    if (rover.x === 0) {   
      colision = 1;
    } else if ( grid[rover.y][(rover.x)-1] === 'O' ) {    
      colision = 2;
    } else if ( grid[rover.y][(rover.x)-1] === 'X' ) {
      colision = 3;
    } else { colision = 0; }
  } 

  if (colision === 1) {   // Si fin de tablero:
    console.log("Si me muevo más me saldré del tablero");
    alert("Si me muevo más me saldré del trablero");
    return true;            // true: colision, false: no colision

  } else if (colision === 2) {  // Si hay colision con Rover:
    console.log("No puedo avanzar más, hay otro Rover obstaculizando");
    alert("No puedo avanzar más, hay otro Rover obstaculizando");
    return true;            // true: colision, false: no colision

  } else if (colision === 3) {  // Si hay colision con un obstaculo:
    console.log("No puedo avanzar más, he topado con un meteorito");
    alert("No puedo avanzar más, he topado con un meteorito");
    return true;            // true: colision, false: no colision

  } else { return false; }  // true: colision, false: no colision

}
