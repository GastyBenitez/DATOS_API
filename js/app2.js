const btnAbrirJson = document.querySelector("#abrirJson")
btnAbrirJson.addEventListener("click", obtenerDatos)

function obtenerDatos(){
    const url = "data/nombre.json"

    fetch(url)
        .then(res =>{
            // console.log(res.json())
            return res.json()
        
        })
        .then(datos =>{
            mostrarHTML(datos)
        })
}

function mostrarHTML (nombre){
    console.log(nombre);
}