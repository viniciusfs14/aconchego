// Função para mostrar o minijogo
function startGame() {
    // Esconde o botão "Joguinho"
    document.querySelector('.container').style.display = 'none';
  
    // Exibe o minijogo
    document.querySelector('.musica-container').style.display = 'flex';
  }
  
  const melodia = ['mi', 'mi', 'do', 'fa', 'mi', 'fa', 'mi', 'do', 're', 'mi', 'do'];
  let indiceAtual = 0;

  function playNote(note) {
    const audio = new Audio(`piano/${note}.mp3`);
    audio.play().catch((e) => {
      console.error("Erro ao tocar o áudio:", e);
    });
  }

  function destacarBotao(nota) {
    document.querySelectorAll('.botoes-musicais button').forEach(botao => {
      botao.classList.remove('destaque');
      if (botao.getAttribute('data-note') === nota) {
        botao.classList.add('destaque');
      }
    });
  }

  function iniciarMelodia() {
    indiceAtual = 0;
    destacarBotao(melodia[indiceAtual]);
  }

  document.querySelectorAll('.botoes-musicais button').forEach(botao => {
    botao.addEventListener('click', () => {
      const nota = botao.getAttribute('data-note');
      if (nota === melodia[indiceAtual]) {
        playNote(nota);
        indiceAtual++;
        if (indiceAtual < melodia.length) {
          destacarBotao(melodia[indiceAtual]);
        } else {
          document.querySelectorAll('.botoes-musicais button').forEach(b => b.classList.remove('destaque'));
          const msgFinal = document.getElementById('mensagem-final');
          msgFinal.style.display = 'block';
        }
      } else {
        alert('Nota incorreta. Tente novamente.');
      }
    });
  });

  iniciarMelodia();

  function mostrarMensagemFinal() {
    const msg = document.getElementById('mensagem-final');
    msg.style.display = 'block';
  }


  // Mensagens

  