// pega os valores do localStorage
const sonserina = Number(localStorage.getItem("sonserina")) || 0;
const gryffindor = Number(localStorage.getItem("gryffindor")) || 0;
const lufaLufa = Number(localStorage.getItem("lufaLufa")) || 0;
const corvinal = Number(localStorage.getItem("corvinal")) || 0;

// organiza os resultados
const resultado = [
  { nome: "Sonserina", pontos: sonserina },
  { nome: "Gryffindor", pontos: gryffindor },
  { nome: "Lufa Lufa", pontos: lufaLufa },
  { nome: "Corvinal", pontos: corvinal }
];

// ordena do maior para o menor
resultado.sort((a, b) => b.pontos - a.pontos);

// pega o vencedor
const vencedor = resultado[0];

// elementos da tela
const casaElemento = document.getElementById("casa");
const pontuacaoElemento = document.getElementById("pontuacao");
const body = document.body;

// mostra resultado
casaElemento.textContent = vencedor.nome;
pontuacaoElemento.textContent = `Pontuação: ${vencedor.pontos}`;

// aplica tema moderno (classe no body)
switch (vencedor.nome) {
  case "Gryffindor":
    body.classList.add("gryffindor");
    break;

  case "Sonserina":
    body.classList.add("sonserina");
    break;

  case "Lufa Lufa":
    body.classList.add("lufaLufa");
    break;

  case "Corvinal":
    body.classList.add("corvinal");
    break;
}

// botão de refazer
function refazerQuiz() {
  localStorage.clear();
  window.location.href = "index.html";
}