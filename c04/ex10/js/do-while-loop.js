var i = 1;
var msg = '';

do {
  msg += i + ' x 5 = ' + (i * 5) + '<br/>';
} while (i < 1);

document.getElementById('answer').innerHTML = msg;
