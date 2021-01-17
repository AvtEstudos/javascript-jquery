/*
  pg 222  
    ADICIONANDO ELEMENTOS COM MANIPULAÇÃO DOM  

  1. CRIE O ELEMENTO ( createElement() )
    Você cria um novo nó de elemento usando o método createElement(). Esse nó de 
  elemento é armazenado em uma variável.
    Quando o nó é criado, ele ainda não faz parte da árvore DOM. Ele é 
  adicionado à árvore DOM depois do passo 3 ( appendChild() ).

  2. INSIRA CONTEÚDO ( createTextNode() )
    createTextNode() cria um novo nó de texto. Mais uma vez, o nó é armazenado
  em uma variável. 
    Isso fornece o conteúdo para o elemento, embora você possa pular esse passo
  se quiser anexar um elemento vazio à árvore DOM.

  3. ADICIONE-O AO DOM ( appendChild() )
    Agora que você tem o elemento (com ou não um nó de texto), você pode 
  adicioná-lo à árvore DOM usando o método appendChild().
    O método appendChild() permite especificar a qual elemento você quer 
  adicionar esse nó como filho.
*/

// Cria um novo elemento e o armazena em uma variável
var newEl = document.createElement('li');

// Cria um nó de texto e o armazena em uma variável
var newText = document.createTextNode('quinoa');

// Anexa nós de texto ao novo elemento
newEl.appendChild(newText);

// Localiza a posição onde o elemento deve ser adicionado
var position = document.getElementsByTagName('ul')[0];

// Insere o novo elemento em sua posição
position.appendChild(newEl);
