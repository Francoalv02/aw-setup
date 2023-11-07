//import datos from "./casamientos.js"
//console.log(datos)



//fetch("./casamiento.json").then((datos)=>{
//    console.log(datos.json)
//})

fetch("./casamiento.json")
    .then(
        (datos)=>{
            return datos.json()
        }
    ).then(
        (datos)=>{
            console.log(datos)
            //const carrera = datos
        }
    )