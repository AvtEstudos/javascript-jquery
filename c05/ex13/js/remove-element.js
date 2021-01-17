/*
  pg 224  
    REMOVENDO ELEMENTOS VIA MANIPULAÇÃO DOM  

  1. ARMAZENE O ELEMENTO A SER REMOVIDO EM UMA VARIÁVEL
    Você começa selecionando o elemento que será removido e armazenado esse nó 
  de elemento em uma variável. Você pode usar qualquer método.

  2. ARMAZENA O PAI DESSE ELEMENTO EM UMA VARIÁVEL
     document.getElementsByTagName('li')[3].parentNode
    Em seguida, você encontra o elemento pai que contém o elemento que você 
  deseja remover e armazenar esse nó de elemento em uma variável.

  3. REMOVA O ELEMENTO DO SEU ELEMENTO PAI
    O método removeChild() é usado no elemento pai que você selecionou. O método
  removeChild() recebe um parâmetro: a referência ao elemento que você não quer
  mais.
*/

// O elemento a remover
var removeEl = document.getElementsByTagName('li')[3];

// Recupera o elemento pai
var containerEl = removeEl.parentNode;

// Remove o elemento
containerEl.removeChild(removeEl);

/*
  pg 226
  COMPARANDO TÉCNICAS: ATUALIZANDO CONTEÚDO HTML

  document.write()
    O método write() é uma maneira simples de adicionar conteúdo, mas seu uso
  é raramente aconselhável.
    Atualmente, esse método é raramente utilizado e geralmente não é 
  recomendável.

  pg 227
  elemento.innerHTML()
    Desvantagens
    Essa propriedade não deve ser usada para adicionar conteúdo que veio de um 
  usuário (como um nome de usuário ou comentário de blog), uma vez que pode 
  representar um risco de segurança.
    Pode ser difícil isolar elementos que você quer atualizar dentro de um 
  fragmento DOM maior.
    Rotinas de tratamento de evento talvez não funcionem mais como esperado.

  MANIPULAÇÃO DOM
    Vantagens:
    Não afeta os handlers de evento.

    Desvantagens:
    Ela é mais lenta que o innerHTML.
    Mais código é necessário para alcançar a mesma coisa em comparação com 
  innerHTML.

  pg 229
  DEFENDENDO-SE CONTRA ATAQUES XSS

1.Navegador               2.Servidor WEB             3.Banco de Dados                                  
Só permita que os visi-   Verifique no servidor an-
tantes insiram os carac-  tes de exibir conteúdo de
teres que precisam forne- usuário/armazená-lo em um
cer. Não permita que usu- bando de dados. Isso por-
ários não confiáveis sub- que o usuário pode ignorar
metam HTML ou JavaScript. o Javascript no navegador.

*/
