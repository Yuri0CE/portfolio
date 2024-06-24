const infGeral = [ // Variável que contém as informações gerais do quiz
    { // Questão 1
        quest: "Qual é o nome do protagonista de TWEWY?",
        alts: ["Neku Sakuraba", "Riku Yoshida", "Sora Sato", "Deku Namizawa"],
        resCorreta: "Neku Sakuraba"
    },
    { // Questão 2
        quest: "Quem é o parceiro de Neku na primeira semana do jogo?",
        alts: ["Shiki Misaki", "Rhyme", "Beat", "'Joshua' Kiryu"],
        resCorreta: "Shiki Misaki"
    },
    { // Questão 3
        quest: "Qual é o nome do jogo que os personagens participam?",
        alts: ["Reaper's Game", "The Harvest", "Death's Playground", "Shibuya's Melody"],
        resCorreta: "Reaper's Game"
    },
    { // Questão 4
        quest: "O que foi tomado de Neku como 'entrada' para o jogo?",
        alts: ["Sua família", "Seu amigo", "Suas memórias", "Suas emoções"],
        resCorreta: "Suas memórias"
    },
    { // Questão 5
        quest: "Qual o 'preço' para a entrada de Shiki no jogo?",
        alts: ["Sua beleza", "Sua personalidade", "O Mr. Mew", "Seu corpo"],
        resCorreta: "Seu corpo"
    },
    { // Questão 6
        quest: "Qual a marca do pino 'Zantetsu'?",
        alts: ["Jupiter of the Monkey", "Mus Rattus", "Pavo Real", "Dragon Couture"],
        resCorreta: "Jupiter of the Monkey"
    },
    { // Questão 7
        quest: "Como conseguir o pino 'Purity Launcher'?",
        alts: ["Evoluindo o pino 'Sexy Beam' com EXP de 'shutdown'", "Evoluindo o pino 'Superfine Beam' com EXP de 'shutdown'", "Evoluindo o pino 'Cutie Beam' com EXP de batalha", "Evoluindo o pino 'Sexy Beam' com EXP de batalha"],
        resCorreta: "Evoluindo o pino 'Sexy Beam' com EXP de 'shutdown'"
    },
    { // Questão 8
        quest: "Qual o nome real do personagem 'Beat'?",
        alts: ["Daichi Sato", "Beat", "Daisuke Nagazora", "Daisukenojo Bito"],
        resCorreta: "Daisukenojo Bito"
    },
    { // Questão 9
        quest: "Como é determinado o(s) vencedor(es) de cada jogo?",
        alts: ["Encontrando o Rio de Shibuya", "Derrotando o 'Mestre do Jogo'", "Acumulando vários pontos", "Obtendo um 'pino' especial"],
        resCorreta: "Acumulando vários pontos"
    },
    { // Questão 10
        quest: "Qual o 'psych' do pino 'Ice Risers'?",
        alts: ["Energy Rounds", "Piercing Pillar", "Shockwave", "Force Rounds"],
        resCorreta: "Piercing Pillar"
    }
];

let questAtual = 0;
let pontuacao = 0;

// Embaralha os array
function embaralhar(array) {
    array.sort(() => Math.random() - 0.5);
}

// Mostrar o quiz
function mostrarQuiz() {
    const elemQuiz = document.getElementById("quiz");
    elemQuiz.innerHTML = "";

    const dataQuestAtual = infGeral[questAtual];

    const card = document.createElement("div");
    card.classList.add("card", "card-transparent", "mb-3");

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const elemQuest = document.createElement("p");
    elemQuest.textContent = dataQuestAtual.quest;

    cardBody.appendChild(elemQuest);

    // Embaralha as alternativas da pergunta atual
    const alternativas = [...dataQuestAtual.alts];
    embaralhar(alternativas);

    alternativas.forEach(resUsuario => {
        const botaoDeRes = document.createElement("button");
        botaoDeRes.type = "button";
        botaoDeRes.classList.add("btn", "btn-outline-light", "btn-block", "mb-2");
        botaoDeRes.textContent = resUsuario;
        botaoDeRes.value = resUsuario;

        botaoDeRes.addEventListener("click", () => {
            verficaResposta(botaoDeRes, botaoDeRes.value);
        });

        cardBody.appendChild(botaoDeRes);
    });

    card.appendChild(cardBody);
    elemQuiz.appendChild(card);
}

// Verifica a resposta selecionada
function verficaResposta(button, resSelecionada) {
    const questaoAtualData = infGeral[questAtual];
    const resCorreta = questaoAtualData.resCorreta;

    if (resSelecionada === resCorreta) {
        button.classList.add("correct-answer");
        pontuacao += 100; // Aumenta a pontuação em 100 pontos para cada resposta correta
    } else {
        button.classList.add("incorrect-answer");
        pontuacao = Math.max(0, pontuacao - 50); // Diminui a pontuação em 50 pontos ao responder errado
    }

    // Atualiza a pontuação
    document.getElementById("pontos").textContent = "Pontos: " + pontuacao;

    // Pequeno delay para passar de pergunta
    setTimeout(() => {
        questAtual++;

        if (questAtual < infGeral.length) {
            mostrarQuiz();
        } else {
            alert("Parabéns, você completou o quiz! A sua pontuação final é de " + pontuacao + " pontos.");
        }
    }, 1500);
}

// Evento para iniciar o quiz
document.addEventListener("DOMContentLoaded", function () {
    embaralhar(infGeral); // Embaralha as perguntas ao carregar a página
    mostrarQuiz();

    const headphoneBotao = document.getElementById("musica");
    const audio = document.getElementById("audio");

    audio.play();

    // Ligar e desligar a música ao clicar nos fones de ouvido
    headphoneBotao.addEventListener("click", function () {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    });
});