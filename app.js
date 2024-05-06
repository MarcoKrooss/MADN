class Player {
    constructor(id, name, playerCount, score) {
        this.id = id;
        this.name = name;
        this.playerCount = playerCount;
        this.score = score;
    }
}

class Lobby {
    constructor(id, name, password, status, players) {
        this.id = id;
        this.name = name;
        this.password = password;
        this.status = status;
        this.players = players;
    }
}

function createLobby(id, name, password, status, players) {
    return new Lobby(id, name, password, status, players);
}

// createPlayer-Function | 
function createPlayer(id, name, playerCount, score) {
    return new Player(id, name, playerCount, score);
}

function joinLobby(x, y) {
    //TODO: Implement lobby joining function
    //TODO: Player y should join Lobby x
}

function startGame() {
    //TODO: start the game (get lobby on the board)

    //TODO: add online multiplayer functionality
}

function switchPlayer() {
    //TODO: cycle through the player after each playerTurn()
}

function playerTurn() {
    //TODO: player makes turn (role the dice, move player (automatically), if X then player gets 2nd turn)
    let dice1 = roleDice();
    let dice2 = roleDice();
}

function roleDice() {
    // random number 1 - 6
    return Math.ceil(Math.random() * 6);
}

//? later on "CrazyMode" where there are more than 2 dice and numbers from 1-12 or from 1-3/3-6 etc.
//? maybe implement this with powerups?