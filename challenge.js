class Player {
    constructor (name, playerDeck){
    this.name = name;
    this.deck = playerDeck;
    this.roundsWon = 0;
}
getRemainingCards () {

}
playCard () {
    let cardInPlay =this.deck.pop();
    return cardInPlay;

}
giveThreeCards() {
    let warTributeCards = this.deck.splice(this.deck.length -3, 3);
    return warTributeCards;
}
recieveWinningCards(winningCards){
    this.deck.unshift (...winningCards);
    this.roundsWon ++;
}
}
class Deck {
    constructor (){
        this.cards = this.createDeck();
    }
    createDeck (){
        let suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
        let values = [2,3,4,5,6,7,8,9,10,11,12,13,14];
        let names = ["Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King", "Ace"];
    }

    shuffle(){
        // usew fisher yates shuffling algorithm
        //update this.cards with shuffle deck
    }
    deal (numberOfCards){
        //methos to remove a certain numer of cards from this.cards and return those removed cards
        //return dealCards
        let dealCards = this.cards.splice(0, numberOfCards);
        return dealCards;
    }

}
class Card {
    constructor (rank, name, value) {
        this.rank = rank;
        this.name = name;
        this.value = value;
    }
    printCard (){

    }
}
class WarGame {
    constructor (player1Name, player2Name) {
        this.deck = new Deck ();
        this.deck.shuffleDeck ();
        this.player1 = new Player (player1Name, this.deck.deal(26));
        this.player2 = new Player (player2Name, this.deck.deal(26));
        this.currentRound = 1;
    }

    conductTurn(){
        //method will contain logic for how the turn is conducted in the game
        // it should handle the cards needs from each player
    }

    compareCardValues(){
        //this method compare the cards values themselves
        let p1Card = this.player1.playCard();
        let p2Card = this.player2.playCard();
        if (p1Card.value > p2Card.value){
            this.giveWinnerCards ("player1", [p1Card, p2Card])
        }else if (p1Card.value < p2Card.value){
            this.giveWinnerCards ("player2", [p1Card, p2Card]);
        }else {
            this.prepareForWar();
        }
    }

    prepareForWar(){
        // check to ensure players ahve enough cards for war, if one player does not call this end.Game()
    }

    giveWinnerCards (winnerName, winnerCards){
        this[winnerName].recieveCardsForWinning(winnerCards);
        this.currentRound++;
        if(this.player1.deck.length == 0){
            //
        }

    }

    endGame(winnerName){
        console.log (`The winner is ${this[winnerName].name}! \n Number of Rounds Played: ${this.currentRound}`);

    }
}