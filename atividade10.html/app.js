const botaoAcao = document.getElementById('actionButton');
const divResposta = document.getElementById('resposta');
const userInput = document.getElementById("userInput")
botaoAcao.addEventListener('click', function() {
    let mensagem = "Olá torcedor(a) "
    let mensagem2 = " .Seja bem vindo á arena do Timão!!"
  divResposta.textContent = mensagem + userInput.value + mensagem2
});