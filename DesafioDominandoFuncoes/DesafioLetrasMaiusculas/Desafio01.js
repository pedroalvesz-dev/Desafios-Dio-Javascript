// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente e têm as seguintes funcionalidades: 
// - "gets": lê UMA linha com dados de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente;
// Use este template para resolver o desafio.

// Lê a mensagem enviada pelo usuário
const mensagem = gets();

// TODO: Converta todas as letras minúsculas da mensagem para maiúsculas
// Dica: existe um método nativo de string para isso
let mensagemMaiuscula = mensagem.toUpperCase();

print(mensagemMaiuscula)

// Imprima a mensagem padronizada
// print(mensagemPadronizada);