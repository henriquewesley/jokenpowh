const result = document.querySelector('.result');
const score = document.querySelector('#score');
const scoreComputer = document.querySelector('#score-computer');

let scoreHumanNumber = 0;
let scoreComputerNumber = 0;

const OPTIONS_GAME = {
  rock: 'rock',
  paper: 'paper',
  scissors: 'scissors'
}

const clickHuman = (humanChoise) => {
  startTheGame(humanChoise, computerTurn());
}

const computerTurn = () => {
  const choises = [OPTIONS_GAME.rock, OPTIONS_GAME.paper, OPTIONS_GAME.scissors];
  const randomNumber = Math.floor(Math.random() * 3);
  return choises[randomNumber];
}

const startTheGame = (human, computer) => {
  console.log(`Human ${human} vs Computer ${computer}`);

  if (human === computer) {
    if (human === OPTIONS_GAME.rock) {
      result.innerHTML = `Empate: &#x1F5FF; &#x270A;&#x1F3FE; &#x1F19A; &#x1F5FF; &#x270A;&#x1F3FE;`;
      result.style.color = '#e79601e2';
    }
    else if (human === OPTIONS_GAME.paper) {
      result.innerHTML = `Empate: &#x1F4C3; &#x1F590;&#x1F3FC; &#x1F19A; &#x1F4C3; &#x1F590;&#x1F3FC;`;
      result.style.color = '#e79601e2';
    }
    else {
      result.innerHTML = `Empate: &#x2702; &#x270C;&#x1F3FF; &#x1F19A; &#x2702; &#x270C;&#x1F3FF;`;
      result.style.color = '#e79601e2';
    }
  }
  else if ((human === OPTIONS_GAME.rock && computer === OPTIONS_GAME.scissors) ||
    (human === OPTIONS_GAME.paper && computer === OPTIONS_GAME.rock) || (human === OPTIONS_GAME.scissors && computer === OPTIONS_GAME.paper)) {
    scoreHumanNumber++;
    score.innerHTML = scoreHumanNumber;
    result.innerHTML = `&#x1F60E; Você ganhou &#x1F60E;`;
    result.style.color = '#2e3fd5';
  }
  else {
    scoreComputerNumber++;
    scoreComputer.innerHTML = scoreComputerNumber;
    result.innerHTML = `&#x1F614; Você perdeu &#x1F614;`;
    result.style.color = '#ff0000';
  }
}