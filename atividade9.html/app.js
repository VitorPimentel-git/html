const botaoAcao = document.getElementById('actionButton');
const divResposta = document.getElementById('resposta');
const userInput = document.getElementById("userInput")
botaoAcao.addEventListener('click', function() {
    let mensagem = "Olá aventureiro(a) "
  divResposta.textContent = mensagem + userInput.value
});