function checkUsername() {
  var elMsg = document.getElementById('feedback');
  var elUsername = document.getElementById('username');

  if (elUsername.value.length < 5) {
    //Se o valor do campo for menor que 5, atualiza a mensagem
    elMsg.textContent = 'Username must be 5 characters or more';
  } else {
    //Limpa o campo de mensagem
    elMsg.textContent = '';
  }

}