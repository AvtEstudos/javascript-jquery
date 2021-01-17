//Localiza elementos <li>
//Note que vc não inlcui os colchetes angulares
var elements = document.getElementsByTagName('li');

//Se 1 ou mais itens forem encontrados
if (elements.length > 0) {
  //Seleciona o 1° elemento
  var el = elements[0];
  //Muda o valor do atributo class
  el.className = 'cool';
}