class Player {
    constructor(id, name, figs, score) {
        this.id = id;
        this.name = name;
        this.figs = figs;
        this.score = score;
    }
}

class Lobby {
    constructor(id, name, password, playerCount, status, maxPlayers) {
        this.id = id;
        this.name = name;
        this.password = password;
        this.playerCount = playerCount;
        this.status = status;
        this.maxPlayers = maxPlayers;
    }
}

class Figure {
    constructor(id, player, position) {
        this.id = id;
        this.player = player;
        this.position = position;
    }
}

function createLobby(id, name, password, playerCount, status, maxPlayers) {
    return new Lobby(id, name, password, playerCount, status, maxPlayers);
}

function joinLobby(x, y) {
    //TODO: Implement lobby joining function
    //TODO: Player y should join Lobby x
}

function createPlayer(playerName) {
    // Initialize blank player. Define ID when joining lobby
    let player = new Player(undefined, playerName, [], 0);

    // Give player 4 figures (ID: 0, 1, 2, 3)
    for (let i = 0; i < 4; i++) {
        player.figs.push(new Figure(i, player, 0));
    }

    return player;
}

function startGame() {
    //TODO: start the game (get lobby on the board)

    //TODO: add online multiplayer functionality
}

function switchPlayer() {
    //TODO: cycle through the player after each playerTurn()
}

function playerTurn(player) {
    //TODO: player makes turn (role the dice, move selected player (automatically), if 6 then player gets 2nd turn)
}

function roleDice() {
    return Math.ceil(Math.random() * 6);
}

//? later on "CrazyMode" where there are more than 2 dice and numbers from 1-12 or from 1-3/3-6 etc.
//? maybe implement this with powerups?