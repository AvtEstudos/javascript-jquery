/*
  pg. 216
  ACESSAR E ATUALIZAR TEXTO COM TEXTCONTENT (& INNERTEXT)

  <li id="one" class="hot"><em>fresh</em> figs</li>
  document.getElementById('one').textContent;

  textContent
    Para coletar o texto dos elementos <li> em nosso exemplo (e ignorar qualquer
  marcação dentro do elemento), use a propriedade textContent no elemento <li>
  pai. Neste caso, ela retornaria o valor fresh figs.

  innerText
    Você pode se deparar com a propriedade innerText, mas você deve evitá-la por
    três razões principais:
    1. Suporte:
      Firefox não suporta porque innerText não é parte de nenhum padrão.
    2. Obedece à CSS
      Ela não exibirá nenhum conteúdo ocultado pela CSS. Por exemplo se a regra
    oculta o elemento <em> a propriedade innerText retorna apenas figs.
    3. Desempenho
      Como a propriedade innerText leva em consideração as regras de layout que
    especificam se o elemento permanece ou não visível, pode ser mais lento 
    recuperar o conteúdo do que a propriedade textContent.

*/

// Localiza o 1° item na lista
var firstItem = document.getElementById('one');

// Obtém o valor de textContent
var showTextContent = firstItem.textContent;

// Obtém o valor de innerText
var showInnerText = firstItem.innerText;

// Exibe o conteúdo dessas duas propriedades no final da lista
var msg =  '<p>textContent: ' + showTextContent + '</p>';
    msg += '<p>innerText: '   + showInnerText   + '</p>';

var el = document.getElementById('scriptResults');
el.innerHTML = msg;

// Atualiza o 1° item na lista
firstItem.textContent = 'sourdough bread';

/*
    No IE8 ou versões anteriores, a propriedade textContent não funciona.
    No firefox, a propriedade innerText retornará undefined porque ela nunca
  foi implementada no Firefox.
*/