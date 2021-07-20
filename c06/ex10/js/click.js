// Cria o HTML para a mensagem
var msg = '';
msg += '<div class=\"header\">';
msg += '  <a id=\"close\" href="#" >';
msg += '    close x';
msg += '  </a>';
msg += '</div>';
msg += '<div>';
msg += '  <h2>';
msg += '    System Maintenance';
msg += '  </h2>';
msg += '  Our servers are being update between 3 and 4 a.m. ';
msg += '  During this time, there may be minor disruptions to service.';
msg += '</div>';

// Cria um novo elemento 
var elNote = document.createElement('div');
// Adiciona um id de nota
elNote.setAttribute('id', 'note');
// Cria a msg
elNote.innerHTML = msg;
// Insere a msg da página
document.body.appendChild(elNote);

// Declara a função
function dismissNote(){
  // Remove a nota
  document.body.removeChild(elNote);
}

// Obtém o botão close
var elClose = document.getElementById('close');
// Clique em close limpa a nota
elClose.addEventListener('click', dismissNote, false);