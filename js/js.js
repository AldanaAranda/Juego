var y = Math.floor(Math.random() * 10 + 1);
var intentos = 1;

document.getElementById("enviar").onclick = function () {
            var x = document.getElementById("respuesta").value;
            if (x == y) {
                alert("FELICIDADES! Has adivinado en " + intentos + " intentos");
            }
            else if (x > y) {
                intentos++;
                alert("Intenta con un número más chico");
            }
            else {
                intentos++;
                alert("Intenta con un número más grande");
            }
        }




