const btnAbtirTXT = document.querySelector("#abrirTxt")

btnAbtirTXT.addEventListener("click" , obtenerDatos)

function obtenerDatos(){
    const url = "data/dats.txt"
    fetch(url)
        .then(res =>{
            // console.log(res.text())
            // console.log(res.statusText)
            // console.log(res.type);
            // console.log(res.url);
            
            return res.text()
        })
        .then(datos =>{
            // console.log(datos)
            mostrarDatos(datos)
            
        })
        .catch(datos =>{
            mostrarDatos(error)
        })
}

function mostrarDatos(datos){
    const body = document.querySelector("body")
            const parrafo = document.createElement("p")
            parrafo.textContent = datos
            body.appendChild(parrafo)
}
        
