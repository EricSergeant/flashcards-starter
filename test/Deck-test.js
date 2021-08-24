const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Deck', function () {
  let cards, deck, card1, card2, card3;
  beforeEach(() => {
    cards = [card1, card2, card3];
    deck = new Deck(cards);
    card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    card2 = new Card(2, 'What is a comma-separated list of related values?', ['object', 'array', 'function'], 'array');
    card3 = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
  });

  it('Should be a function', () => {
    expect(Deck).to.be.a('function');
  });

  it('Should be an instance of Deck', () => {
    expect(deck).to.be.an.instanceof(Deck);
  });

})
