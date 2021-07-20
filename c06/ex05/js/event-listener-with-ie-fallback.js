var elUsername = document.getElementById('username'); // Obtém entrada do username
var elMsg = document.getElementById('feedback'); // Obtém o el feedback

function checkUsername(minLength) { //Declara a função
  if (elUsername.value.length < minLength) { //Se username for muito curto
    // Configura a mensagem de erro
    elMsg.textContent = 
      'Username must be ' + minLength + ' characters or more';
  } else { // Caso contrário
    elMsg.innerHTML = ''; // Limpa msg
  }  
}

if (elUsername.addEventListener) { // Se o ouvinte de evento for suportado
  elUsername.addEventListener(
    'blur', 
    function() {
      checkUsername(5); // Passa args aqui
    }, 
    false);
} else {
  elUsername.attachEvent('onblur', function(){
    checkUsername(5);
  });
}



//  i. O evento que você quer ouvir. Neste caso, o evento blur.
// ii. O código a ser executado, neste exemplo checkUsername(). Observe que os
// parênteses são omitidos onde a função é chamada porque eles indicariam que a 
// função deveria ser executada a medida que a pagina fosse carregada (em vez
// de quando o evento é disparado).
//iii. Um booleano indicando como os eventos se propagam. (Isso geralmente é
// configurado como false).

