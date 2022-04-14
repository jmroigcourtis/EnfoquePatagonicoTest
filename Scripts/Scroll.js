
const Scroll = (id1, id2) => {
    $(id1).on('click', function(){
        $('html, body').animate({
            scrollTop: $(id2).offset().top
            }), 2000;
        })
}

const ScrollInicio = document.getElementById("InicioBtn")
ScrollInicio.addEventListener('click', Scroll('#InicioBtn', '#Home'))


const ScrollQuienesSomos = document.getElementById("QuienesSomosBtn")
ScrollQuienesSomos.addEventListener('click', Scroll('#QuienesSomosBtn', '#QuienesSomos'))


const ScrollConvenios = document.getElementById("ConveniosBtn")
ScrollConvenios.addEventListener('click', Scroll('#ConveniosBtn', '#Convenio'))

const ScrollOferta = document.getElementById("OfertaBtn")
ScrollOferta.addEventListener('click', Scroll('#OfertaBtn', '#Oferta'))


const ScrollContacto = document.getElementById("ContactoBtn")
ScrollContacto.addEventListener('click', Scroll('#ContactoBtn', '#Contacto'))



const fadeInOut  = (element, distanceFromTop, fadeInTimer, fadeOutTimer) => {
    $(window.document).on('scroll',function(){
        $(window.document).scrollTop() > distanceFromTop ? $(element).fadeIn(fadeInTimer) : $(element).fadeOut(fadeOutTimer)
    })
}


function fadeInOutWhatsapp () {
    fadeInOut("#whatsapp", 100, 700, 700)
}


fadeInOutWhatsapp()

