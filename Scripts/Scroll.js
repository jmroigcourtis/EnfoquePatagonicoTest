const Scroll = (id1, id2) => {
    $(id1).on('click', function(){
        $('html, body').animate({
            scrollTop: $(id2).offset().top
            }), 2000;
        })
}

const ScrollInicio = document.getElementById("InicioBtn")
ScrollInicio.addEventListener('click', Scroll('#InicioBtn', '#Inicio'))

const ScrollQuienesSomos = document.getElementById("QuienesSomosBtn")
ScrollQuienesSomos.addEventListener('click', Scroll('#QuienesSomosBtn', '#QuienesSomos'))

const ScrollStaff = document.getElementById("StaffBtn")
ScrollStaff.addEventListener('click', Scroll('#StaffBtn', '#Staff'))

const ScrollConvenios = document.getElementById("ConveniosBtn")
ScrollConvenios.addEventListener('click', Scroll('#ConveniosBtn', '#Convenios'))

const ScrollNovedades = document.getElementById("NovedadesBtn")
ScrollNovedades.addEventListener('click', Scroll('#NovedadesBtn', '#Novedades'))



