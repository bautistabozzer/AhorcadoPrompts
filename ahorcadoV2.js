(function() {
    const palabras = {
        facil: ["gato", "perro", "casa", "sol", "luna"],
        medio: ["javascript", "computadora", "tecnologia", "internet", "desarrollo"],
        dificil: ["programacion", "inconstitucional", "paralelepipedo", "electroencefalograma", "desoxirribonucleico"]
    };

    function seleccionarPalabra(dificultad) {
        const palabrasDificultad = palabras[dificultad];
        return palabrasDificultad[Math.floor(Math.random() * palabrasDificultad.length)];
    }

    function mostrarMensaje(mensaje) {
        alert(mensaje);
    }

    function obtenerLetra() {
        let letra = prompt("Introduce una letra:");
        if (letra) {
            letra = letra.toLowerCase();
        }
        return letra;
    }

    function esLetraValida(letra) {
        return letra.length === 1 && /[a-z]/.test(letra);
    }

    function iniciarJuego(dificultad) {
        const palabra = seleccionarPalabra(dificultad);
        let intentosRestantes = 6;
        let letrasAdivinadas = Array(palabra.length).fill('_');
        let letrasFalladas = [];

        mostrarMensaje("¡Bienvenido al juego de Ahorcado!");
        mostrarMensaje("La palabra es: " + letrasAdivinadas.join(' '));
        mostrarMensaje("Tienes " + intentosRestantes + " intentos restantes.");

        while (intentosRestantes > 0 && letrasAdivinadas.includes('_')) {
            let letra = obtenerLetra();

            if (letra === null) {
                mostrarMensaje("Juego cancelado.");
                return;
            }

            if (!esLetraValida(letra)) {
                mostrarMensaje("Por favor, ingresa una letra válida.");
                continue;
            }

            if (letrasAdivinadas.includes(letra) || letrasFalladas.includes(letra)) {
                mostrarMensaje("Ya has adivinado esa letra. Intenta con otra.");
                continue;
            }

            if (palabra.includes(letra)) {
                for (let i = 0; i < palabra.length; i++) {
                    if (palabra[i] === letra) {
                        letrasAdivinadas[i] = letra;
                    }
                }
                mostrarMensaje("¡Bien hecho! La palabra ahora es: " + letrasAdivinadas.join(' '));
            } else {
                letrasFalladas.push(letra);
                intentosRestantes--;
                mostrarMensaje("Letra incorrecta. Te quedan " + intentosRestantes + " intentos.");
            }
        }

        if (letrasAdivinadas.join('') === palabra) {
            mostrarMensaje("¡Felicidades! Has adivinado la palabra: " + palabra);
        } else {
            mostrarMensaje("Lo siento, te has quedado sin intentos. La palabra era: " + palabra);
        }
    }

    function seleccionarDificultad() {
        while (true) {
            let seleccion = prompt("Elige la dificultad:\n1 - Fácil\n2 - Medio\n3 - Difícil");
            if (seleccion === "1") return "facil";
            if (seleccion === "2") return "medio";
            if (seleccion === "3") return "dificil";
            mostrarMensaje("Por favor, elige una dificultad válida: 1 (Fácil), 2 (Medio) o 3 (Difícil)");
        }
    }

    const iniciar = confirm("¿Quieres iniciar el juego de ahorcado?");
    if (iniciar) {
        const dificultad = seleccionarDificultad();
        iniciarJuego(dificultad);
    } else {
        mostrarMensaje("Juego cancelado.");
    }
})();
