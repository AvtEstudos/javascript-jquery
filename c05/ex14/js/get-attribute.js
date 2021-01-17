// Obtém o 1° item da lista 
var firstItem = document.getElementById('one');

//Se for um atributo de classe
if (firstItem.hasAttribute('class')) {
  //Obtém o atributo
  var attr = firstItem.getAttribute('class');

  //Adiciona o valor do atributo depois da lista
  var el = document.getElementById('scriptResults');
  el.innerHTML = '<p>O primeiro item possui em class o valor: ' + attr +   '</p>';
}