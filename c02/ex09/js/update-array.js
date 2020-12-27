//Cria o array
var colors = ['white', 'black', 'custom'];

//Atualiza o valor da terceira posição
colors[2] = 'beige';

var el = document.getElementById('colors');
el.textContent = colors[2];
