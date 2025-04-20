// Função para mostrar o minijogo
function startGame() {
    // Esconde o botão "Joguinho"
    document.querySelector('.container').style.display = 'none';
  
    // Exibe o minijogo
    document.querySelector('.musica-container').style.display = 'flex';
  }
  
  // Função para tocar a nota musical quando o botão for clicado
  function playNote(note) {
    const audio = new Audio("piano/${note}.mp3");  
    audio.play().catch((e) => {
        console.error("Erro ao tocar o áudio:", e);
    });  
  }

  // Mensagens

  