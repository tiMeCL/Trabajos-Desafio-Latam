const propiedades_alquiler = [
    {
    nombre: "Departamento Vina del Mar",
    src: "https://imgclasificados3.emol.com/Proyectos/imagenes//PR_FOTO_4767_1.jpg",
    descripcion: "Tu descanso espera por ti",
    ubicacion: "Vina del Mar, Chile",
    habitaciones: 4,
    costo: "950.000 / mes",
    smoke: false,
    pets: true
    },
    {
        nombre: "Departamento Algarrobo",
        src: "https://www.vitahome.cl/upload/propiedad/296916-mini_IMG_20210719_135446_10_merged.jpg",
        descripcion: "Un hogar con gran ubicación",
        ubicacion: "Algarrobo, Chile",
        habitaciones: 3,
        costo: "800.000 / mes",
        smoke: true,
        pets: false
        },
        {
            nombre: "Cabanias Con Con",
            src: "https://imgclasificados3.emol.com/Proyectos/imagenes//PR_FOTO_4791_1.jpg",
            descripcion: "Amplio departamento con gran vista",
            ubicacion: "Con Con, Chile",
            habitaciones: 5,
            costo: "980.000 / mes",
            smoke: false,
            pets: true
            },
            {
                nombre: "Casa Punta de Lobos",
                src: "https://playalobos.cl/images/slides/slide3.jpg",
                descripcion: "Un maravilloso oasis.",
                ubicacion: '',
                habitaciones: 8,
                costo: "1.200.000 / mes",
                smoke: true,
                pets: true
                }
    ];

    
var tres_propiedades = propiedades_alquiler.slice(0, 3);

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

var div_origen = document.querySelector("#alquiler_index");

div_origen.innerHTML = almacenada;