let sonidosActivos = true;
let audioDesbloqueado = false;
let volumenSonido = 0.7;

const sonidos = {

    mover: new Audio("sounds/move_menu.ogg"),
    abrir: new Audio("sounds/deploy_menu.ogg"),
    cerrar: new Audio("sounds/contract_menu.ogg"),
    seleccionar: new Audio("sounds/select_option.ogg"),
    error: new Audio("sounds/error_code.ogg"),
    hyper: new Audio("sounds/hyper.ogg"),
    startup: new Audio("sounds/interference.ogg")

};

Object.values(sonidos).forEach(sonido => {

    sonido.volume = volumenSonido;
    sonido.preload = "auto";

});

function desbloquearAudio() {

    if (audioDesbloqueado) return;

    audioDesbloqueado = true;

    Object.values(sonidos).forEach(sonido => {

        sonido.load();

    });

    reproducirInicio();

}

document.addEventListener("click", desbloquearAudio);
document.addEventListener("keydown", desbloquearAudio);
document.addEventListener("touchstart", desbloquearAudio);
document.addEventListener("pointerdown", desbloquearAudio);

function reproducirSonido(nombre) {

    if (!sonidosActivos) return;
    if (!audioDesbloqueado) return;

    const sonido = sonidos[nombre];

    if (!sonido) return;

    sonido.currentTime = 0;
    sonido.volume = volumenSonido;
    sonido.play().catch(() => {});

}

function reproducirMovimiento() {

    reproducirSonido("mover");

}

function reproducirApertura() {

    reproducirSonido("abrir");

}

function reproducirCierre() {

    reproducirSonido("cerrar");

}

function reproducirSeleccion() {

    reproducirSonido("seleccionar");

}

function reproducirError() {

    reproducirSonido("error");

}

function reproducirHiperespacio() {

    reproducirSonido("hyper");

}

function reproducirInicio() {

    reproducirSonido("startup");

}

function activarSonidos() {

    sonidosActivos = true;

}

function desactivarSonidos() {

    sonidosActivos = false;

}

function cambiarVolumen(valor) {

    volumenSonido = valor;

    Object.values(sonidos).forEach(sonido => {

        sonido.volume = volumenSonido;

    });

}