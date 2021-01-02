/*
  Formato para especificar uma data:
  YYYY, MM, DD, HH, MM, SS
  1996, 04, 16, 15, 45, 55

  Ordem e sintaxe
  Ano             Quatro dígitos           
  Mês             0-11 (Jan é 0)
  Dia             1-31
  Hora            0-23
  Minutos         0-59  
  Segundos        0-59  
  Milissegundos   0-999

  Outra forma de formatar a data
  MMM DD, YYYY, HH:MM:SS
  Apr 16, 1996, 15:45:55
*/

var today = new Date();
var year = today.getFullYear();
var est = new Date('Apr 16, 1996 15:45:55');

var difference = today.getTime() - est.getTime();
difference = (difference / 31556900000);

var elMsg = document.getElementById('message');
elMsg.textContent = Math.floor(difference) + ' year of online travel advice';
