// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente e têm as seguintes funcionalidades: 
// - "gets": lê UMA linha com dados de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente;

// Lê as entradas do usuário
const canal = gets();
const cliente = gets();

if(canal ==="WhatsApp")
  print(`Ola, ${cliente}! Bem-vindo ao canal WhatsApp.`)
else if(canal === "Instagram")  
  print(`Ola, ${cliente}! Bem-vindo ao canal Instagram.`)
else if(canal === "Webchat")  
  print(`Ola, ${cliente}! Bem-vindo ao canal Webchat.`)
else
  print(`Ola, ${cliente}! Bem-vindo ao canal Telegram.`)

// TODO: Imprima a mensagem de saudação personalizada no formato solicitado usando os valores lidos