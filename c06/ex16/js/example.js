var noteInput, noteName, textEntered, target;

//Elemento que armazena a nota
noteName = document.getElementById('noteName');
//Input para escrever a nota
noteInput = document.getElementById('noteInput');

function writeLabel(e) {
  //Se não houver objeto event
  if (!e) {
    //Fallback IE5-8
    e = window.event;
  }
  //Obtém o alvo do evento
  target = e.target || e.srcElement;
  //O valor desse elemento
  textEntered = target.value;
  //Atualiza o texto da nota
  noteName.textContent = textEntered;
}

// Aqui é onde os controles e funções de gravar/pausar entram ...
function recorderControls(e) {
  //Se não houver objeto event
  if (!e) {
    //Fallback IE5-8
    e = window.event;
  }
  //Obtém o alvo do evento
  target = e.target || e.srcElement;
  //Se preventDefault() suportado
  if (e.preventDefault) {
    //Impede a ação padrão
    e.preventDefault();
  } else {
    //IE fallback: para ação padrão
    e.returnValue = false;
  }

  // Obtém o atributo data-state
  switch(target.getAttribute('data-state')) {
    // Se seu valor for record
    case 'record':
      // Chama a função record()
      record(target);
      break;
    // Se seu valor for stop  
    case 'stop':
      // Chama a função stop()
      stop(target);
      break;
    // Mais botões poderiam entrar aqui...
  }
}

function record(target) {
  // Configura data-state como stop
  target.setAttribute('data-state', 'stop');
  // Configura texto como stop
  target.textContent = 'stop';
}

function stop(target) {
  // Configura data-state como record
  target.setAttribute('data-state', 'record');
  // Configura texto como record
  target.textContent = 'record';
}  

// Se o ouvinte de evento for suportado
if (document.addEventListener) {
  // Para qualquer clique no documento
  document.addEventListener('click', function(e) {
    // Chama recorderControls
    recorderControls(e);
  }, false);
  // Se o evento input for disparado chama writeLabel
  noteInput.addEventListener('input', writeLabel, false);
} else {
  // Fallback do IE qualquer clique, chama recorderControls 
  document.attachEvent('onclick', function(e){
    recorderControls(e);
  });
  // Se o evento input for disparado chama writeLabel
  noteInput.attachEvent('onkeyup', writeLabel, false);
}