//Neste exemplo, o ouvinte de evento aparece na última linha.

function checkUsername() { //Declara a função
  var elMsg = document.getElementById('feedback'); // Obtém o elemento feedback

  if (this.value.length < 5) { // Se for menor que 5
    elMsg.textContent = 'Username must be 5 characters or more'; // Define msg
  } else { // Caso contrário
    elMsg.textContent = ''; // Limpa msg
  }
}

var elUsername = document.getElementById('username'); // Obtém entrada do usuário
elUsername.onblur = checkUsername; // Ao perder o foco chama checkUsername