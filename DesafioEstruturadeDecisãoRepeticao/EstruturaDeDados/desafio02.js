// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente e têm as seguintes funcionalidades: 
// - "gets": lê UMA linha com dados de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente;
// Abaixo segue o template de código para este desafio, o qual pode ou não utilizar tais funções.

// Lê o comando do usuário
const comando = gets();

switch(comando){
    case "horario":
    print("Atendemos das 8h as 18h") 
    break
    
    case"telefone":
    print("Nosso telefone e 4002-8922")
    break

    case"servicos":
    print("Oferecemos suporte, vendas e consultoria")
    break

    default:
    print("Comando invalido")
    break

}