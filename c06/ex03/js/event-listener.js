//Neste exemplo, o ouvinte de evento aparece na última libha do Javascript

function checkUsername() { //Declara a função
  var elMsg = document.getElementById('feedback'); // Obtém o elemento feedback

  if (this.value.length < 5) { // Se for menor que 5
    elMsg.textContent = 'Username must be 5 characters or more'; // Define msg
  } else { // Caso contrário
    elMsg.textContent = ''; // Limpa msg
  }
}

var elUsername = document.getElementById('username'); // Obtém entrada do username

//                            i.         ii.        iii.
elUsername.addEventListener('blur', checkUsername, false);

//  i. O evento que você quer ouvir. Neste caso, o evento blur.
// ii. O código a ser executado, neste exemplo checkUsername(). Observe que os
// parênteses são omitidos onde a função é chamada porque eles indicariam que a 
// função deveria ser executada a medida que a pagina fosse carregada (em vez
// de quando o evento é disparado).
//iii. Um booleano indicando como os eventos se propagam. (Isso geralmente é
// configurado como false).

