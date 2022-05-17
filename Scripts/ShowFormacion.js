const ShowFormation = (formationButton, formationBox) => {
    $(formationButton).on('click',function(){
        $(formationBox).show()
    })
}

const hideFormation = (closeButton, formationBox ) =>  {
    $(closeButton).on('click', function(){
        $(formationBox).hide()
    })
}

const coachingProfesional = document.getElementById('coachingPro')
coachingProfesional.addEventListener('click', ShowFormation('#coachingPro', '#proBox'))

const hideCoachingPro = document.getElementById('proBox')
hideCoachingPro.addEventListener('click', hideFormation('.closeButton', '#proBox'))

const postitulo = document.getElementById('postituloButton')
postitulo.addEventListener('click', ShowFormation('#postituloButton', '#postituloBox'))

const hidePostitulo = document.getElementById('postituloBox')
hidePostitulo.addEventListener('click', hideFormation('.closeButton', '#postituloBox'))

const innovacion = document.getElementById('innovacionButton')
innovacion.addEventListener('click', ShowFormation('#innovacionButton', '#innovacionBox'))

const innovacionHide = document.getElementById('innovacionBox')
innovacionHide.addEventListener('click', hideFormation('.closeButton', '#innovacionBox'))