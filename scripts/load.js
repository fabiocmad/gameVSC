function preload() {
    imagemCenario = loadImage('imagens/cenario/background.png');
    imagemTelaInicial = loadImage('imagens/cenario/telaInicial.jpg');
    imagemPersonagem = loadImage('imagens/personagem/correndo.png');
    imagemVida = loadImage('imagens/assets/coracao.png');
    imagemInimigo = loadImage('imagens/inimigos/gotinha.png');
    imagemInimigoGrande = loadImage('imagens/inimigos/troll.png');
    imagemInimigoVoador = loadImage('imagens/inimigos/gotinha-voadora.png');
    imagemNuvem = loadImage('imagens/cenario/cloud.jpg');

    fonteTelaInicial = loadFont('imagens/assets/fonteTelaInicial.otf');
    fita = loadJSON('fita/fita.json');

    somDoJogo = loadSound('sons/trilha_jogo.mp4');
    somDoPulo = loadSound('sons/somPulo.mp3');
    somGameOver = loadSound('sons/gameOver.mp4');
    imagemGameOver = loadImage('imagens/assets/game-over.png');
  }