const readline = require('readline-sync');
const {generarNumeroAleatorio, verificarNumeroAleatorio, verificarAdivinanza} = require('./adivinanza');

const obtenerNumeroUsuario = () => {
    return readline.question('Ingresa un numero: ');
};

const juegoAdivinanza = () => {
    const numeroSecreto = generarNumeroAleatorio();
    let numeroAdivinado = 0;

    console.log('¡Bienvenido a Adivina el Numero Secreto!');
    console.log('Intenta adivinar el numero del 1 al 100. \n');

    while (numeroAdivinado !== numeroSecreto) {
        numeroAdivinado = obtenerNumeroUsuario();
        verificarAdivinanza(numeroSecreto, numeroAdivinado)
    }
}

juegoAdivinanza();