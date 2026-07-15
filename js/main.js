window.addEventListener("load", () => {

    if (typeof ajustarCanvas === "function") {

        ajustarCanvas();

    }

    if (typeof crearEstrellas === "function") {

        crearEstrellas();

    }

    if (typeof animar === "function") {

        animar();

    }

});
