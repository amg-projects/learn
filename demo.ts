const readline = require('readline-sync');

// Jogo de adivinhação
// O computador vai escolher um número aleatório entre 1 e 100
// O jogador vai tentar adivinhar o número
// O jogo termina quando o jogador acertar o número
// Easter egg: se o jogador digitar 69, o jogo vai exibir uma mensagem secreta, mas o jogo continua
    // A mensagem secreta vai exibir o número de tentativas do jogador
// Easter egg: se o jogador digitar 42, o jogo vai exibir uma mensagem secreta e encerrar o jogo
    // Mas vai fazer o jogador esperar 1000 segundos antes de encerrar o jogo, exibindo uma contagem regressiva

// Define o nome
const nome = "marucs";

// Anda com o boneco, casa a casa
for (let i = 0; i < nome.length; i++) {
    console.log(`Nome na posicao ${i}: ${nome[i]}`)
}