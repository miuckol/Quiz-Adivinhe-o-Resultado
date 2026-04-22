let respostaCorreta = 0;

function gerarQuestao() {
  const a = Math.floor(Math.random() * 20) + 1;
  const b = Math.floor(Math.random() * 20) + 1;
  respostaCorreta = a + b;
  document.getElementById('pergunta').textContent = a + ' + ' + b + ' = ?';
  document.getElementById('feedback').textContent = '';
  gerarBotoes();
}

function gerarBotoes() {
  const container = document.getElementById('opcoes');
  container.innerHTML = '';
  const opcoes = [respostaCorreta];
  while (opcoes.length < 4) {
    const errada = respostaCorreta + Math.floor(Math.random() * 8) + 1;
    if (!opcoes.includes(errada)) opcoes.push(errada);
  }
  opcoes.sort(() => Math.random() - 0.5);
  opcoes.forEach(function(valor) {
    const btn = document.createElement('button');
    btn.textContent = valor;
    btn.onclick = function() { verificarResposta(valor); };
    container.appendChild(btn);
  });
}

function verificarResposta(valorClicado) {
  const feedback = document.getElementById('feedback');
  if (valorClicado === respostaCorreta) {
    feedback.textContent = 'Parabens, resposta Correta!';
    feedback.style.color = 'green';
  } else {
    feedback.textContent = 'Incorreta! A resposta era ' + respostaCorreta;
    feedback.style.color = 'red';
  }
  setTimeout(gerarQuestao, 1500);
}

gerarQuestao();
