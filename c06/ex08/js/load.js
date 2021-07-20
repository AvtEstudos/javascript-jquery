function setup() {
  // Cria variavel
  var textInput;
  // Obtém a entrada username
  textInput = document.getElementById('username');
  // Dá o foco para username
  textInput.focus();
}

// Depois que a pagina é carregada, chama setup
window.addEventListener('load', setup, false);