class Deck {
  constructor(cards) {
    this.cards = cards;
    this.deckLength = this.countCards();
  }

  countCards() {
    return this.cards.length;
  }
}

module.exports = Deck;