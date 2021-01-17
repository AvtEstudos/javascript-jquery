/*
  pg 214  
  <li id="one" class="hot"><em>fresh</em> figs</li>
  document.getElementById('one').firstChild.nextSibling.nodeValue;
                   1                 2           3         4
  
  1. Seleciona o elemento <li> usando o método getElementByID
  2. O primeiro filho de <li> é o elemento <em>
  3. O nó de texto é o próximo irmão desse elemento <em>
  4. Você tem o nó de texto e pode acessar seu conteúdo usando nodeValue
*/

// Obtém o 2° item da lista
var itemTwo = document.getElementById('two');

// Obtém seu conteúdo de texto
var elText = itemTwo.firstChild.nodeValue;

// Muda pine nuts para kale
elText = elText.replace('pine nuts', 'kale');

// Atualiza o item de lista
itemTwo.firstChild.nodeValue = elText;