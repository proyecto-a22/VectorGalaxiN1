const canvas = document.getElementById("galaxyCanvas");
const ctx = canvas.getContext("2d");

let estrellas = [];
const CANTIDAD_ESTRELLAS = 350;

let ancho;
let alto;


function ajustarCanvas() {

    const rect = canvas.getBoundingClientRect();

    ancho = canvas.width = rect.width;
    alto = canvas.height = rect.height;

}


window.addEventListener("resize", () => {

    ajustarCanvas();
    crearEstrellas();

});


function crearEstrellas() {

    estrellas = [];

    for (let i = 0; i < CANTIDAD_ESTRELLAS; i++) {

        estrellas.push({

            x: Math.random() * ancho,

            y: Math.random() * alto,

            radio: Math.random() * 2 + 0.4,

            velocidad: Math.random() * 0.8 + 0.2,

            brillo: Math.random(),

            profundidad: Math.random()

        });

    }

}


function dibujarFondo() {

    let color = "#000000";

    if (typeof obtenerEstadoHiperespacio === "function") {

        const estado = obtenerEstadoHiperespacio();

        if (estado.activo) {

            color = "#020b18";

        }

    }

    ctx.fillStyle = color;

    ctx.fillRect(
        0,
        0,
        ancho,
        alto
    );

}


function dibujarEstrellas() {

    let velocidad = 1;
    let modoHiper = false;
    let fase = "normal";


    if (typeof obtenerEstadoHiperespacio === "function") {

        const estado = obtenerEstadoHiperespacio();

        velocidad = estado.velocidad;
        modoHiper = estado.activo;
        fase = estado.fase;

    }


    for (const estrella of estrellas) {


        let movimiento = estrella.velocidad * velocidad;


        estrella.y += movimiento;


        if (estrella.y > alto + 20) {

            estrella.y = -10;
            estrella.x = Math.random() * ancho;

        }


        let brillo =
            0.4 +
            Math.sin(
                Date.now() * 0.002 +
                estrella.brillo * 10
            ) * 0.3;


        ctx.beginPath();


        if (modoHiper) {


            let longitud = movimiento * 10;


            if (fase === "aceleracion") {

                longitud *= 0.5;

            }


            if (fase === "salida") {

                longitud *= 0.3;

            }


            ctx.strokeStyle =
                `rgba(180,220,255,${brillo})`;


            ctx.lineWidth =
                estrella.radio;


            ctx.moveTo(
                estrella.x,
                estrella.y
            );


            ctx.lineTo(
                estrella.x,
                estrella.y - longitud
            );


            ctx.stroke();


        } else {


            ctx.fillStyle =
                `rgba(255,255,255,${brillo})`;


            ctx.arc(
                estrella.x,
                estrella.y,
                estrella.radio,
                0,
                Math.PI * 2
            );


            ctx.fill();

        }

    }

}


function animar() {

    dibujarFondo();

    dibujarEstrellas();


    if (typeof actualizarHiperespacio === "function") {

        actualizarHiperespacio();

    }


    requestAnimationFrame(animar);

}


ajustarCanvas();
crearEstrellas();
animar();