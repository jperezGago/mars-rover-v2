/***********************
 *  Funciones 
 ***********************/

function addRovers() {

  if (roverArray.length === 3) {                                          // si hay 3 rovers en el tablero:
    console.log("Ya existen 3 Rovers coexistiendo, no puede introducir ningun mas");
    alert("Ya coexisten 3 Rovers, no puede introducir ningun más");

  } else {                                                                // si hay menos de 3 rovers...

    if (roverArray.length === 1) {                                          // (Exclusivo para browser) Si solo hay un rover en el tablero: 
      document.getElementById('rover-pic0').style.border = "2px solid blue";  // Crea un borde azul al primer rover 
    }
  
    roverArray.push(new Rover());         // Crea un nuevo objeto rover y lo introduce en la ultima posicion del array
    turnoRover = roverArray.length - 2;   // Posicionamos el turno en el anterior Rover.  
    actualizaTurnoRover();                // Llamamos a la funcion que actualiza el turno y se lo pondra al nuevo Rover.
  
    if (grid[0][0] != ' ') {              // Si la posicion 0, 0 del grid esta vacia:
      var y = 0;
      var x = 0;
  
      while ( (rover.x === 0 && rover.x === 0) && (y < grid.length) ) {       // Recorre la fila del tablero hasta que termine o hasta que posicionemos a Rover 
                                                                                            // o lo que es lo mismo, deje de estar en la posicion inicial 0, 0
        while ( (rover.x === 0 && rover.x === 0) && (x < grid[y].length) ) {    // Recorre la columna hasta que se acabe o hasta que posicionemos a Rover
          
          if (grid[y][x] === ' ') {           // Si la posicion esta vacia:
            rover.y = y;                 // 
            rover.x = x;                 // Actualizo la posicion del Rover x, y
            rover.travelLog[0] = [x, y]  // Actualizo la primera posicion de la propiedad travelLog, ya que ya no es igual a 0, 0 
          } else { 
            x++;                                // Si hay algo en la posicion, incremento la columna
          }                                                                       
        }
        y++;                                    // Si ha llegado al final de la columna, incremento la fila
      }
    }

    start(rover);                  // llama a la funcion que va a imprimir el grid, la direccion y la posicion.
    actualizaImagenRover(rover);   // llama a la funcion que va a actualiar la posicion de la imagen de rover.
    printRoverBrowser(rover);      // llama a la funcion que va a dibujar la imagen de Rover.
    printTurnoRover();                          // Llama a la funcion que indica el turno de Rover
  }
}


function actualizaTurnoRover() {

  if (roverArray.length > 1)  {                 // Si hay mas de un rover...
    
    if (turnoRover === roverArray.length - 1) { // ...si es el turno del ultimo Rover:
      turnoRover = 0;                             // le da el turno al primer Rover.
    } else {                                    // ...si no es el turno del ultimo Rover:
      turnoRover++;                               // led a el turno al siguiente rover.
    }

    rover = roverArray[turnoRover];      // Actualiza el Rover activo al rover que se encuentre en la posicion del turno dentro del array.

    printTurnoRover();                          // Llama a la funcion que indica el turno de Rover
    switchBorderFinger(turnoRover);             // Llama a la funcion que actualiza el color del borde de Rover, segun el turno
    switchFinger(rover);                 // Llama a la funcion que actualiza la imagen del emoji 
  }
}

  
