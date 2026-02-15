// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente e têm as seguintes funcionalidades: 
// - "gets": lê UMA linha com dados de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente;
// Use a estrutura abaixo para implementar a lógica do desafio.

const comando = gets(); // Lê o comando enviado ao bot

if (comando === "start") {
    print("Bot started");
} 
else if (comando === "stop") {
    print("Bot stopped");
} 
else if (comando === "pause") {
    print("Bot paused");
} 
else {
    print("unknown command");
}