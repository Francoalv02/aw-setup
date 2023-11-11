const servicios = {
    servicio:[
        {
            tipo:"BASICO",
            invitacion:true,
            book:false,
            confirmacion:false,
            id:1,
            precio:40000,
            descripcion:"Este servicio lleva invitacion personalizada por la pareja. "

        },
        {
            tipo:"MEDIO",
            invitacion:true,
            book:true,
            confirmacion:false,
            id:2,
            precio:50000,
            descripcion:"Este servicio lleva invitacion personalizada por la pareja,un fotografo de nuestra empresa y con ellos se subiran las fotos ,en un apartado de llamado BOOK."

        },
        {
            tipo:"PREMIUN",
            invitacion:true,
            book:true,
            confirmacion:true,
            id:3,
            precio:60000,
            descripcion:"Este servicio lleva invitacion personalizada por la pareja,un fotografo de nuestra empresa y con ellos se subiran las fotos ,en un apartado de llamado BOOK,tambien habra un apartado de CONFIRMACION de asisitencia ,que se subira a una base de datos y enviados a la pareja para tener conocimiento de la cantidad de asistencias que tendra el evento  "

        }
    ]
}




const casamientos = {
    nombres:"Casamiento",

    casamiento:[
        {        
            nombres:"Franco Y Priscila",
            id:"2580",
            dia:"25-9-2023",
            link:"http://",
        },

        {        
            nombres:"Ignacio y Catalina",
            id:"2525",
            dia:"30/08/2025",
            link:"http://",
        },

        {        
            nombres:"Raul y Sofia",
            id:"2569",
            dia:"04/12/2025",
            link:"http://",
        }
        
    ]
   
}


export default servicios