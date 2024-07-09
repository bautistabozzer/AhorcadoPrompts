(function() {
    function iniciarJuego(dificultad) {
        const palabras = {
            facil: ["gato", "perro", "casa", "sol", "luna"],
            medio: ["javascript", "computadora", "tecnologia", "internet", "desarrollo"],
            dificil: ["programacion", "inconstitucional", "paralelepipedo", "electroencefalograma", "desoxirribonucleico"]
        };
        
        const palabra = palabras[dificultad][Math.floor(Math.random() * palabras[dificultad].length)];
        let intentosRestantes = 6;
        let letrasAdivinadas = Array(palabra.length).fill('_');
        let letrasFalladas = [];

        alert("¡Bienvenido al juego de Ahorcado!");
        alert("La palabra es: " + letrasAdivinadas.join(' '));
        alert("Tienes " + intentosRestantes + " intentos restantes.");

        while (intentosRestantes > 0 && letrasAdivinadas.includes('_')) {
            let letra = prompt("Introduce una letra:");

            if (letra === null) {
                alert("Juego cancelado.");
                return;
            }

            letra = letra.toLowerCase();

            if (letra.length !== 1 || !/[a-z]/.test(letra)) {
                alert("Por favor, ingresa una letra válida.");
                continue;
            }

            if (letrasAdivinadas.includes(letra) || letrasFalladas.includes(letra)) {
                alert("Ya has adivinado esa letra. Intenta con otra.");
                continue;
            }

            if (palabra.includes(letra)) {
                for (let i = 0; i < palabra.length; i++) {
                    if (palabra[i] === letra) {
                        letrasAdivinadas[i] = letra;
                    }
                }
                alert("¡Bien hecho! La palabra ahora es: " + letrasAdivinadas.join(' '));
            } else {
                letrasFalladas.push(letra);
                intentosRestantes--;
                alert("Letra incorrecta. Te quedan " + intentosRestantes + " intentos.");
            }
        }

        if (letrasAdivinadas.join('') === palabra) {
            alert("¡Felicidades! Has adivinado la palabra: " + palabra);
        } else {
            alert("Lo siento, te has quedado sin intentos. La palabra era: " + palabra);
        }
    }

    const iniciar = confirm("¿Quieres iniciar el juego de ahorcado?");
    if (iniciar) {
        let dificultad;
        while (true) {
            dificultad = prompt("Elige la dificultad:\n1 - Fácil\n2 - Medio\n3 - Difícil");
            if (["1", "2", "3"].includes(dificultad)) {
                break;
            } else {
                alert("Por favor, elige una dificultad válida: 1 (Fácil), 2 (Medio) o 3 (Difícil)");
            }
        }

        if (dificultad === "1") {
            dificultad = "facil";
        } else if (dificultad === "2") {
            dificultad = "medio";
        } else if (dificultad === "3") {
            dificultad = "dificil";
        }
        iniciarJuego(dificultad);
    } else {
        alert("Juego cancelado.");
    }
})();
