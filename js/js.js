var y = Math.floor(Math.random() * 10 + 1);
var intentos = 1;

document.addEventListener("keypress", function(e) {
    if (e.key === "Enter" || e.onClick) {
        const o = document.querySelector("#enviar");
        o.click(document.getElementById("enviar").onclick = function () {
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
        })

    }
})




