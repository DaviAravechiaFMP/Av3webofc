const $startGameButton = document.querySelector(".start-quiz")
const $nextQuestionButton = document.querySelector(".next-question")
const $questionsContainer = document.querySelector(".questions-container")
const $questionText = document.querySelector(".question")
const $answersContainer = document.querySelector(".answers-container")
const $answers = document.querySelectorAll(".answer")

let currentQuestionIndex = 0
let totalCorrect = 0

$startGameButton.addEventListener("click", startGame)
$nextQuestionButton.addEventListener("click", displayNextQuestion)

function startGame() {
  $startGameButton.classList.add("hide")
  $questionsContainer.classList.remove("hide")
  displayNextQuestion()
}

function displayNextQuestion() {
  resetState()
  
  if (questions.length === currentQuestionIndex) {
    return finishGame()
  }

  $questionText.textContent = questions[currentQuestionIndex].question
  questions[currentQuestionIndex].answers.forEach(answer => {
    const newAsnwer = document.createElement("button")
    newAsnwer.classList.add("button", "answer")
    newAsnwer.textContent = answer.text
    if (answer.correct) {
      newAsnwer.dataset.correct = answer.correct
    }
    $answersContainer.appendChild(newAsnwer)

    newAsnwer.addEventListener("click", selectAnswer)
  })
}

function resetState() {
  while($answersContainer.firstChild) {
    $answersContainer.removeChild($answersContainer.firstChild)
  }

  document.body.removeAttribute("class")
  $nextQuestionButton.classList.add("hide")
}

function selectAnswer(event) {
  const answerClicked = event.target;

  // Verifica se está correta e incrementa se necessário
  const isCorrect = answerClicked.dataset.correct === "true";
  if (isCorrect) {
    totalCorrect++;
  }

  // Marca todos os botões como corretos/incorretos
  const allAnswers = $answersContainer.querySelectorAll(".answer");
  allAnswers.forEach(button => {
    button.disabled = true;

    const correct = button.dataset.correct === "true";
    if (correct) {
      button.classList.add("correct");
    } else {
      button.classList.add("incorrect");
    }
  });

  // Mostra botão "Próxima Pergunta"
  $nextQuestionButton.classList.remove("hide");

  // Avança o índice da pergunta
  currentQuestionIndex++;
}



function finishGame() {
  const totalQuestions = questions.length
  const performance = Math.floor(totalCorrect * 100 / totalQuestions)

  let message = ""

  switch (true) {
    case (performance >= 90):
      message = "Excelente :)"
      break
    case (performance >= 70):
      message = "Muito bom :)"
      break
    case (performance >= 50):
      message = "Bom"
      break
    default:
      message = "Pode melhorar :("
  }

  $questionsContainer.innerHTML =
    `
    <p class="final-message">
      Você acertou ${totalCorrect} de ${totalQuestions} questões!
      <span>Resultado: ${message}</span>
    </p>
    <div class="final-buttons">
      <button onclick="window.location.reload()" class="button">Refazer teste</button>
      <button onclick="window.location.href='../index.html'" class="button">Voltar para o início</button>

    </div>
    `
}



const questions = [
  {
    question: "Em que cidade está localizada a Faculdade Municipal de Palhoça?",
    answers: [
      { text: "Florianópolis", correct: false },
      { text: "São José", correct: false },
      { text: "Palhoça", correct: true },
      { text: "Biguaçu", correct: false }
    ]
  },
  {
    question: "Qual é o nome oficial da FMP?",
    answers: [
      { text: "Faculdade Pública de Palhoça", correct: false },
      { text: "Faculdade Municipal de Palhoça", correct: true },
      { text: "Universidade de Palhoça", correct: false },
      { text: "Faculdade Estadual de Palhoça", correct: false }
    ]
  },
  {
    question: "A FMP é uma instituição de ensino:",
    answers: [
      { text: "Federal", correct: false },
      { text: "Estadual", correct: false },
      { text: "Municipal", correct: true },
      { text: "Particular", correct: false }
    ]
  },
  {
    question: "A FMP oferece cursos de:",
    answers: [
      { text: "Ensino Fundamental", correct: false },
      { text: "Ensino Médio", correct: false },
      { text: "Ensino Superior", correct: true },
      { text: "Pós-Doutorado", correct: false }
    ]
  },
  {
    question: "Qual destes é um curso oferecido pela FMP?",
    answers: [
      { text: "Medicina", correct: false },
      { text: "Engenharia Elétrica", correct: false },
      { text: "Análise e Desenvolvimento de Sistemas", correct: true },
      { text: "Física", correct: false }
    ]
  },
  {
    question: "Qual é o site oficial da FMP?",
    answers: [
      { text: "www.fmp.sc.gov.br", correct: true },
      { text: "www.faculdademunicipaldepalhoca.edu.br", correct: false },
      { text: "www.ufsc.br", correct: false },
      { text: "www.fmp.com.br", correct: false }
    ]
  },
  {
    question: "Em que estado está localizada a FMP?",
    answers: [
      { text: "Paraná", correct: false },
      { text: "Rio Grande do Sul", correct: false },
      { text: "Santa Catarina", correct: true },
      { text: "São Paulo", correct: false }
    ]
  },
  {
    question: "A FMP é conhecida por sua qualidade em cursos de:",
    answers: [
      { text: "Saúde", correct: false },
      { text: "Tecnologia", correct: true },
      { text: "Educação Física", correct: false },
      { text: "Agronomia", correct: false }
    ]
  },
  {
    question: "O curso de ADS na FMP tem duração de:",
    answers: [
      { text: "2 anos", correct: false },
      { text: "2 anos e meio", correct: true },
      { text: "3 anos", correct: false },
      { text: "4 anos", correct: false }
    ]
  },
  {
    question: "Quem pode estudar na FMP?",
    answers: [
      { text: "Apenas moradores de Palhoça", correct: false },
      { text: "Apenas quem tem renda baixa", correct: false },
      { text: "Qualquer pessoa aprovada no processo seletivo", correct: true },
      { text: "Somente servidores públicos", correct: false }
    ]
  },
  {
    question: "A FMP cobra mensalidade?",
    answers: [
      { text: "Sim", correct: false },
      { text: "Não", correct: true },
      { text: "Somente em cursos noturnos", correct: false },
      { text: "Somente em cursos online", correct: false }
    ]
  },
  {
    question: "Em que ano a FMP foi fundada?",
    answers: [
      { text: "2003", correct: false },
      { text: "2005", correct: true },
      { text: "2007", correct: false },
      { text: "2009", correct: false }
    ]
  },
  {
    question: "Qual é o sistema de ingresso na FMP?",
    answers: [
      { text: "Vestibular próprio", correct: true },
      { text: "ENEM", correct: false },
      { text: "Sorteio", correct: false },
      { text: "Indicação de professor", correct: false }
    ]
  },
  {
    question: "A FMP possui quais tipos de cursos?",
    answers: [
      { text: "Tecnólogos", correct: true },
      { text: "Licenciaturas", correct: false },
      { text: "Bacharelados", correct: false },
      { text: "Todos os anteriores", correct: false }
    ]
  },
  {
    question: "A FMP pertence a qual poder público?",
    answers: [
      { text: "Federal", correct: false },
      { text: "Estadual", correct: false },
      { text: "Municipal", correct: true },
      { text: "Privado", correct: false }
    ]
  },
  {
    question: "Qual destes é um dos objetivos da FMP?",
    answers: [
      { text: "Lucro privado", correct: false },
      { text: "Expansão de campi internacionais", correct: false },
      { text: "Educação acessível à comunidade", correct: true },
      { text: "Treinamento militar", correct: false }
    ]
  },
  {
    question: "Qual é a sigla da Faculdade Municipal de Palhoça?",
    answers: [
      { text: "FUP", correct: false },
      { text: "FMP", correct: true },
      { text: "FMPA", correct: false },
      { text: "UFMP", correct: false }
    ]
  },
  {
    question: "A FMP é mantida por qual entidade?",
    answers: [
      { text: "Ministério da Educação", correct: false },
      { text: "Governo do Estado", correct: false },
      { text: "Prefeitura de Palhoça", correct: true },
      { text: "Fundação Municipal Autônoma", correct: false }
    ]
  },
  {
    question: "A FMP possui cursos na modalidade:",
    answers: [
      { text: "Somente presencial", correct: false },
      { text: "Somente EAD", correct: false },
      { text: "Presencial e EAD", correct: true },
      { text: "Apenas semipresencial", correct: false }
    ]
  },
  {
    question: "Além da graduação, a FMP também oferece:",
    answers: [
      { text: "Cursos de extensão", correct: true },
      { text: "Mestrado", correct: false },
      { text: "Doutorado", correct: false },
      { text: "Educação infantil", correct: false }
    ]
  }
];

