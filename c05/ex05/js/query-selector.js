//querySelector() retorna somente a primeira correspondência
var el = document.querySelector('li.hot');
el.className = 'cool';

//querySelectorAll retorna uma NodeList
//o 2° elemento correspondente (o 3° item da lista é
// selecionado e alterado)
var els = document.querySelectorAll('li.hot');
els[1].className = 'cool';