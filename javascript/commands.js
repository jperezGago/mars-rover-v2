/***********************
 *  variables Globales
 ***********************/

var noActualizarTurno;

/***********************
 *  Funciones 
 ***********************/

function commandList(commands) {
  
  noActualizarTurno = true           // Activo la variable global para que no actualice el turno en el conjunto de movimientos
  commands = commands.toLowerCase(); // Pasamos el comando recibido a minusculas

  for (var i = 0; i < commands.length; i++) { // Bucle con un numero de vueltas igual al numero de comandos introducidos
    switch (commands[i]) { 
      case "r":
        turnRight(rover); // Si el comando introducido es una r, ejecuta la funcion turnRight
        break;
      case "l":
        turnLeft(rover);  // Si el comando introducido es una l, ejecuta la funcion turnLeft
        break;
      case "f":
        moveForward(rover); // Si el comando introducido es una f, ejecuta la funcion moveForward
        break;
      case "b":
        moveBackward(rover);  // Si el comando introducido es una b, ejecuta la funcion moveBackward
        break;
      default:
        console.log("el comando de texto tiene un caracter invalido en comando numero " + (i + 1)); // Informa por consola de un comando mal introducido
        alert("el comando de texto tiene un caracter invalido en comando numero " + (i + 1)); // Informa por ventana de un comando mal introducido
        break;
    }
  }
  noActualizarTurno = false;      // Desactivo la variable global 

  printChronology(rover);	// Llama a la funcion que imprime la cronologia de rover
  actualizaTurnoRover();                  // Llama a la funcion que actualiza el turno de rover. Si existiera volveria a moverse el mismo.
}

