/*
const url = "https://jsonplaceholder.typecode.com/photos"
Tarea realizar la consulta a la api y mostrar los datos en el dom
*/



const Api = document.querySelector("#cargarApi")

Api.addEventListener("click", mostrarDatos)

function mostrarDatos(){
    const url = "data/imagenes.json"


    fetch(url)
        .then(res => res.json())
        .then(datos =>mostrarHTML(datos))

}

function mostrarHTML(imagenes) {
    imagenes.map(imagen => {
        const {title, url, thumbnailUrl} = imagen
        const body = document.querySelector('body')
        const div = document.createElement('div')
        

        div.innerHTML = `
        <hr>
        <div class = "tittle">titulo ${title} </div>
        <div> <img src="${url}" </div>
        <div> <img src="${thumbnailUrl}" alt="MDN">  </div>
        `

        body.appendChild(div)
    })
}


