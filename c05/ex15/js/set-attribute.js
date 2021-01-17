// Obtém o 1° item da lista 
var firstItem = document.getElementById('one');

//Muda seu atributo class
firstItem.className = 'complete';

// Obtém o 4° item da lista 
var fourthItem = document.getElementsByTagName('li').item(3);
fourthItem.setAttribute('class', 'cool');