
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

// function fadeInOutSection () {
//     fadeInOut(".TituloMision", 200, 900, 900)
//     fadeInOut(".textBox", 200, 1100, 1100)
//     fadeInOut("#Staff1", 1000, 900, 900)
//     fadeInOut("#Staff2", 1000, 1000, 1000)
//     fadeInOut("#Staff3", 1000, 1100, 1100)
//     fadeInOut("#Staff4", 1000, 1200, 1200)
//     fadeInOut("#Staff5", 1000, 1300, 1300)
//     fadeInOut("#Staff6", 1000, 1400, 1400)
// }

fadeInOutWhatsapp()
fadeInOutSection()

