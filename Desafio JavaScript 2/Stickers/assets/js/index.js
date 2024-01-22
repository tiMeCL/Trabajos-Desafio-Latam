function selecciondeSticker(inputId) {
  let input = document.getElementById(inputId);
  input.value = parseInt(input.value) + 1;
  actualizarTotal();
}

function actualizarTotal() {
  let totalStickers = 0;

  for (let i = 1; i <= 3; i++) {
    let input = document.getElementById("cantidad_" + i);
    totalStickers += parseInt(input.value);
  }

  document.getElementById("resultado").textContent =
    "Cantidad de stickers seleccionados: " + totalStickers;
}

function verificarCantidad() {
  let totalStickers = 0;

  for (let i = 1; i <= 3; i++) {
    let input = document.getElementById("cantidad_" + i);
    totalStickers += parseInt(input.value);
  }

  if (totalStickers <= 10) {
    document.getElementById("resultado").textContent =
      "Llevas " + totalStickers + " stickers";
  } else {
    document.getElementById("resultado").textContent =
      "Has sobrepasado el numero maximo de stickers.";
  }
}
