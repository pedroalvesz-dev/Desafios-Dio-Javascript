/*Desafio
Você foi contratado como desenvolvedor júnior em uma startup que está criando uma plataforma de inteligência conversacional para automatizar conversas entre marcas e clientes em múltiplos canais digitais. Seu primeiro desafio é ajudar a equipe a estruturar as mensagens trocadas entre usuários e bots. Para isso, você deve criar uma classe chamada Message, que representa uma mensagem enviada em uma conversa. Cada mensagem possui um remetente (sender) e um conteúdo (content). Sua tarefa é implementar um método que, ao receber uma string no formato "sender: content", crie uma instância da classe Message e retorne uma resposta formatada no padrão "From sender: content". Se a entrada não contiver o caractere ":", a resposta deve ser "Invalid message".

Implemente a classe e o método de acordo com as especificações, sem utilizar bibliotecas externas. O programa deve ler uma única string de entrada e produzir a saída conforme descrito.

Entrada
Uma única string no formato "sender: content", onde sender e content são sequências de caracteres sem restrições específicas. Caso o caractere ":" não esteja presente, considere a mensagem inválida.

Saída
Uma única string. Se a entrada for válida, imprima "From sender: content", mantendo exatamente o sender e o content originais. Se a entrada for inválida, imprima "Invalid message".

Exemplos
A tabela abaixo apresenta exemplos de entrada e saída:

Entrada	Saída
Bot: Hello, how can I help you?	From Bot: Hello, how can I help you?
User: I need support	From User: I need support
System update scheduled	Invalid message
Agent: Please wait a moment	From Agent: Please wait a moment*/

class Message {
    constructor(sender, content) {
        this.sender = sender;
        this.content = content;
    }

    format() {
        return `From ${this.sender}: ${this.content}`;
    }
}

const input = gets();

if (input.includes(":")) {
    const parts = input.split(":");
    const sender = parts[0];
    const content = parts.slice(1).join(":").trim();
    
    const message = new Message(sender, content);
    print(message.format());
} else {
    print("Invalid message");
}