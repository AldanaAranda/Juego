var y = Math.floor(Math.random() * 10 + 1);
var intentos = 1;

document.addEventListener("keypress", function (e) {
    document.getElementById("Adivinar").onclick = function(){
    var x = document.getElementById("Adivinanza").value = function () {
        if (e.key === "Enter" && x === y) {
            alertalert("FELICIDADES, lo adivinaste en " + intentos + " intentos")
        }
        else if (x > y) {
            intentos++;
            alert("Intenta un número más chico")
        }
        else {
            intentos++;
            alert("Intenta un número más grande")
        }
    }
}

})


