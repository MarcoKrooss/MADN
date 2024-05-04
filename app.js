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
    let lobby = new Lobby(id, name, password, status, players)
}

function initPlayer() {

}

function startGame() {

}

function switchPlayer() {

}

function roleDice() {
    let dice = Math.ceil(Math.random() * 6);
}

function playerTurn() {

}