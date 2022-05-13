const jsonArray = document.querySelector("#cargarJson")

jsonArray.addEventListener("click", mostrarDatos)

function mostrarDatos(){
    const url = "data/nombres.json"
    
    fetch(url)
        .then(res => res.json())
        .then(datos => mostrarHTML(datos))
}

// function mostrarHtml(nombres){
//     console.log(nombres);
//     const body = document.querySelector("body")
//     // const div = document.createElement("div")
//     let div = ""
    
//     nombres.map(nombre => {
//         const {name, usarname, phone, adress: {city}} =nombre
//         div.innerHTML = `
//         <div class"nombre">Nombre: ${name}<div/>
//         <div class"nombre">Usuario: ${username}<div/>
//         <div class"nombre">Direccion: ${city}<div/>
//         <div class"nombre">Telefono: ${phone}<div/>
//         `
//     })
//     body.innerHTML = div
// }

function mostrarHTML(nombres) {
    nombres.map(nombre => {
        const {name, username, address: {city}} = nombre
        const body = document.querySelector('body')
        const div = document.createElement('div')
        

        div.innerHTML = `
        <hr>
        <div class='nombre'>Nombre: ${name} </div>
        <div class='usuario'>Usuario: ${username} </div>
        <div class='ciudad'>Ciudad: ${city} </div>
        `

        body.appendChild(div)
    })
}
