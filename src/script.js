var cartaGeralt = {
  nome: "Geralt de Rívia",
  id: "1A",
  trunfo: false,
  vencetrunfo: true,
  imagem: "/assets/card-front/heros/10090000-geralt.jpg",
  forca: 75,
  constituicao: 80,
  destreza: 80,
  magia: 60
};
var cartaCiri = {
  nome: "Cirilla Fiona",
  id: "1B",
  trunfo: true,
  vencetrunfo: false,
  imagem: "/assets/card-front/heros/10070000-ciri-trunfo.jpg",
  forca: 50,
  constituicao: 60,
  destreza: 85,
  magia: 90
};
var cartaYennefer = {
  nome: "Yennefer Vengerberg",
  id: "1C",
  trunfo: false,
  vencetrunfo: false,
  imagem: "/assets/card-front/heros/10190000-yennefer.jpg",
  forca: 55,
  constituicao: 70,
  destreza: 80,
  magia: 85
};
var cartaTriss = {
  nome: "Triss Merigold",
  id: "1D",
  trunfo: false,
  vencetrunfo: false,
  imagem: "/assets/card-front/heros/10120000-triss.jpg",
  forca: 60,
  constituicao: 70,
  destreza: 75,
  magia: 80
};
var cartaVesemir = {
  nome: "Vesemir",
  id: "2A",
  trunfo: false,
  vencetrunfo: true,
  imagem: "/assets/card-front/heros/14760000-vesemir.jpg",
  forca: 70,
  constituicao: 70,
  destreza: 65,
  magia: 60
};
var cartaRegis = {
  nome: "Emiel Regis",
  id: "2B",
  trunfo: false,
  vencetrunfo: false,
  imagem: "/assets/card-front/heros/10100000-regis.jpg",
  forca: 90,
  constituicao: 90,
  destreza: 85,
  magia: 60
};
var cartaKeira = {
  nome: "Keira Metz",
  id: "2C",
  trunfo: false,
  vencetrunfo: false,
  imagem: "/assets/card-front/heros/10800000-keira.jpg",
  forca: 60,
  constituicao: 65,
  destreza: 75,
  magia: 75
};
var cartaAvallach = {
  nome: "Avallac'h",
  id: "2D",
  trunfo: false,
  vencetrunfo: false,
  imagem: "/assets/card-front/heros/10180000-sage.jpg",
  forca: 60,
  constituicao: 65,
  destreza: 80,
  magia: 95
};
var deckHerois = [cartaGeralt, cartaCiri, cartaYennefer, cartaTriss, cartaVesemir, cartaRegis, cartaKeira, cartaAvallach];

var cartaGaunter = {
  nome: "Gaunter O'Dim",
  id: "3A",
  trunfo: false,
  vencetrunfo: true,
  imagem: "/assets/card-front/villains/11520000-gaunter.jpg",
  forca: 60,
  constituicao: 50,
  destreza: 70,
  magia: 100
};
var cartaEredin = {
  nome: "Eredin Glas",
  id: "3B",
  trunfo: false,
  vencetrunfo: false,
  imagem: "/assets/card-front/villains/11270000-eredin.jpg",
  forca: 80,
  constituicao: 85,
  destreza: 70,
  magia: 75
};
var cartaSavolla = {
  nome: "Savolla",
  id: "3C",
  trunfo: false,
  vencetrunfo: false,
  imagem: "/assets/card-front/villains/17560000-savolla.jpg",
  forca: 60,
  constituicao: 70,
  destreza: 70,
  magia: 75
};
var cartaVilgefortz = {
  nome: "Vilgefortz",
  id: "3D",
  trunfo: false,
  vencetrunfo: false,
  imagem: "/assets/card-front/villains/12890000-vilgefortz.jpg",
  forca: 60,
  constituicao: 75,
  destreza: 70,
  magia: 80
};
var cartaDettlaff = {
  nome: "Dettlaff",
  id: "4A",
  trunfo: false,
  vencetrunfo: true,
  imagem: "/assets/card-front/villains/13720000-dettlaff.jpg",
  forca: 90,
  constituicao: 90,
  destreza: 75,
  magia: 70
};
var cartaImlerith = {
  nome: "Imlerith",
  id: "4B",
  trunfo: false,
  vencetrunfo: false,
  imagem: "/assets/card-front/villains/16520000-imlerith.jpg",
  forca: 90,
  constituicao: 85,
  destreza: 60,
  magia: 55
};
var cartaOlgierd = {
  nome: "Olgierd von Everec",
  id: "4C",
  trunfo: false,
  vencetrunfo: false,
  imagem: "/assets/card-front/villains/17850000-olgierd.jpg",
  forca: 80,
  constituicao: 95,
  destreza: 85,
  magia: 50
};
var cartaProfessor = {
  nome: "The Professor",
  id: "4D",
  trunfo: false,
  vencetrunfo: false,
  imagem: "/assets/card-front/villains/18160000-professor.jpg",
  forca: 50,
  constituicao: 65,
  destreza: 65,
  magia: 50
};
var deckViloes = [cartaGaunter, cartaEredin, cartaSavolla, cartaVilgefortz, cartaDettlaff, cartaImlerith, cartaOlgierd, cartaProfessor];

// var deckCartas = deckHerois.concat(deckViloes);

fetch("cards.json")
  .then(response => response.json())
  .then(data => {
    let deckHerois = data.deckHerois;
    let deckViloes = data.deckViloes;
    deckCartas = deckHerois.concat(deckViloes);
  })

var listaNomesAdversarios = ["Robson", "Gilmar", "Bruno", "Felipe", "Amanda", "Jéssica", "Sofia", "Marina"];

var numeroNomeAdversario = numeroAleatorioLista(listaNomesAdversarios);
var nomeAdversario = listaNomesAdversarios[numeroNomeAdversario];

var cartaMaquina;
var cartaJogador;
var maquinaVenceu;
var jogadorVenceu;
var pontosMaquina = 0;
var pontosJogador = 0;

function getHtmlElements() {
  textoPrincipalHtml = document.getElementById("textoPrincipal");
  divRegrasHtml = document.getElementById("regras");
  divPlacarHtml = document.getElementById("placar");
  divQtdCartasHtml = document.getElementById("quantidade-cartas");
  divCartasHtml = document.getElementById("cartas");
  divResultadoHtml = document.getElementById("resultado");
  divRadioGroupHtml = document.getElementById("radioGroup");

  btnAtributos = document.getElementsByName("atributos");
  btnForcaHtml = document.getElementById("btnForca");
  btnConstituicaoHtml = document.getElementById("btnConstituicao");
  btnDestrezaHtml = document.getElementById("btnDestreza");
  btnMagiaHtml = document.getElementById("btnMagia");

  btnIniciarPartidaHtml = document.getElementById("btnIniciarPartida");
  btnRegrasHtml = document.getElementById("btnRegras");
  btnVoltarJogoHtml = document.getElementById("btnVoltarAoJogo");
  btnJogarHtml = document.getElementById("btnJogar");
  btnProximaRodadaHtml = document.getElementById("btnProximaRodada");
}
getHtmlElements();

function boasVindas() {
  maquinaVenceu = false;
  textoPrincipalHtml.innerHTML = `<br>Bem-vindo ao The Witcher Card Game!<br><br>Me chamo ${nomeAdversario} e serei seu oponente para esta partida<br><br>As regras ficarão disponíveis a qualquer momento do jogo<br><br>Quando você estiver pronto podemos começar`;

  divQtdCartasHtml.style.display = "none";
  divRegrasHtml.style.display = "none";
  btnJogarHtml.style.display = "none";
  btnProximaRodadaHtml.style.display = "none";
}
boasVindas();

function limparTelaInicial() {
  maquinaVenceu = false;

  divRegrasHtml.style.display = "none";
  divRadioGroupHtml.style.display = "none";
  btnVoltarJogoHtml.style.display = "none";
  btnRegrasHtml.style.display = "inline";
  divQtdCartasHtml.innerHTML = "";
  divQtdCartasHtml.style.display = "none";
  textoPrincipalHtml.style.display = "inline";
  divCartasHtml.innerHTML = `<div id="carta-jogador" class="carta"></div> <div id="carta-maquina" class="carta"></div>`;
  btnJogarHtml.style.display = "inline";
  divResultadoHtml.innerHTML = "";
  btnProximaRodadaHtml.style.display = "inline";
}

function sortearDecks() {
  deckMaquina = [];
  deckJogador = [];

  var numeroCartasDeckMaquina = deckMaquina.length;
  var numeroCartasDeckJogador = deckJogador.length;

  while (numeroCartasDeckMaquina < deckCartas.length / 2) {
    var numeroAleatorioMaquina = parseInt(Math.random() * deckCartas.length);
    var cartaNovaMaquina = deckCartas[numeroAleatorioMaquina];

    if (deckMaquina.includes(cartaNovaMaquina) == false) {
      deckMaquina.push(cartaNovaMaquina);
      numeroCartasDeckMaquina++;
    }
  }

  while (numeroCartasDeckJogador < deckCartas.length / 2) {
    var numeroAleatorioJogador = parseInt(Math.random() * deckCartas.length);
    var cartaNovaJogador = deckCartas[numeroAleatorioJogador];

    if (deckMaquina.includes(cartaNovaJogador) == false) {
      if (deckJogador.includes(cartaNovaJogador) == false) {
        deckJogador.push(cartaNovaJogador);
        numeroCartasDeckJogador++;
      }
    }
  }
}

function atualizaPlacar() {
  divPlacarHtml.innerHTML = `Jogador ${pontosJogador} / ${pontosMaquina} Máquina`;
}
function atualizaQuantidadeDeCartas() {
  divQtdCartasHtml.innerHTML = `Deck do jogador: ${deckJogador.length} cartas / Deck de ${nomeAdversario}: ${deckMaquina.length} cartas`;
}

function numeroAleatorioLista(lista) {
  var random;
  do {
    random = parseInt(Math.random() * lista.length);
  } while (random === numeroAleatorioLista.last);
  numeroAleatorioLista.last = random;
  return random;
}
function numeroAleatorioJogador() {
  var random;
  do {
    random = parseInt(Math.random() * deckJogador.length);
  } while (random === numeroAleatorioJogador.last);
  numeroAleatorioJogador.last = random;
  return random;
}
function numeroAleatorioMaquina() {
  var random;
  do {
    random = parseInt(Math.random() * deckMaquina.length);
  } while (random === numeroAleatorioMaquina.last);
  numeroAleatorioMaquina.last = random;
  return random;
}

function sortearCarta() {
  if (deckMaquina.length > 1) {
    numeroCartaMaquina = numeroAleatorioMaquina();
  } else if (deckMaquina.length == 1) {
    numeroCartaMaquina = parseInt(Math.random() * deckMaquina.length);
  }
  cartaMaquina = deckMaquina[numeroCartaMaquina];

  if (deckJogador.length > 1) {
    numeroCartaJogador = numeroAleatorioJogador();
  } else if (deckJogador.length == 1) {
    numeroCartaJogador = parseInt(Math.random() * deckJogador.length);
  }
  cartaJogador = deckJogador[numeroCartaJogador];

  btnIniciarPartidaHtml.disabled = true;
  btnJogarHtml.disabled = false;
  exibeCartaJogadorSemOpcoes();

  if (maquinaVenceu === true) {
    divResultadoHtml.innerHTML = `<p class="resultado-final">Vez de ${nomeAdversario}</p>`;
    for (var i = 0; i < btnAtributos.length; i++) {
      btnAtributos[i].disabled = true;
      btnAtributos[i].checked = false;
    }
  } else if (maquinaVenceu !== true) {
    divResultadoHtml.innerHTML = '<p class="resultado-final">Sua vez</p>';
    for (var i = 0; i < btnAtributos.length; i++) {
      btnAtributos[i].disabled = false;
      btnAtributos[i].checked = false;
    }
  }
}

function exibeCartaJogadorSemOpcoes() {
  var divCartaJogador = document.getElementById("carta-jogador");
  var moldura = '<img src="/assets/card-frame/card-frame.png" style=" width: inherit; height: inherit; position: absolute;">';

  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;
  var id = `<p class="carta-id">${cartaJogador.id}</p>`;

  var forcaHtml = `<p type='text' id='textForca' name='atributo' value='forca'>Força:</p><p class="carta-valor">${cartaJogador.forca}</p><div class='barra'><div class='progresso' style='width:${cartaJogador.forca}%'></div></div>`;

  var constituicaoHtml = `<p type='text' id='textConstituicao' name='atributo' value='constituicao'>Constituição:</p><p class="carta-valor">${cartaJogador.constituicao}</p><div class='barra'><div class='progresso' style='width:${cartaJogador.constituicao}%'></div></div>`;

  var destrezaHtml = `<p type='text' id='textDestreza' name='atributo' value='destreza'>Destreza:</p><p class="carta-valor">${cartaJogador.destreza}</p><div class='barra'><div class='progresso' style='width:${cartaJogador.destreza}%'></div></div>`;

  var magiaHtml = `<p type='text' id='textMagia' name='atributo' value='ataque'>Magia:</p><p class="carta-valor">${cartaJogador.magia}</p><div class='barra'><div class='progresso' style='width:${cartaJogador.magia}%'></div></div>`;

  var opcoesTexto = forcaHtml + constituicaoHtml + destrezaHtml + magiaHtml;
  var html = "<div id='opcoes' class='carta-status'>";

  divCartaJogador.innerHTML = moldura + nome + id + html + opcoesTexto + "</div>";
  
  var divCartaMaquina = document.getElementById("carta-maquina");
  var cardBack = '<img src="/assets/card-back/card-back.jpg" style=" width: inherit; height: inherit; position: absolute;">';
  divCartaMaquina.innerHTML = cardBack + "</div>";
}

function exibeCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  var moldura = '<img src="/assets/card-frame/card-frame.png" style=" width: inherit; height: inherit; position: absolute;">';

  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;
  var id = `<p class="carta-id">${cartaMaquina.id}</p>`;

  var forcaHtml = `<p type='text' id='textForca' name='atributo' value='forca'>Força:</p><p class="carta-valor">${cartaMaquina.forca}</p><div class='barra'><div class='progresso' style='width:${cartaMaquina.forca}%'></div></div>`;

  var constituicaoHtml = `<p type='text' id='textConstituicao' name='atributo' value='constituicao'>Constituição:</p><p class="carta-valor">${cartaMaquina.constituicao}</p><div class='barra'><div class='progresso' style='width:${cartaMaquina.constituicao}%'></div></div>`;

  var destrezaHtml = `<p type='text' id='textDestreza' name='atributo' value='destreza'>Destreza:</p><p class="carta-valor">${cartaMaquina.destreza}</p><div class='barra'><div class='progresso' style='width:${cartaMaquina.destreza}%'></div></div>`;

  var magiaHtml = `<p type='text' id='textMagia' name='atributo' value='ataque'>Magia:</p><p class="carta-valor">${cartaMaquina.magia}</p><div class='barra'><div class='progresso' style='width:${cartaMaquina.magia}%'></div></div>`;

  var opcoesTexto = forcaHtml + constituicaoHtml + destrezaHtml + magiaHtml;
  var html = "<div id='opcoes' class='carta-status --spacing'>";

  divCartaMaquina.innerHTML = moldura + nome + id + html + opcoesTexto + "</div>";
}

function obtemAtributoSelecionado() {
  if (btnForcaHtml.checked) {
    return "forca";
  } else if (btnConstituicaoHtml.checked) {
    return "constituicao";
  } else if (btnDestrezaHtml.checked) {
    return "destreza";
  } else if (btnMagiaHtml.checked) {
    return "magia";
  }
}

function escolheMaiorAtributo(cartaEscolhida) {
  var atributosCartaEscolhida = [cartaEscolhida.forca, cartaEscolhida.constituicao, cartaEscolhida.destreza, cartaEscolhida.magia];
  var indexOfMaxValue = atributosCartaEscolhida.indexOf(Math.max(...atributosCartaEscolhida));

  for (var i = 0; i < btnAtributos.length; i++) {
    btnAtributos[i].disabled = false;
    btnAtributos[i].checked = false;
  }

  if (indexOfMaxValue == 0) {
    btnForcaHtml.checked = true;
    return "forca";
  } else if (indexOfMaxValue == 1) {
    btnConstituicaoHtml.checked = true;
    return "constituicao";
  } else if (indexOfMaxValue == 2) {
    btnDestrezaHtml.checked = true;
    return "destreza";
  } else if (indexOfMaxValue == 3) {
    btnMagiaHtml.checked = true;
    return "magia";
  }
}

function jogar() {
  if (maquinaVenceu === true) {
    jogadaMaquina();
  } else {
    jogadaJogador();
  }
}

function jogadaMaquina() {
  exibeCartaMaquina();
  var atributoSelecionado = escolheMaiorAtributo(cartaMaquina);
  divResultadoHtml.style.visibility = "visible";
  // for(var i=0; i < btnAtributos.length; i++){
  //   btnAtributos[i].disabled = true
  //   btnAtributos[i].checked = false }
  // Swal.fire(`${nomeAdversario} escolheu: ${atributoSelecionado}`)

  if (
    (cartaJogador.trunfo === true && cartaMaquina.vencetrunfo === true) ||
    (cartaMaquina.trunfo === true && cartaJogador.vencetrunfo === true) ||
    (cartaMaquina.trunfo === false && cartaJogador.trunfo === false)
  ) {
    if (cartaJogador[atributoSelecionado] > cartaMaquina[atributoSelecionado]) {
      htmlResultado = '<p class="resultado-final">Você venceu a rodada</p>';
      maquinaVenceu = false;
      jogadorVenceu = true;
      pontosJogador++;
      deckJogador.push(cartaMaquina);
      deckMaquina.splice(numeroCartaMaquina, 1);
    } else if (
      cartaJogador[atributoSelecionado] < cartaMaquina[atributoSelecionado]
    ) {
      htmlResultado = `<p class="resultado-final">${nomeAdversario} venceu a rodada</p>`;
      maquinaVenceu = true;
      jogadorVenceu = false;
      pontosMaquina++;
      deckMaquina.push(cartaJogador);
      deckJogador.splice(numeroCartaJogador, 1);
    } else {
      htmlResultado = '<p class="resultado-final">Empatou</p>';
      maquinaVenceu = true;
      jogadorVenceu = false;
    }
  }

  if (cartaJogador.trunfo === true && cartaMaquina.vencetrunfo === false) {
    htmlResultado =
      '<p class="resultado-final">Seu Super Trunfo venceu a rodada</p>';
    maquinaVenceu = false;
    jogadorVenceu = true;
    pontosJogador++;
    deckJogador.push(cartaMaquina);
    deckMaquina.splice(numeroCartaMaquina, 1);
  }

  if (cartaMaquina.trunfo === true && cartaJogador.vencetrunfo === false) {
    htmlResultado =
      '<p class="resultado-final">O Super Trunfo venceu a sua carta</p>';
    maquinaVenceu = true;
    jogadorVenceu = false;
    pontosMaquina++;
    deckMaquina.push(cartaJogador);
    deckJogador.splice(numeroCartaJogador, 1);
  }

  // Fim de Jogo
  if (deckMaquina.length == 0) {
    btnIniciarPartidaHtml.disabled = false;
    finalPartidaVencedor();
  } else if (deckJogador.length == 0) {
    btnIniciarPartidaHtml.disabled = false;
    finalPartidaPerdedor();
  } else {
    btnProximaRodadaHtml.disabled = false;
  }

  divResultadoHtml.innerHTML = htmlResultado;
  btnJogarHtml.disabled = true;
  // atualizaPlacar()
  atualizaQuantidadeDeCartas();
}

function jogadaJogador() {
  var atributoSelecionado = obtemAtributoSelecionado();
  divResultadoHtml.style.visibility = "visible";
  // for(var i=0; i < btnAtributos.length; i++){
  //   btnAtributos[i].checked = false }

  if (
    (cartaJogador.trunfo === true && cartaMaquina.vencetrunfo === true) ||
    (cartaMaquina.trunfo === true && cartaJogador.vencetrunfo === true) ||
    (cartaMaquina.trunfo === false && cartaJogador.trunfo === false)
  ) {
    if (cartaJogador[atributoSelecionado] > cartaMaquina[atributoSelecionado]) {
      htmlResultado = '<p class="resultado-final">Você venceu a rodada</p>';
      maquinaVenceu = false;
      jogadorVenceu = true;
      pontosJogador++;
      deckJogador.push(cartaMaquina);
      deckMaquina.splice(numeroCartaMaquina, 1);
    } else if (
      cartaJogador[atributoSelecionado] < cartaMaquina[atributoSelecionado]
    ) {
      htmlResultado = `<p class="resultado-final">${nomeAdversario} venceu a rodada</p>`;
      maquinaVenceu = true;
      jogadorVenceu = false;
      pontosMaquina++;
      deckMaquina.push(cartaJogador);
      deckJogador.splice(numeroCartaJogador, 1);
    } else {
      htmlResultado = '<p class="resultado-final">Empatou</p>';
      maquinaVenceu = false;
      jogadorVenceu = false;
    }
  }

  if (cartaJogador.trunfo === true && cartaMaquina.vencetrunfo === false) {
    htmlResultado = '<p class="resultado-final">Seu Super Trunfo venceu!</p>';
    maquinaVenceu = false;
    jogadorVenceu = true;
    pontosJogador++;
    deckJogador.push(cartaMaquina);
    deckMaquina.splice(numeroCartaMaquina, 1);
  }

  if (cartaMaquina.trunfo === true && cartaJogador.vencetrunfo === false) {
    htmlResultado =
      '<p class="resultado-final">O Super Trunfo venceu a sua carta</p>';
    maquinaVenceu = true;
    jogadorVenceu = false;
    pontosMaquina++;
    deckMaquina.push(cartaJogador);
    deckJogador.splice(numeroCartaJogador, 1);
  }

  // Fim de Jogo
  if (deckMaquina.length == 0) {
    btnIniciarPartidaHtml.disabled = false;
    finalPartidaVencedor();
  } else if (deckJogador.length == 0) {
    btnIniciarPartidaHtml.disabled = false;
    finalPartidaPerdedor();
  } else {
    btnProximaRodadaHtml.disabled = false;
  }

  divResultadoHtml.innerHTML = htmlResultado;
  btnJogarHtml.disabled = true;
  // atualizaPlacar()
  exibeCartaMaquina();
  atualizaQuantidadeDeCartas();
}

function proximaRodada() {
  divCartasHtml.innerHTML = `<div id="carta-jogador" class="carta"></div> <div id="carta-maquina" class="carta"></div>`;
  btnIniciarPartidaHtml.disabled = false;
  btnJogarHtml.disabled = true;
  btnProximaRodadaHtml.disabled = true;
  // divResultadoHtml.innerHTML = ""
  // divResultadoHtml.style.visibility = "hidden"
  sortearCarta();
}

function iniciarPartida() {
  sortearDecks();
  atualizaQuantidadeDeCartas();
  sortearCarta();

  textoPrincipalHtml.innerHTML = "Escolha o seu atributo";
  divCartasHtml.innerHTML = `<div id="carta-jogador" class="carta"></div> <div id="carta-maquina" class="carta"></div>`;
  divQtdCartasHtml.style.display = "inline";
  divRadioGroupHtml.style.display = "inline";
  btnIniciarPartidaHtml.disabled = true;
  btnJogarHtml.disabled = false;
  btnJogarHtml.style.display = "inline";
  btnProximaRodadaHtml.disabled = true;
  btnProximaRodadaHtml.style.display = "inline";
  divResultadoHtml.innerHTML = '<p class="resultado-final">Você começa</p>';
  divRegrasHtml.style.display = "none";
  exibeCartaJogadorSemOpcoes();
}

function regras() {
  var objetivoHtml = "<h2>OBJETIVO</h2><h3>Ganhar todas as cartas do baralho.</h3>";
  var oJogoHtml = "<h2>O JOGO</h2><h3>O jogo baseia-se na comparação dos valores de sua carta com a dos outros jogadores. Para sua carta vencer, o atributo escolhido precisa ter valor maior do que o mesmo atributo da carta do seu adversário. Quando sua carta vence, você ganha a carta do seu adversário e é sorteada a próxima carta do seu deck para uma nova jogada.</h3>";
  var placarHtml = "<h2>PLACAR</h2><h3>O placar mostra o número de cartas que você e seu adversário possuem. O placar vai se alterando automaticamente a cada rodada. Em caso de empate deve ser feito um novo sorteio dentre as cartas de cada deck.</h3>";
  var comoJogarHtml = "<h2>COMO JOGAR</h2><h3>Para iniciar, escolha dentre as informações da sua carta, aquela que você julga ter o valor capaz de vencer as cartas dos seus adversários.<br>Exemplo: Se você escolher o atributo “Magia”, compare com a carta do seu adversário e verifique quem venceu.<br>• Se você vencer - a carta do outro jogador irá para o seu deck de cartas e você continua escolhendo o atributo da sua próxima carta.<br>• Se o outro jogador vencer - sua carta irá para o deck de cartas dele e a vez de escolher passa para ele.<br>• Em caso de empate - é realizado um novo sorteio e quem escolheu por último continua sua vez.</h3>";
  var cartaSuperTrunfo = '<h2>CARTA SUPER TRUNFO</h2><h3>Existe entre as cartas uma carta SUPER TRUNFO. Esta carta vence todas as cartas do baralho que não tenham a letra A marcada na parte superior, independentemente do valor de seus atributos. No entanto, se a carta do adversário possuir a marcação "A" (1A, 2A, 3A, etc) o valor do atributo é considerado e ganha quem tiver o maior valor.</h3>';
  var fimDoJogo = "<h2>FIM DO JOGO</h2><h3>O jogo termina quando um dos jogadores ganhar todas as cartas do baralho.</h3>";

  divRegrasHtml.innerHTML = objetivoHtml + oJogoHtml + placarHtml + comoJogarHtml + cartaSuperTrunfo + fimDoJogo;

  divRegrasHtml.style.display = "inline";
  btnVoltarJogoHtml.style.display = "inline";
  divRadioGroupHtml.style.display = "none";
  btnRegrasHtml.style.display = "none";
  divQtdCartasHtml.style.display = "none";
  textoPrincipalHtml.style.display = "none";
  divCartasHtml.style.display = "none";
  btnJogarHtml.style.display = "none";
  divResultadoHtml.style.display = "none";
  btnProximaRodadaHtml.style.display = "none";
}

function voltarAoJogo() {
  divRegrasHtml.style.display = "none";
  btnVoltarJogoHtml.style.display = "none";
  divRadioGroupHtml.style.display = "inline";
  btnRegrasHtml.style.display = "inline";
  divQtdCartasHtml.style.display = "inline";
  textoPrincipalHtml.style.display = "inline";
  divCartasHtml.style.display = "flex";
  btnJogarHtml.style.display = "inline";
  divResultadoHtml.style.display = "inline";
  btnProximaRodadaHtml.style.display = "inline";
}

function finalPartidaVencedor() {
  Swal.fire({
    title: "Parabéns, você venceu o jogo! Vamos jogar novamente?",
    showDenyButton: true,
    showCancelButton: false,
    confirmButtonText: `SIM`,
    denyButtonText: `NÃO`
  })
  .then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: `Gostaria de mais uma partida contra ${nomeAdversario} ou quer trocar o oponente?`,
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: `MANTER`,
        denyButtonText: `TROCAR`
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(`Legal, ${nomeAdversario} está pronto para a revanche!`);
          limparTelaInicial();
          boasVindas();
        } else if (result.isDenied) {
          Swal.fire("Certo, vamos lá!");
          var numeroNomeAdversario = numeroAleatorioLista(
            listaNomesAdversarios
          );
          nomeAdversario = listaNomesAdversarios[numeroNomeAdversario];
          limparTelaInicial();
          boasVindas();
        }
      });
    } else if (result.isDenied) {
      btnIniciarPartidaHtml.disabled = true;
      Swal.fire({
        title: "Gostou do jogo?",
        html:
          "<a href='https://gfhdutra.github.io/' target='_blank'>Confira aqui meus outros projetos</a>",
        imageUrl: "/assets/certificard.png",
        imageWidth: 300,
        imageHeight: 387,
        imageAlt: "Certificard - Gabriel Dutra"
      });
    }
  });
}

function finalPartidaPerdedor() {
  Swal.fire({
    title: "Que pena, não foi desta vez. Quer tentar de novo?",
    showDenyButton: true,
    showCancelButton: false,
    confirmButtonText: `SIM`,
    denyButtonText: `NÃO`
  })
  .then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: `Gostaria de uma revanche contra ${nomeAdversario} ou quer trocar o oponente?`,
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: `MANTER`,
        denyButtonText: `TROCAR`
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(`Legal, ${nomeAdversario} está pronto para a próxima!`);
          limparTelaInicial();
          boasVindas();
        } else if (result.isDenied) {
          Swal.fire("Certo, vamos lá!");
          var numeroNomeAdversario = numeroAleatorioLista(
            listaNomesAdversarios
          );
          nomeAdversario = listaNomesAdversarios[numeroNomeAdversario];
          limparTelaInicial();
          boasVindas();
        }
      });
    } else if (result.isDenied) {
      btnIniciarPartidaHtml.disabled = true;
      Swal.fire({
        title: "Gostou do jogo?",
        html:
          "<a href='https://gfhdutra.github.io/' target='_blank'>Confira aqui meus outros projetos</a>",
        imageUrl: "/assets/certificard.png",
        imageWidth: 300,
        imageHeight: 387,
        imageAlt: "Certificard - Gabriel Dutra"
      });
    }
  });
}

function paginaTutorial() {
  window.open("https://codepen.io/gfhdutra/full/wvgdRLG");
}