const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Game = require('../src/Game');

describe('Game', function () {
  let game;
  beforeEach(() => {
    game = new Game();
  });

  it('Should be a function', () => {
    expect(Game).to.be.a('function');
  });

  it('Should be an instance of Game', () => {
    expect(game).to.be.an.instanceof(Game);
  });

  it('Should be able to start a new Game', () => {
    game.startGame();
    expect(game.currentRound.deck.cards.length).to.equal(30);
  });

  it('Should track the current round', () => {
    game.startGame();
    expect(game.currentRound).to.be.an.instanceof(Round);
  });

  it('Should populate a deck with cards', () => {
    game.startGame();
    expect(game.currentRound.deck.cards).to.be.an('array');
  });

  it('Should display prompt message at start', () => {
    game.startGame();
    expect(game.printMessage).to.be.a('function');
    expect(game.printQuestion).to.be.a('function');
  });
});
