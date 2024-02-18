let numeroSecreto = Math.floor(Math.random()*10)+1;
let numeroUsuario;
let intentos = 1;
// let palabraVeces = "vez";
let maximosIntentos = 3;

console.log(numeroSecreto);
while (numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt(prompt("Me indicas un numero del 1 al 10, por favor:"));

    console.log(numeroUsuario);
    if (numeroUsuario == numeroSecreto) {
        alert(`acertaste, el numero es: ${numeroUsuario}. lo hiciste en ${intentos} ${intentos == 1 ? "vez" : "veces" }`);
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert("el numero secreto es menor");
        } else {
            alert("el numero secreto es mayor");
        }
        // intentos = intentos + 1; 
        // intentos +=1;
        intentos++;
        // palabraVeces = "veces";
        if (intentos > maximosIntentos) {
            alert (`Has alcanzado el numero maximo de ${maximosIntentos} intentos.`);
            break;
        }
        // alert("Lo siento, no acertaste el numero");
    }
}