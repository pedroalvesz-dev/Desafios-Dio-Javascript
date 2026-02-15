// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente e têm as seguintes funcionalidades: 
// - "gets": lê UMA linha com dados de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente;

// Função que retorna a saudação personalizada conforme o canal informado
function saudacaoBot(canal) {

    switch(canal)
    {
      case "whatsapp":
        {
        print("Ola, este e o WhatsAppBot!") 
        break
        }
      case"telegram":
    {
        print("	Ola, este e o TelegramBot!")
        break
    }
      case"webchat":
        {
        print("Ola, este e o WebChatBot!")
        break
        }
    }
    
}

// Entrada do usuário
const canal = gets();
if(canal==="whatsapp")
{saudacaoBot(canal)
  
}
else if(canal==="telegram"){
  saudacaoBot(canal)
}
else if(canal==="webchat"){
  saudacaoBot(canal)
}
else
{
  print("Canal nao suportado")
  
}

