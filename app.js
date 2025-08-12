//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Lista de amigos
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
  const input = document.getElementById("amigo");
  const nome = input.value.trim();

  if (nome !== "") {
    amigos.push(nome);
    input.value = "";
    atualizarLista();
  }
}

// Atualiza a lista exibida na tela
function atualizarLista() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = amigos.map(amigo => `<li>${amigo}</li>`).join("");
}

// Função para sortear um amigo aleatoriamente
function sortearAmigo() {
  const resultado = document.getElementById("resultado");

  if (amigos.length === 0) {
    resultado.innerHTML = "<li>⚠️ Nenhum amigo foi adicionado.</li>";
    return;
  }

  const indice = Math.floor(Math.random() * amigos.length);
  const nomeSorteado = amigos[indice];

  resultado.innerHTML = `<li>🎉 O amigo secreto sorteado é: <strong>${nomeSorteado}</strong></li>`;
}
