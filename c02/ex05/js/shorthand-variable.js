//Exemplo 1
var price;
var quantity;
var total = price * quantity;

//Exemplo 2
var price, quantity, total;
price = 5;
quantity = 14;
total = price * quantity;

//Exemplo 3
var price = 5, quantity = 14;
var total = price * quantity;

var el = document.getElementById('cost');
el.textContent = '$' + total;
