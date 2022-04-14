const ShowBio = () => {
    $("#StaffBioButton").on('click',function(){
        $("#Staff1Bio").show()
    })
}

const closeDiv = () =>  {
    $("#closeButton").on('click', function(){
        $("#Staff1Bio").hide()
    })
}

ShowBio();
closeDiv();