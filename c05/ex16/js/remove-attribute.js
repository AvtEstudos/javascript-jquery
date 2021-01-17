// Obtém o 1° item
var firstItem = document.getElementById('one');

// Verifica se tem o atributo
if (firstItem.hasAttribute('class')) {
  //Remove o atributo
  firstItem.removeAttribute('class'); 
}