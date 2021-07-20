function checkUsername() {
  // Armazena username na variavel
  var username = el.value;  
  if (username.length < 5) {
    // Muda class em msg
    elMsg.className = 'warning';
    // Atualiza msg
    elMsg.textContent = 'Not long ebough, yet...';
  } else {
    // Limpa msg
    elMsg.textContent = '';
  }
}

function tipUsername() {
  // Muda class para msg
  elMsg.className = 'tip';
  // Adiciona msg
  elMsg.innerHTML = 'Username must be at least 5 characters';
}

// Entrada username
var el = document.getElementById('username');
// Elemento para armazenar msg
var elMsg = document.getElementById('feedback');

// Quando a entrada username ganha/perde foco, chama as funções acima:
// focus chama tipUsername
el.addEventListener('focus', tipUsername, false);
// blur chama checkUsername
el.addEventListener('blur', checkUsername, false);