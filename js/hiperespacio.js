let estadoHiperespacio = "normal";

let progresoHiper = 0;

let velocidadHiper = 1;


function iniciarHiperespacio() {

    if (estadoHiperespacio !== "normal") return;

    estadoHiperespacio = "preparacion";

    progresoHiper = 0;

    velocidadHiper = 1;

    if (typeof reproducirHiperespacio === "function") {

        reproducirHiperespacio();

    }

}


function actualizarHiperespacio() {

    switch (estadoHiperespacio) {


        case "preparacion":

            progresoHiper += 0.01;

            if (progresoHiper >= 1) {

                estadoHiperespacio = "aceleracion";

                progresoHiper = 0;

            }

            break;


        case "aceleracion":

            progresoHiper += 0.02;

            velocidadHiper += 0.15;


            if (progresoHiper >= 1) {

                estadoHiperespacio = "hiper";

                progresoHiper = 0;

                velocidadHiper = 20;

            }

            break;


        case "hiper":

            velocidadHiper = 25;

            progresoHiper += 0.01;


            if (progresoHiper >= 1) {

                estadoHiperespacio = "salida";

                progresoHiper = 0;

            }

            break;


        case "salida":

            progresoHiper += 0.03;

            velocidadHiper -= 0.5;


            if (velocidadHiper < 1) {

                velocidadHiper = 1;

            }


            if (progresoHiper >= 1) {

                estadoHiperespacio = "normal";

                progresoHiper = 0;

                velocidadHiper = 1;

            }

            break;

    }

}


function obtenerEstadoHiperespacio() {

    return {

        activo: estadoHiperespacio !== "normal",

        fase: estadoHiperespacio,

        progreso: progresoHiper,

        velocidad: velocidadHiper

    };

}


setInterval(() => {

    if (estadoHiperespacio === "normal") {

        iniciarHiperespacio();

    }

}, 60000);