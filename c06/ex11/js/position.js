// Tela
// screenX e screenY: 
//  Indica a posição do cursor dentro da tela inteira no monitor, medindo
// a partir do canto superior esquerdo da tela (não donavegador).

// Pagina
// pageX e pageY:
//  Indica a posição cursor dentro de toda a página. A parte superior da página
// pode estar fora da janela, portanto, ainda que o cursor esteja na mesma 
// posição, as coordenadas da página e do cliente podem ser diferentes.                    

// Cliente
// clientX e clientY:
//  Indica a posição do cursor dentro do navegador. Se o usuário tiver rolado
// para baixo e a parte superior da página não pode ser mais visualizada, isso
// não afetará as coordenadas do cliente.

var sx = document.getElementById('sx');
var sy = document.getElementById('sy');
var px = document.getElementById('px');
var py = document.getElementById('py');
var cx = document.getElementById('cx');
var cy = document.getElementById('cy');

// Declara a função
function showPosition(event) {
  // Atualiza elemento com screenX
  sx.value = event.screenX;
  // Atualiza elemento com screenY
  sy.value = event.screenY;
  // Atualiza elemento com pageX
  px.value = event.pageX;
  // Atualiza elemento com pageY
  py.value = event.pageY;
  // Atualiza elemento com clientX
  cx.value = event.clientX;
  // Atualiza elemento com clientY
  cy.value = event.clientY;
}

// Obtém o elemento body
var el = document.getElementById('body');
// Adiciona no body, para o evento de movimentação do mouse, chamando o 
// método showPosition
el.addEventListener('mousemove', showPosition, false);