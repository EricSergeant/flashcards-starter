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

});