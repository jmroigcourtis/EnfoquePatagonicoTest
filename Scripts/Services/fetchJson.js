const getData = async ( ) => {
    const data = await fetch("Scripts/Services/data.json")
    const response = await data.json()
    console.log(response)
}

getData();