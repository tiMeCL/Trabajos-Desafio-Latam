// DOM
const cantidadDom = document.querySelector('.cantidad');
const precioInicial = document.querySelector('.precio-inicial');
const valorTotal = document.querySelector('.valor-total');
const aumentarBoton = document.querySelector('.card button:nth-of-type(1)');
const disminuirBoton = document.querySelector('.card button:nth-of-type(2)');

// Ingreso de Variables
const valor = 950000;
var cantidad = 0;

// Actualización del Total
function cantidadTotal() {
  const total = valor * cantidad;
  valorTotal.innerHTML = total.toLocaleString();
}

// botón (+) Unidades
aumentarBoton.addEventListener('click', function () {
  cantidad++;
  cantidadDom.innerHTML = cantidad;
  cantidadTotal();
});

// botón (-) Unidades
disminuirBoton.addEventListener('click', function () {
  if (cantidad > 0) {
    cantidad--;
    cantidadDom.innerHTML = cantidad;
    cantidadTotal();
  }
});

// iniciar valores
cantidadDom.innerHTML = cantidad;
precioInicial.innerHTML = valor.toLocaleString();
cantidadTotal();