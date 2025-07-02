// Seleciona os elementos da página
const input = document.querySelector('.login__input');
const button = document.querySelector('.login__button');
const form = document.querySelector('.login-form');

/**
 * Valida o input conforme o usuário digita.
 * Habilita o botão se o nome tiver mais de 3 caracteres.
 */
const validateInput = ({ target }) => {
  if (target.value.length > 3) {
    button.removeAttribute('disabled');
  } else {
    button.setAttribute('disabled', '');
  }
};

/**
 * Manipula o envio do formulário.
 * Salva o nome no localStorage e redireciona para a página do jogo.
 */
const handleSubmit = (event) => {
  event.preventDefault();

  const playerName = input.value.trim();
  localStorage.setItem('player', playerName);

  // Redireciona para a página do jogo
  window.location = 'pages/game.html';
};

// Adiciona os event listeners
input.addEventListener('input', validateInput);
form.addEventListener('submit', handleSubmit);
