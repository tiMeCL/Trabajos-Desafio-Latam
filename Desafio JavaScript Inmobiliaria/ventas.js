const propiedades_venta = [
    {
    nombre: "Casa La Chascona",
    src: "https://www.tipicochileno.cl/wp-content/uploads/2011/05/LA-CHASCONA-B.png",
    descripcion: "Su desorden atraerá tu orden",
    ubicacion: "Valparaiso, Chile",
    habitaciones: 5,
    costo: "500.000.000",
    smoke: false,
    pets: true
    },
    {
        nombre: "Casa La Sebastiana",
        src: "https://radiosomos.cl/wp-content/uploads/2023/07/la-sebastiana.jpg",
        descripcion: 'Sus paredes inspiran los dotes artisticos.',
        ubicacion: "Cerro San Cristobal, Chile",
        habitaciones: 6,
        costo: "800.000.000"  ,
        smoke: true,
        pets: false
        },
        {
            nombre: "Casa La Virginia",
            src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/78/4e/cf/huilo-huilo-cabanas-del.jpg?w=700&h=-1&s=1",
            descripcion: "Es una casa muy natural.",
            ubicacion: "Osorno, Chile",
            habitaciones: 4,
            costo: "900.000.000",
            smoke: false,
            pets: true
            },
            {
                nombre: "Casa La Mendoza",
                src: "https://http2.mlstatic.com/D_NQ_NP_683842-MLC71107150490_082023-O.webp",
                descripcion: "Es la casa que siempre has deseado.",
                ubicacion: "La Florida, Chile",
                habitaciones: 8,
                costo: "1000.000.000",
                smoke: true,
                pets: true
                }
    ];

    
var tres_propiedades = propiedades_venta.slice(0, 3);

var almacenada = ""

for (e of tres_propiedades) {
    almacenada += `
    
    <div class="col-md-4 mb-4">
    <div class="card">
      <img
        src="${e.src}"
        class="card-img-top"
        alt="Imagen del departamento"
      />
      <div class="card-body">
        <h5 class="card-title">
          ${e.nombre}
        </h5>
        <p class="card-text">
          ${e.descripcion}
        </p>
        <p>
          <i class="fas fa-map-marker-alt"></i> ${e.ubicacion}
        </p>
        <p>
          <i class="fas fa-bed"></i> ${e.habitaciones} Habitaciones |
          <i class="fas fa-bath"></i> 4 Baños
        </p>
        <p><i class="fas fa-dollar-sign"></i> ${e.costo} </p>
        <p class=${e.smoke? "text-success" : "text-danger"}>
          ${e.smoke? `<i class="fas fa-smoking"></i>` : `<i class="fas fa-smoking-ban"></i>`} ${e.smoke? "Se puede fumar" : "No se puede fumar"}
        </p>
        <p class=${e.pets? "text-success" : "text-danger"}>
          ${e.pets? `<i class="fa-solid fa-dog"></i>` : `<i class="fas fa-ban"></i>`} ${e.pets? "Se permiten mascotas" : "No se permiten mascotas"}
        </p>
      </div>
    </div>
  </div>

    `
}

var div_origen = document.querySelector("#ventas_index");

div_origen.innerHTML = almacenada;