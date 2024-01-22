function verificarPassword() {
  let password1 = document.getElementById('select_password1').value;
  let password2 = document.getElementById('select_password2').value;
  let password3 = document.getElementById('select_password3').value;

  if (password1 === '9' && password2 === '1' && password3 === '1') {
    mostrarResultado('PASSWORD 1 CORRECT');
  } else if (
    password1 === '7' &&
    password2 === '1' &&
    password3 === '4'
  ) {
    mostrarResultado('PASSWORD 2 CORRECT');
  } else {
    mostrarResultado('WRONG PASSWORD!');
  }
}

function mostrarResultado(mensaje) {
  document.getElementById('resultado').textContent = mensaje;
}
