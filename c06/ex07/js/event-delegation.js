// Declara a função
function getTarget(e) {
  // Se não houver objeto event
  if (!e) {
    // Usa objeto event IE antigo
    e = window.event;
  }

  // Obtém o alvo do evento
  return e.target || e.srcElement;
}

// Declara a função
function itemDone(e) {
  // Remove item da lista

  // Declara variaveis
  var target, elParent, elGrandparent;
  // Obtem o link do item clicado
  target = getTarget(e);
  // Obtem seu item de lista
  elParent = target.parentNode;
  // Obtem sua lista
  elGrandparent = target.parentNode.parentNode;
  //Remove o item da lista
  elGrandparent.removeChild(elParent);

  // Impede que o link leve o usuario para outro lugar
  // Se preventDefault() funcionar
  if (e.preventDefault) {
    // Use preventDefault()
    e.preventDefault();
  } else {
    // Use versão antiga do IE
    e.returnValue = false;
  }
}

// Configura ouvintes de evento para chamar itemDone() onClick

// Obtém a lista de compras
var el = document.getElementById('shoppingList');
// Se os ouvintes funcionarem
if (el.addEventListener) {
  // Adiciona ouvinte de on click
  el.addEventListener('click', function(e){
    // Chama itemDone()
    itemDone(e);
  }, false);
} else {
  // Usa antigo modelo IE onclick
  el.attachEvent('onclick', function(e){
    // Chama itemDone()
    itemDone(e);
  }, false);
}