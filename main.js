//NAV Menu Burger
const nav = document.querySelector(".main-nav");
window.addEventListener("click", function (e) {
    if (document.querySelector(".burger").contains(e.target)) {
        nav.classList.toggle("show");
    } else if (nav.classList.value.includes("show")) {
        nav.classList.toggle("show");
    }
});

//Modal
const btnEnviar = document.getElementById("confirmar-enviar");

let mensajeEnviar = document.getElementById("mensaje-enviar");
btnEnviar.addEventListener("click", (e) => {
    mensajeEnviar.className = "mensaje-enviado";
});
mensajeEnviar.className = "mensaje-enviar";
