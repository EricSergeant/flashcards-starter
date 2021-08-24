const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
    this.startTime = Date.now();
  }

  returnCurrentCard() {
    return this.deck.cards[this.turns];
  }

  takeTurn(guess) {
    const turn = new Turn(guess, this.returnCurrentCard());
    this.turns++;
    if (!turn.evaluateGuess()) {
      this.incorrectGuesses.push(turn.card.id);
    }
    return turn.giveFeedback();
  }

  calculatePercentCorrect() {
    let correct = this.turns - this.incorrectGuesses.length;
    let percentCorrect = (correct / this.turns) * 100;
    return percentCorrect;
  }

  calculateGameTime() {
    // console.log(this.startTime);

  }

  endRound() {
    let finalCorrect = this.turns - this.incorrectGuesses.length;
    let finalPercent = (finalCorrect / this.turns) * 100;
    let time = this.calculateGameTime();
    return `** Round over! ** You answered ${Math.round(finalPercent)}% of the questions correctly! Round time: ${time}`;
  }
}

module.exports = Round;