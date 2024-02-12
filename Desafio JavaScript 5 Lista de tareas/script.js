// Arreglo para almacenar las tareas
let tareas = [];
// Variable de contador para identificadores numéricos de tarea
let idTarea = 1;

// Función para agregar una tarea
function agregarTarea() {
    let entradaTarea = document.getElementById("entradaTarea");
    let descripcionTarea = entradaTarea.value.trim();
    if (descripcionTarea !== "") {
        let tarea = {
            id: idTarea,
            descripcion: descripcionTarea,
            completada: false
        };
        tareas.push(tarea);
        idTarea++; // Incrementar el contador para la próxima tarea
        actualizarListaTareas();
        entradaTarea.value = "";
    }
}

// Función para eliminar una tarea
function eliminarTarea(id) {
    tareas = tareas.filter(tarea => tarea.id !== id);
    actualizarListaTareas();
}

// Función para marcar una tarea como completada
function toggleCompletada(id) {
    tareas.forEach(tarea => {
        if (tarea.id === id) {
            tarea.completada = !tarea.completada;
        }
    });
    actualizarListaTareas();
}

// Función para actualizar la lista de tareas en la página
function actualizarListaTareas() {
    let listaTareas = document.getElementById("listaTareas");
    let totalTareas = document.getElementById("totalTareas");
    let tareasCompletadas = document.getElementById("tareasCompletadas");

    listaTareas.innerHTML = "";
    let contadorCompletadas = 0;
    tareas.forEach(tarea => {
        let elementoLista = document.createElement("li");
        elementoLista.textContent = tarea.id + ": " + tarea.descripcion; // Mostrar el identificador numérico junto con la descripción

        // Botón para eliminar tarea
        let botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.style.marginLeft = "10px";
        botonEliminar.onclick = () => eliminarTarea(tarea.id);
        elementoLista.appendChild(botonEliminar);

        // Checkbox para marcar tarea como completada
        let checkBox = document.createElement("input");
        checkBox.type = "checkbox";
        checkBox.style.marginLeft = "10px";
        checkBox.checked = tarea.completada;
        checkBox.onchange = () => toggleCompletada(tarea.id);
        elementoLista.appendChild(checkBox);

        if (tarea.completada) {
            elementoLista.style.textDecoration = "line-through";
            contadorCompletadas++;
        }

        listaTareas.appendChild(elementoLista);
    });

    totalTareas.textContent = tareas.length;
    tareasCompletadas.textContent = contadorCompletadas;
}

// Asignar evento al botón de agregar tarea
document.getElementById("botonAgregarTarea").addEventListener("click", agregarTarea);
