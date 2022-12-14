class Game {
    constructor (){
        this.board = new Board();
        this.players = this.createPlayers();
        this.ready = false;
    };


/** 
 * Creates two player objects
 * @return  {Array}    An array of two Player objects.
 */

    createPlayers() {
        const players = [new Player('Player 1', '#e15258', 1, true),
                         new Player('Player 2', '#e59a13', 2)];
       return players;
    }

/**
 * Returns active player.
 * @return (Object) player - The active player.
 */
     get activePlayer(){
        return this.players.find(player => player.active);
    }


/**
 * Initializes game.
 */

    startGame(){
        this.board.drawHTMLBoard();
        this.activePlayer.activeToken.drawHTMLToken();
        this.ready = true;


    }


}
