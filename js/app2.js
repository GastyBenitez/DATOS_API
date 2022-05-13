const btnAbrirJson = document.querySelector("#abrirJson")
btnAbrirJson.addEventListener("click", obtenerDatos)

function obtenerDatos(){
    const url = "data/nombre.json"

    fetch(url)
        .then(res => res.json())
        .then(datos => mostrarHTML(datos))
  
}

function mostrarHTML (nombre) {
    const {name, username, phone, addrees: {city}} = nombre
    console.log(nombre);
    const body = document.querySelector("body")
    const div = document.createElement("div")

    div.innerHTML = `
    <div class"nombre">Nombre: ${name}<div/>
    <div class"nombre">Usuario: ${username}<div/>
    <div class"nombre">Direccion: ${city}<div/>
    <div class"nombre">Telefono: ${phone}<div/>
    
    `

    body.appendChild(div)


}