//Armazena NodeList no array
var hotItens = document.querySelectorAll('li.hot');

//Se contiver itens
if (hotItens.length > 0) {
  //Itera por cada item
  for (var i=0; i<hotItens.length; i++){
    //Muda o valor do atributo class
    hotItens[i].className = 'cool';
  }
}