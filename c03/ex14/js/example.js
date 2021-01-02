/*
    O script é colocado dentro de uma função para ajudar a proteger o escopo
  das variáveis.
*/

(
  function() {
    //Parte 1: CRIA O OBJETO HOTEL E EXIBE OS DETALHES DA OFERTA
    //Cria o objeto hotel usando a sintaxe de literal
    var hotel = {
      name: 'Park',
      roomRate: 240,
      discount: 15,
      offerPrice: function() {
        var offerRate = this.roomRate * ((100 - this.discount) / 100);
        return offerRate;
      }
    }

    //Exibe o nome do hotel, o preço padrão, e o preço especial
    var hotelName, roomRate, specialRate;  
    
    //Obtém os elementos
    hotelName = document.getElementById('hotelName');
    roomRate = document.getElementById('roomRate');
    specialRate = document.getElementById('specialRate');
        
    hotelName.textContent = hotel.name; //Nome
    roomRate.textContent = '$' + hotel.roomRate.toFixed(2); //Preço
    specialRate.textContent = '$' + hotel.offerPrice(); //Oferta

    // PARTE 2: CALCULA E EXIBE OS DETALHES SOBRE O FIM DA OFERTA
    var expiryMsg; // Mensagem exibida ao usuário
    var today;     // Data de hoje
    var elEnds;    // Elemento para exibir o fim da oferta

    function offerExpires(today) {
      // Declara as variáveis dentro da função para escopo local
      var weekFromToday, day, date, month, year, dayNames, monthNames;

      //Adiciona 7 dias à data/hora atual (adicionando em milissegundos)
      weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);

      // Cria o array para armazenar os nomes dos dias
      dayNames = 
        ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'S&aacute;bado'];

      // Cria o array para armazenar os nomes dos meses
      monthNames = 
        ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
         'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
      
      // Coleta partes da data para mostrar na página
      day = dayNames[weekFromToday.getDay()];
      date = weekFromToday.getDate();
      month = monthNames[weekFromToday.getMonth()];
      year = weekFromToday.getFullYear();

      // Cria a mensagem
      expiryMsg = 'Offer expires next ';
      expiryMsg += day + ' <br /> (' + date + ' ' + month + ' ' + year + ')';
      return expiryMsg;
    }

    today = new Date();
    elEnds = document.getElementById('offerEnds');
    elEnds.innerHTML = offerExpires(today);
  }
());

