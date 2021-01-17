
/* 
  Percorrendo o DOM
    Essas propriedades são propriedades do nó atual (não métodos para selecionar
  um elemento); portanto, não terminam com parênteses.

  Nós de espaço em branco
    Atravessar o DOM pode ser difícil porque alguns navegadores adicionam um nó
  de texto sempre que eles se deparam com um espaço em branco entre os elementos
    Uma das maneiras de resolver esse tipo de problema é utilizar uma biblioteca
  JavaScript, como jQuery, que ajuda a lidar com esses problemas. Esse tipo de
  erro de navegador foi um fator importante na popularidade do jQuery.
*/

//Selecione o ponto de partida e encontra seus irmãos
var startItem = document.getElementById('two');
var prevItem = startItem.previousSibling;
var nextItem = startItem.nextSibling;

//Altera o valor dos atributos class dos irmãos
prevItem.className = 'complete';
nextItem.className = 'cool';