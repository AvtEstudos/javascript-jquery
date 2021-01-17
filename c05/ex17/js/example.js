// ADICIONA ITENS AO INÍCIO E AO FIM DA LISTA

// Obtém o elemento <ul>
var list = document.getElementsByTagName('ul')[0];

// *****************************************
// * ADICIONA UM NOVO ITEM AO FIM DA LISTA *
// *****************************************
// Cria o elemento
var newItemLast = document.createElement('li');
// Cria o nó de texto
var newTextLast = document.createTextNode('cream');

// Adiciona o nó de texto ao elemento
newItemLast.appendChild(newTextLast);

// Adiciona o elemento ao fim da lista
list.appendChild(newItemLast);

// ********************************************
// * ADICIONA UM NOVO ITEM AO INÍCIO DA LISTA *
// ********************************************
// Cria o elemento
var newItemFirst = document.createElement('li');
// Cria o nó de texto
var newTextFirst = document.createTextNode('kale');

// Adiciona o nó de texto ao elemento
newItemFirst.appendChild(newTextFirst);

// Adiciona o elemento ao fim da lista
list.insertBefore(newItemFirst, list.firstChild);

// ********************************************
// * ADICIONA A CLASSE COOL A TODOS OS ITENS  *
// ********************************************
// Seleciona os elementos <li>
var listItens = document.querySelectorAll('li');

var i;
for (i = 0; i < listItens.length; i++) {
  listItens[i].className = 'cool';
}

// ********************************************
// * ADICIONA A CLASSE COOL A TODOS OS ITENS  *
// ********************************************
var heading = document.querySelector('h2');
var headingText = heading.firstChild.nodeValue;
var totalItens = listItens.length;
var newHeading = headingText + '<span>' + totalItens + '</span>';
heading.innerHTML = newHeading;

