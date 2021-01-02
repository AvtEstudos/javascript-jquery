var originalNumber = 10.23456;

var msg = '<h2>Original number</h2><p>' + originalNumber + '</p>';
//Arredonda para 3 casas decimais: 10.234
msg += '<h2>toFixed()</h2><p>' + originalNumber.toFixed(3) + '</p>';
//Apresenta 3 caracteres do número: 10.2
msg += '<h2>toPrecision()</h2><p>' + originalNumber.toPrecision(3) + '</p>';

var el = document.getElementById('info');
el.innerHTML = msg;
