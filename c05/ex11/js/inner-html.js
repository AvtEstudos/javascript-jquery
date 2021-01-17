// Armazena o primeiro item da lista
var firstItem = document.getElementById('one');

// Obtém o conteúdo do primeiro item de lista
var itemContent = firstItem.innerHTML;

/*
  pg 221  
    Se você usar atributos em seu código HTML, escapar as aspas usando a barra 
  invertida \ pode clarear o fato de que esses caracteres não são parte do 
  script.
*/
// Atualiza o conteúdo do 1° item de lista de modo que ele se torne um link
firstItem.innerHTML = '<a href=\"http://example.org"\>' + itemContent + '</a>'; 