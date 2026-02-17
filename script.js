const form = document.querySelector(".Formulario-Fale-conosco")
const mascara = document.querySelector(".mascara-formulario")

function cliqueiBotao(){
    form.style.left = '50%'
    form.style.transform = 'translateX(-50%)'
    mascara.style.visibility = 'visible'

}

function fecharFormulario(){
    form.style.left = '-315px'
    form.style.transform = 'translateX(0)'
    mascara.style.visibility = 'hidden'

}
