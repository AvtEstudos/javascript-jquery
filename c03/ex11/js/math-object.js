/******************************************************************************* 
 ***************        Gera um número aleatório de 1 a 10       ***************
 ******************************************************************************/

//  O método random() gera um númeto aleatório entre 0 e 1 com muitas casas
//decimais.
var randomNum0 = Math.random();

// Para obter um número inteiro, multiplicamos o número gerado por 10.
var randomNum1 = randomNum0 * 10;

// Isso fornecerá um número de 1 a 9, por isso somamos 1, para termos um número
//de 1 a 10.
var randomNum2 = randomNum1 + 1;

//  Esse número ainda terá muitas casas decimais, por isso arredondamos até o
//inteiro mais próximos. O método floor é usado especificamente para arredondar
//para baixo, em vez de deixar o arredondamento para critérios matemáticos.
var randomNum3 = Math.floor(randomNum2);

var msg = ''
msg += '<h2>N&uacutemero gerado</h2><p>' + randomNum0 + '</p>';
msg += '<h2>Gera o inteiro</h2><p>' + randomNum1 + '</p>';
msg += '<h2>Obtem um n&deg entre 1 e 10</h2><p>' + randomNum2 + '</p>';
msg += '<h2>Resultado:</h2><p>' + randomNum3 + '</p>';

var el = document.getElementById('info');
el.innerHTML = msg;

/*
Original
var randomNum = Math.floor((Math.random() * 10) + 1);

var el = document.getElementById('info');
el.innerHTML = '<h2>Random number</h2><p>' + randomNum + '</p>';
*/