const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

class Game {
  constructor() {
    this.currentRound;
  }

  startGame() {
    let cards = [];
    prototypeQuestions.forEach(cardObj => {
      let eachCard = new Card(cardObj.id, cardObj.question,
        cardObj.answers, cardObj.correctAnswer);
      cards.push(eachCard);
    });

    let deck = new Deck(cards);
    let round = new Round(deck);
    this.currentRound = round;
    this.printMessage(deck);
    this.printQuestion(round);
  }

  printMessage(deck) {
    // eslint-disable-next-line no-console
    console.log(`Welcome to FlashCards! 
    You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
    util.main(round);
  }
}

module.exports = Game;