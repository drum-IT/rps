let playerOneMoveOneType = undefined;
let playerOneMoveOneValue = undefined;
let playerOneMoveTwoType = undefined;
let playerOneMoveTwoValue = undefined;
let playerOneMoveThreeType = undefined;
let playerOneMoveThreeValue = undefined;
let playerTwoMoveOneType = undefined;
let playerTwoMoveOneValue = undefined;
let playerTwoMoveTwoType = undefined;
let playerTwoMoveTwoValue = undefined;
let playerTwoMoveThreeType = undefined;
let playerTwoMoveThreeValue = undefined;

const setPlayerMoves = (player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) => {
  if ((moveOneType !== 'rock' && moveOneType !== 'paper' && moveOneType !== 'scissors') || (moveTwoType !== 'rock' && moveTwoType !== 'paper' && moveTwoType !== 'scissors') || (moveThreeType !== 'rock' && moveThreeType !== 'paper' && moveThreeType !== 'scissors')) {
    return null;
  } else if ((moveOneType === undefined || moveTwoType === undefined || moveThreeType === undefined) || (moveOneValue === undefined || moveTwoValue === undefined || moveThreeValue === undefined) || (moveOneValue < 1 || moveTwoValue < 1 || moveThreeValue < 1) || (moveOneValue > 99 || moveTwoValue > 99 || moveTwoValue > 99) || (moveOneValue + moveTwoValue + moveThreeValue > 99)) {
    return null;
  } else if (player === 'Player One') {
    playerOneMoveOneType = moveOneType;
    playerOneMoveOneValue = moveOneValue;
    playerOneMoveTwoType = moveTwoType;
    playerOneMoveTwoValue = moveTwoValue;
    playerOneMoveThreeType = moveThreeType;
    playerOneMoveThreeValue = moveThreeValue;
  } else if (player === 'Player Two') {
    playerTwoMoveOneType = moveOneType;
    playerTwoMoveOneValue = moveOneValue;
    playerTwoMoveTwoType = moveTwoType;
    playerTwoMoveTwoValue = moveTwoValue;
    playerTwoMoveThreeType = moveThreeType;
    playerTwoMoveThreeValue = moveThreeValue;
  }
};

const getRoundWinner = (round) => {
  if ((round < 1 || round > 3)) {
    return null;
  } else if (round === 1) {
    if (playerOneMoveOneType === undefined || playerOneMoveOneValue === undefined || playerTwoMoveOneType === undefined || playerTwoMoveOneValue === undefined) {
      return null;
    } else if (playerOneMoveOneType === playerTwoMoveOneType) {
      if (playerOneMoveOneValue === playerTwoMoveOneValue) {
        return 'Tie';
      } else if (playerOneMoveOneValue > playerTwoMoveOneValue) {
        return 'Player One';
      } else if (playerOneMoveOneValue < playerTwoMoveOneValue) {
        return 'Player Two';
      }
    } else if (playerOneMoveOneType === 'rock') {
      if (playerTwoMoveOneType === 'scissors') {
        return 'Player One';
      } else if (playerTwoMoveOneType === 'paper') {
        return 'Player Two';
      }
    } else if (playerOneMoveOneType === 'paper') {
      if (playerTwoMoveOneType === 'rock') {
        return 'Player One';
      } else if (playerTwoMoveOneType === 'scissors') {
        return 'Player Two';
      }
    } else if (playerOneMoveOneType === 'scissors') {
      if (playerTwoMoveOneType === 'paper') {
        return 'Player One';
      } else if (playerTwoMoveOneType === 'rock') {
        return 'Player Two';
      }
    }
  } else if (round === 2) {
    if (playerOneMoveTwoType === undefined || playerOneMoveTwoValue === undefined || playerTwoMoveTwoType === undefined || playerTwoMoveTwoValue === undefined) {
      return null;
    } else if (playerOneMoveTwoType === playerTwoMoveTwoType) {
      if (playerOneMoveTwoValue === playerTwoMoveTwoValue) {
        return 'Tie';
      } else if (playerOneMoveTwoValue > playerTwoMoveTwoValue) {
        return 'Player One';
      } else if (playerOneMoveTwoValue < playerTwoMoveTwoValue) {
        return 'Player Two';
      }
    } else if (playerOneMoveTwoType === 'rock') {
      if (playerTwoMoveTwoType === 'scissors') {
        return 'Player One';
      } else if (playerTwoMoveTwoType === 'paper') {
        return 'Player Two';
      }
    } else if (playerOneMoveTwoType === 'paper') {
      if (playerTwoMoveTwoType === 'rock') {
        return 'Player One';
      } else if (playerTwoMoveTwoType === 'scissors') {
        return 'Player Two';
      }
    } else if (playerOneMoveTwoType === 'scissors') {
      if (playerTwoMoveTwoType === 'paper') {
        return 'Player One';
      } else if (playerTwoMoveTwoType === 'rock') {
        return 'Player Two';
      }
    }
  } else if (round === 3) {
    if (playerOneMoveThreeType === undefined || playerOneMoveThreeValue === undefined || playerTwoMoveThreeType === undefined || playerTwoMoveThreeValue === undefined) {
      return null;
    } else if (playerOneMoveThreeType === playerTwoMoveThreeType) {
      if (playerOneMoveThreeValue === playerTwoMoveThreeValue) {
        return 'Tie';
      } else if (playerOneMoveThreeValue > playerTwoMoveThreeValue) {
        return 'Player One';
      } else if (playerOneMoveThreeValue < playerTwoMoveThreeValue) {
        return 'Player Two';
      }
    } else if (playerOneMoveThreeType === 'rock') {
      if (playerTwoMoveThreeType === 'scissors') {
        return 'Player One';
      } else if (playerTwoMoveThreeType === 'paper') {
        return 'Player Two';
      }
    } else if (playerOneMoveThreeType === 'paper') {
      if (playerTwoMoveThreeType === 'rock') {
        return 'Player One';
      } else if (playerTwoMoveThreeType === 'scissors') {
        return 'Player Two';
      }
    } else if (playerOneMoveThreeType === 'scissors') {
      if (playerTwoMoveThreeType === 'paper') {
        return 'Player One';
      } else if (playerTwoMoveThreeType === 'rock') {
        return 'Player Two';
      }
    }
  }
};

const getGameWinner = () => {
  if (playerOneMoveOneType === undefined || playerOneMoveOneValue === undefined || playerTwoMoveOneType === undefined || playerTwoMoveOneValue === undefined || playerOneMoveTwoType === undefined || playerOneMoveTwoValue === undefined || playerOneMoveThreeType === undefined || playerOneMoveThreeValue === undefined || playerTwoMoveOneType === undefined || playerTwoMoveOneValue === undefined || playerTwoMoveTwoType === undefined || playerTwoMoveTwoValue === undefined || playerTwoMoveThreeType === undefined || playerTwoMoveThreeValue === undefined) {
    return null;
  } else {
    let round = 1;
    let playerOneRounds = 0;
    let playerTwoRounds = 0;
    while (round < 4) {
      if (getRoundWinner(round) === 'Player One') {
        playerOneRounds++;
      } else if (getRoundWinner(round) === 'Player Two') {
        playerTwoRounds++;
      }
      round++;
    }
    if (playerOneRounds === playerTwoRounds) {
      return 'Tie';
    } else if (playerOneRounds > playerTwoRounds) {
      return 'Player One';
    } else if (playerOneRounds < playerTwoRounds) {
      return 'Player Two';
    }
  }
};

const setComputerMoves = () => {
  let value = 99;
  const moves = ['rock', 'paper', 'scissors'];
  playerTwoMoveOneType = moves[Math.floor(Math.random() * 3)];
  playerTwoMoveTwoType = moves[Math.floor(Math.random() * 3)];
  playerTwoMoveThreeType = moves[Math.floor(Math.random() * 3)];
  playerTwoMoveOneValue = Math.floor(Math.random() * (value - 1));
  value = value - playerTwoMoveOneValue;
  playerTwoMoveTwoValue = Math.floor(Math.random() * (value - 1));
  value = value - playerTwoMoveTwoValue;
  playerTwoMoveThreeValue = value;
};