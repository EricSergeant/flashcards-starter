const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Round = require('../src/Round');

describe('Deck', function () {
  let cards, deck, card1, card2, card3, round;
  beforeEach(() => {
    cards = [card1, card2, card3];
    deck = new Deck(cards);
    card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    card2 = new Card(2, 'What is a comma-separated list of related values?', ['object', 'array', 'function'], 'array');
    card3 = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
    round = new Round(deck);
  });

  it('Should be a function', () => {
    expect(Round).to.be.a('function');
  });

  it('Should be an instance of Round', () => {
    expect(round).to.be.an.instanceof(Round);
  });

  it('returnCurrentCard should be the first card int he deck at start of round', () => {
    expect(round.returnCurrentCard()).to.deep.equal(card1);
  });

  it('takeTurn should update turn count after guess', () => {
    expect(round.turns).to.equal(0);
    round.takeTurn('just some guess here');
    expect(round.turns).to.equal(1);
  });

  it('takeTurn should make the next card the current', () => {
    round.takeTurn('just another guess here');
    expect(round.returnCurrentCard()).to.deep.equal(card2);
  });

  it('takeTurn should store incorrect guess by id', () => {
    round.takeTurn('yet another guess here');
    expect(round.incorrectGuesses).to.deep.equal([1]);
  });

  it('calculatePercentCorrect will return percent of correct guesses', () => {
    round.takeTurn('wrong guess here');
    round.takeTurn('array');
    const correctAverage = round.calculatePercentCorrect();
    expect(correctAverage).to.equal(50);
  });

  it('endRound will print message and percent to console', () => {
    round.takeTurn('some wrong answer here');
    round.takeTurn('array');
    const endMessage = round.endRound();
    expect(endMessage).to.be.a('string');
  });

  it('Should store the start time of the round', () => {
    expect(round.startTime).to.equal(Date.now());
  });

  it('Should be able to calculate total round time', () => {
    expect(round.calculateGameTime).to.be.a('function');
    expect(round.calculateGameTime()).to.be.a('string');
  });

});