const botao = document.getElementById('botaoMensagem');
const mensagemDiv = document.getElementById('mensagem');

botao.addEventListener('click', function() {
  mensagemDiv.innerHTML = "<p>Sejam bem vindos, nessa página web, conto um pouco sobre mim, fiquem a vontade</p>";
});
