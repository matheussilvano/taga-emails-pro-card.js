function encaminhaEmailParaOCard() {
    // Define o nome da label que será monitorada
    var labelCartoes = GmailApp.getUserLabelByName("Vizzoo"); // Aqui está o nome da label
    
    // Obtém todos os emails com a label "Vizzoo" que ainda não foram lidos
    var threads = labelCartoes.getThreads();
  
    for (var i = 0; i < threads.length; i++) {
        var thread = threads[i];
        var messages = thread.getMessages(); // Obtém as mensagens do thread

        for (var j = 0; j < messages.length; j++) {
            var mensagem = messages[j]; // Cada mensagem do thread
          
            // Vê se o e-mail está como não lido
            if (mensagem.isUnread()) {
                // Encaminha o email pro card
                mensagem.forward("anderson.vaz@nexxera.com");
                
                // Marca o e-mail como lido
                mensagem.markRead();
            }
        }
    }
}
