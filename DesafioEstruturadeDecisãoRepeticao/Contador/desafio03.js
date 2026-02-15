// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente e têm as seguintes funcionalidades: 
// - "gets": lê UMA linha com dados de entrada (input) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

// Lê o tipo de mensagem a ser contado ("BOT" ou "USER")
// TODO: Leia as mensagens até encontrar a linha "FIM"
// TODO: Para cada mensagem, verifique se ela começa com o tipo desejado (por exemplo: "BOT:" ou "USER:")
// TODO: Se começar com o tipo desejado, aumente o contador em 1

const tipoEscolhido = gets(); // "BOT" ou "USER"
let contador = 0;

while (true) {
    const mensagem = gets();

    if (mensagem === "FIM") {
        break;
    }

    if (mensagem.includes(tipoEscolhido + ":")) {
        contador++;
    }
}



// Ao final, imprima a quantidade de mensagens do tipo escolhido
print(contador);