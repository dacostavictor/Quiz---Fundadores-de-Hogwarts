const sonserina = Number(localStorage.getItem("sonserina")) || 0;
const gryffindor = Number(localStorage.getItem("gryffindor")) || 0;
const lufaLufa = Number(localStorage.getItem("lufaLufa")) || 0;
const corvinal = Number(localStorage.getItem("corvinal")) || 0;

const resultado = [
  { nome: "Sonserina", pontos: sonserina },
  { nome: "Gryffindor", pontos: gryffindor },
  { nome: "Lufa Lufa", pontos: lufaLufa },
  { nome: "Corvinal", pontos: corvinal },
];

resultado.sort((a, b) => b.pontos - a.pontos);

const vencedor = resultado[0];

const fundador = document.getElementById("fundador");
const pontuacao = document.getElementById("pontuacao");
const imagem = document.getElementById("imagem");
const body = document.body;

pontuacao.textContent = `Pontuação: ${vencedor.pontos}`;

switch (vencedor.nome) {
  case "Gryffindor":
    body.classList.add("gryffindor");
    fundador.textContent = "Godric Gryffindor";
    imagem.src =
      "https://static.wikia.nocookie.net/harrypotter/images/3/31/Founders_gryffindor1.jpg/revision/latest?cb=20180611200439";
    break;

  case "Sonserina":
    body.classList.add("sonserina");
    fundador.textContent = "Salazar Sonserina";
    imagem.src =
      "https://static.wikia.nocookie.net/harrypotter/images/6/60/PM_SalazarSlytherin_Founders.jpg/revision/latest/thumbnail/width/360/height/360?cb=20180611201037";
    break;

  case "Lufa Lufa":
    body.classList.add("lufaLufa");
    fundador.textContent = "Helga Lufa Lufa";
    imagem.src =
      "https://i.redd.it/can-we-all-take-a-moment-to-appreciate-helga-hufflepuff-for-v0-smvbngflm0nd1.jpg?width=372&format=pjpg&auto=webp&s=951c74d5e0913deb2690cb0fb91db7660605c49a";
    break;

  case "Corvinal":
    body.classList.add("corvinal");
    fundador.textContent = "Rowena Corvinal";
    imagem.src =
      "https://static.wikia.nocookie.net/harrypotter/images/1/1c/PM_RowenaRavenclaw_Founders.jpg/revision/latest?cb=20180611200720";
    break;
}

function refazerQuiz() {
  window.location.href = "paginaInicial.html";
}
