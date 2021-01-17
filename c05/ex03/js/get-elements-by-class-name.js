//Localiza os itens com o atributo hot
var elements = document.getElementsByClassName('hot');

//Se 3 itens ou mais forem encontrados
if (elements.length > 2) {
  //Seleciona o 3° elemento na NodeList
  var el = elements[2];
  //Muda o valor do atributo class
  el.className = 'cool';
}