const ShowBio = (staffBioButton, staffBio) => {
    $(staffBioButton).on('click',function(){
        $(staffBio).show()
    })
}

const hideBio = (closeButton, staffBio ) =>  {
    $(closeButton).on('click', function(){
        $(staffBio).hide()
    })
}

const showNoraBio = document.getElementById("Staff1")
showNoraBio.addEventListener('click', ShowBio("#Staff1Button", "#Staff1Bio"))

const hideNoraBio = document.getElementById("Staff1Bio")
hideNoraBio.addEventListener('click', hideBio('.closeButton', '#Staff1Bio'))

const showAliciaBio = document.getElementById("Staff2")
showAliciaBio.addEventListener('click', ShowBio("#Staff2Button", "#Staff2Bio"))

const hideAliciaBio = document.getElementById("Staff2Bio")
hideAliciaBio.addEventListener('click', hideBio('.closeButton', '#Staff2Bio'))

const showLilianaBio = document.getElementById("Staff3")
showLilianaBio.addEventListener('click', ShowBio("#Staff3Button", "#Staff3Bio"))

const hideLilianaBio = document.getElementById("Staff3Bio")
hideLilianaBio.addEventListener('click', hideBio('.closeButton', '#Staff3Bio'))

const showAnaBio = document.getElementById("Staff4")
showAnaBio.addEventListener('click', ShowBio("#Staff4Button", "#Staff4Bio"))

const hideAnaBio = document.getElementById("Staff4Bio")
hideAnaBio.addEventListener('click', hideBio('.closeButton', '#Staff4Bio'))

// const showMarcelaBio = document.getElementById("Staff5")
// showMarcelaBio.addEventListener('click', ShowBio("#Staff5Button", "#Staff5Bio"))

// const hideMarcelaBio = document.getElementById("Staff5Bio")
// hideMarcelaBio.addEventListener('click', hideBio('.closeButton', '#Staff5Bio'))

const showDanielaBio = document.getElementById("Staff5")
showDanielaBio.addEventListener('click', ShowBio("#Staff5Button", "#Staff5Bio"))

const hideDanielaBio = document.getElementById("Staff5Bio")
hideDanielaBio.addEventListener('click', hideBio('.closeButton', '#Staff5Bio'))


