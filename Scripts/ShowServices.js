const ShowService = (serviceButton, serviceText) => {
    $(serviceButton).on('click',function(){
        $(serviceText).show()
    })
}

const HideService = (closeButton, serviceText ) =>  {
    $(closeButton).on('click', function(){
        $(serviceText).hide()
    })
}

const showCoachingEq = document.getElementById("eqButton")
showCoachingEq.addEventListener('click', ShowService("#eqButton", "#CoachingEqBox"))

const hideCoachingEq = document.getElementById("CoachingEqBox")
hideCoachingEq.addEventListener('click', HideService('.closeButton', '#CoachingEqBox'))

const showCoachingOrg = document.getElementById("orgButton")
showCoachingOrg.addEventListener('click', ShowService("#orgButton", "#CoachingOrgBox"))

const hideCoachingOrg = document.getElementById("CoachingOrgBox")
hideCoachingOrg.addEventListener('click', HideService('.closeButton', '#CoachingOrgBox'))

const showCoachingEj = document.getElementById("ejButton")
showCoachingEj.addEventListener('click', ShowService('#ejButton', '#CoachingEjBox'))

const hideCoachingEj = document.getElementById("CoachingEjBox")
hideCoachingEj.addEventListener('click', HideService('.closeButton', '#CoachingEjBox'))

const showCoachingSoft = document.getElementById("softButton")
showCoachingSoft.addEventListener('click', ShowService('#softButton', '#CoachingSoftBox'))

const hideCoachingSoft = document.getElementById("CoachingEjBox")
hideCoachingSoft.addEventListener('click', HideService('.closeButton', '#CoachingEjBox'))