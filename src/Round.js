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
    let percent = (correct / this.turns) * 100;
    return `You got ${Math.round(percent)}% correct!`;
  }

  endRound() {
    let finalCorrect = this.turns - this.incorrectGuesses.length;
    let finalPercent = (finalCorrect / this.turns) * 100;
    return `** Round over! ** You answered ${Math.round(finalPercent)}% of the questions correctly!`;
  }
}

module.exports = Round;