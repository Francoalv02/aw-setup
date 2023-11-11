

//------------

import servicios from "./casamientos.js" 
//console.log(servicios)

const contenedor = document.getElementById("contenedor")

let contenidohtml = "";

servicios.servicio.forEach((serv)=>{
    serv.tipo;
    contenidohtml += `<div class="servicios">
  
    <div class="card__tipo">${serv.tipo}</div>
    <div class="card__precio">$ ${serv.precio}</div>
    <div class="card__desc">${serv.descripcion}</div>
    <div class="card__link" :hover><a href="">Quiero este Servicio</a></div>

</div>`
})

contenedor.innerHTML = contenidohtml
//console.log(datos)



//fetch("./casamiento.json").then((datos)=>{
//    console.log(datos.json)
//})

//fetch("./casamiento.json")
//    .then(
//        (datos)=>{
//            return datos.json()
//        }
//    ).then(
//        (datos)=>{
  //          console.log(datos)
 //           //const carrera = datos
  //      }
   // )