
const Scroll = (id1, id2) => {
    $(id1).on('click', function(){
        $('html, body').animate({
            scrollTop: $(id2).offset().top
            }), 2000;
        })
}

const ScrollInicio = document.getElementById("InicioBtn")
ScrollInicio.addEventListener('click', Scroll('#InicioBtn', '#Home'))

const ScrollMis = document.getElementById("MisiónBtn")
ScrollMis.addEventListener('click', Scroll('#MisiónBtn', '#Mision'))

const ScrollQuienesSomos = document.getElementById("QuienesSomosBtn")
ScrollQuienesSomos.addEventListener('click', Scroll('#QuienesSomosBtn', '#QuienesSomos'))


const ScrollConvenios = document.getElementById("ConveniosBtn")
ScrollConvenios.addEventListener('click', Scroll('#ConveniosBtn', '#Convenio'))

const ScrollOferta = document.getElementById("OfertaBtn")
ScrollOferta.addEventListener('click', Scroll('#OfertaBtn', '#Oferta'))

const ScrollInscribite = document.getElementById("InscribiteBtn")
ScrollInscribite.addEventListener('click', Scroll('#InscribiteBtn', '#Inscribite'))

const ScrollContacto = document.getElementById("ContactoBtn")
ScrollContacto.addEventListener('click', Scroll('#ContactoBtn', '#Contacto'))



const showWpp  = () => {
    $(window.document).on('scroll',function(){
        $(window.document).scrollTop() > 100 ? $("#whatsapp").fadeIn(700) : $("#whatsapp").fadeOut(700)
        console.log($(window.document).scrollTop())
    })
}

showWpp()