const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', function () {
  let turn;
  let card;
  beforeEach(() => {
    turn = new Turn('array', card);
    card = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
  })

  it('Should be a function', () => {
    expect(Turn).to.be.a('function');
  });

  it('Should be an instance of Turn', () => {
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('Should be instatiated with two arguments', () => {
    expect(turn).to.have.property('guess');
    expect(turn).to.have.property('card');
  });

  it('returnGuess method should return player guess', () => {
    expect(turn.returnGuess()).to.equal('array');
  });

  it('returnCard method should return the card', () => {
    expect(turn.returnCard()).to.deep.equal(card);
  });

  it('evlauateGuess method should return true when guess is correct', () => {
    expect(turn.evaluateGuess()).to.equal(true);
  });

  it('evaluateGuess method should return false when guess is incorrect', () => {
    const turn = new Turn('wrong guess here', card);
    expect(turn.evaluateGuess()).to.equal(false);
  });

  it('giveFeedback method should return correct! when right', () => {
    expect(turn.giveFeedback()).to.equal('correct!');
  });

  it('giveFeedback method should return incorrect! when wrong', () => {
    const turn = new Turn('wrong guess here', card);
    expect(turn.giveFeedback()).to.equal('incorrect!');
  });
});