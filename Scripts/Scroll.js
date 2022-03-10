const { func } = require("assert-plus");

const Scroll = (id1, id2) => {
    $(id1).on('click', function(){
        $('html, body').animate({
            scrollTop: $(id2).offset().top
            }), 2000;
        })
}

const ScrollInicio = document.getElementById("InicioBtn")
ScrollInicio.addEventListener('click', Scroll('#InicioBtn', '#1'))

const ScrollMis = document.getElementById("MisiónBtn")
ScrollMis.addEventListener('click', Scroll('#MisiónBtn', '#2'))

const ScrollQuienesSomos = document.getElementById("QuienesSomosBtn")
ScrollQuienesSomos.addEventListener('click', Scroll('#QuienesSomosBtn', '#3'))


const ScrollConvenios = document.getElementById("ConveniosBtn")
ScrollConvenios.addEventListener('click', Scroll('#ConveniosBtn', '#4'))

const ScrollOferta = document.getElementById("OfertaBtn")
ScrollOferta.addEventListener('click', Scroll('#OfertaBtn', '#5'))

const ScrollInscribite = document.getElementById("InscribiteBtn")
ScrollInscribite.addEventListener('click', Scroll('#InscribiteBtn', '#6'))

const ScrollContacto = document.getElementById("ContactoBtn")
ScrollContacto.addEventListener('click', Scroll('#ContactoBtn', '#7'))


