const generarNumeroAleatorio = () => {
    return Math.floor(Math.random() * 100) + 1;
};

const verificarAdivinanza = (numeroSecreto, numeroAdivinado) => {
    if (numeroAdivinado == numeroSecreto) {
        console.log('¡Felicitaciones! ¡Adivinaste el numero secreto!');
    } else if (numeroAdivinado > numeroSecreto) {
        console.log('El numero secreto es menor. Prueba otra vez');
    } else {
        console.log('El numero secreto es mayor. Prueba de nuevo');
    }
};

module.exports = {
    generarNumeroAleatorio,
    verificarAdivinanza
};


