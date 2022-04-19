//NAV Menu Burger
document.addEventListener('DOMContentLoaded', nav)
function nav(){
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.main-nav');
    burger.addEventListener('click', ()=>{
        nav.classList.toggle('show')
    })
}

//Modal
const btnEnviar = document.getElementById('confirmar-enviar')

let mensajeEnviar = document.getElementById('mensaje-enviar')
    btnEnviar.addEventListener("click",(e)=>{
      
      mensajeEnviar.className = 'mensaje-enviado'
    })
    mensajeEnviar.className = 'mensaje-enviar'
  