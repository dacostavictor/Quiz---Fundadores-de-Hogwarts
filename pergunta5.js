class Personagem {
  #nome;
  #pontos;

  constructor(nome, pontos) {
    this.#nome = nome;
    this.#pontos = pontos;
  }

  ganharPontos(qtd) {
    this.#pontos += qtd;
  }

  getPontos() {
    console.log(`pontuacao de ${this.#nome}: ${this.#pontos}`);
    return this.#pontos;
  }
}

const sonserina = new Personagem(
  "Sonserina",
  Number(localStorage.getItem("sonserina")) || 0,
);

const gryffindor = new Personagem(
  "Gryffindor",
  Number(localStorage.getItem("gryffindor")) || 0,
);

const lufaLufa = new Personagem(
  "Lufa Lufa",
  Number(localStorage.getItem("lufaLufa")) || 0,
);

const corvinal = new Personagem(
  "Corvinal",
  Number(localStorage.getItem("corvinal")) || 0,
);

let qtd;

const questao5 = document.getElementById("questao5");

questao5.addEventListener("submit", (event) => {
  event.preventDefault();

  const respostaSelecionada = document.querySelector(
    'input[name="resposta"]:checked',
  );

  if (!respostaSelecionada) return;

  const resposta = respostaSelecionada.value;

  switch (resposta) {
    case "a":
      qtd = 4;
      gryffindor.ganharPontos(qtd);
      sonserina.ganharPontos(--qtd);
      lufaLufa.ganharPontos(--qtd);
      corvinal.ganharPontos(--qtd);
      break;

    case "b":
      qtd = 4;
      corvinal.ganharPontos(qtd);
      lufaLufa.ganharPontos(--qtd);
      sonserina.ganharPontos(--qtd);
      gryffindor.ganharPontos(--qtd);
      break;

    case "c":
      qtd = 4;
      lufaLufa.ganharPontos(--qtd);
      gryffindor.ganharPontos(--qtd);
      corvinal.ganharPontos(qtd);
      sonserina.ganharPontos(--qtd);
      break;

    case "d":
      qtd = 4;
      sonserina.ganharPontos(qtd);
      corvinal.ganharPontos(--qtd);
      gryffindor.ganharPontos(--qtd);
      lufaLufa.ganharPontos(--qtd);
      break;
  }

  localStorage.setItem("sonserina", sonserina.getPontos());
  localStorage.setItem("gryffindor", gryffindor.getPontos());
  localStorage.setItem("lufaLufa", lufaLufa.getPontos());
  localStorage.setItem("corvinal", corvinal.getPontos());

  window.location.href = "pergunta6.html";
});
