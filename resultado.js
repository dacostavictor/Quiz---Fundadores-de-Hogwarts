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
const descricao = document.getElementById("descricao");
const body = document.body;

pontuacao.textContent = `Pontuação: ${vencedor.pontos}`;

switch (vencedor.nome) {
  case "Gryffindor":
    body.classList.add("gryffindor");
    fundador.textContent = "Godric Gryffindor";
    descricao.textContent =
      "Você é movido por coragem — mas não aquela coragem impulsiva e sem pensar. A sua vem da disposição de enfrentar o que é difícil, mesmo quando seria mais fácil recuar. Assim como Gryffindor, você acredita que caráter é mais importante do que origem. Para você, qualquer pessoa pode provar seu valor através das próprias atitudes.";
    imagem.src =
      "https://static.wikia.nocookie.net/harrypotter/images/3/31/Founders_gryffindor1.jpg/revision/latest?cb=20180611200439";
    break;

  case "Sonserina":
    body.classList.add("sonserina");
    fundador.textContent = "Salazar Sonserina";
    descricao.textContent =
      "Você joga o jogo com estratégia. Suas escolhas mostram alguém que pensa no longo prazo, valoriza eficiência e sabe que nem sempre o caminho mais óbvio é o melhor. Você entende que poder não é só força — é saber quando e como usar. Assim como Sonserina, você valoriza ambição e determinação. Quando define um objetivo, você encontra um jeito de alcançá-lo, independentemente dos obstáculos.";
    imagem.src =
      "https://static.wikia.nocookie.net/harrypotter/images/6/60/PM_SalazarSlytherin_Founders.jpg/revision/latest/thumbnail/width/360/height/360?cb=20180611201037";
    break;

  case "Lufa Lufa":
    body.classList.add("lufaLufa");
    fundador.textContent = "Helga Lufa Lufa";
    descricao.textContent =
      "Sua força está na consistência e na lealdade. Ao longo do quiz, suas escolhas revelaram alguém que valoriza esforço, paciência e colaboração. Você entende que grandes resultados vêm de dedicação contínua — não de atalhos. Assim como Lufa-Lufa, você acredita que todos merecem uma chance justa. Você não julga rápido — você constrói.";
    imagem.src =
      "https://i.redd.it/can-we-all-take-a-moment-to-appreciate-helga-hufflepuff-for-v0-smvbngflm0nd1.jpg?width=372&format=pjpg&auto=webp&s=951c74d5e0913deb2690cb0fb91db7660605c49a";
    break;

  case "Corvinal":
    body.classList.add("corvinal");
    fundador.textContent = "Rowena Corvinal";
    descricao.textContent =
      "Sua maior força está na mente. Assim como Corvinal, você acredita que o aprendizado é um fim em si mesmo. Resolver problemas com criatividade e raciocínio é o que te diferencia. Enquanto outros agem por impulso, você observa, analisa e encontra a melhor solução — muitas vezes antes mesmo dos outros perceberem o problema.";
    imagem.src =
      "https://static.wikia.nocookie.net/harrypotter/images/1/1c/PM_RowenaRavenclaw_Founders.jpg/revision/latest?cb=20180611200720";
    break;
}

function refazerQuiz() {
  window.location.href = "paginaInicial.html";
}
