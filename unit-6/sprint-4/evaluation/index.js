"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dice = exports.gameController = exports.Ladder = exports.Snake = exports.Board = exports.Player = exports.GameModel = exports.GameEntity = void 0;
var GameEntity;
(function (GameEntity) {
    GameEntity["player"] = "player";
    GameEntity["board"] = "board";
    GameEntity["snake"] = "snake";
    GameEntity["ladder"] = "ladder";
    GameEntity["gameController"] = "gameController";
})(GameEntity || (exports.GameEntity = GameEntity = {}));
var GameModel = /** @class */ (function () {
    function GameModel(entity) {
        this.entity = entity;
        this.id = Math.random();
    }
    return GameModel;
}());
exports.GameModel = GameModel;
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player(name) {
        var _this = _super.call(this, GameEntity.player) || this;
        _this.name = name;
        _this.position = 0;
        return _this;
    }
    Player.prototype.rollDice = function () {
        return Math.floor(Math.random() * 6) + 1;
    };
    Player.prototype.MoveForward = function (steps) {
        this.position += steps;
    };
    Player.prototype.checkSnakeOrLadder = function (board) {
        var callType = board.getCallType(this.position);
        if (callType === 'snake') {
            var snakeTail = board.getSnakeTail(this.position);
            console.log("OOPS! Snake Bite you , GO back to positon ".concat(snakeTail));
            this.position = snakeTail;
        }
        else if (callType === 'ladder') {
            var ladderTop = board.getLadderTop(this.position);
            console.log("Wow!  YOU Got A ladder .Moving forward to position ".concat(ladderTop));
            this.position = ladderTop;
        }
    };
    Player.prototype.punish = function () {
        console.log("".concat(this.name, ", You have been punished ! Move back 2 postions."));
        this.position -= 2;
    };
    Player.prototype.reward = function () {
        console.log("".concat(this.name, ",You have been rewarded ! Move 5 position."));
        this.position += 5;
    };
    return Player;
}(GameModel));
exports.Player = Player;
var Board = /** @class */ (function (_super) {
    __extends(Board, _super);
    function Board(size) {
        var _this = _super.call(this, GameEntity.board) || this;
        _this.size = size;
        _this.snakes = [];
        _this.ladders = [];
        return _this;
    }
    Board.prototype.addSnake = function (snake) {
        this.snakes.push(snake);
    };
    Board.prototype.addLadder = function (ladder) {
        this.ladders.push(ladder);
    };
    Board.prototype.getCallType = function (position) {
        return "normal";
    };
    Board.prototype.getSnakeTail = function (headPosition) {
        return headPosition - 1;
    };
    Board.prototype.getLadderTop = function (startPosition) {
        return startPosition + 1;
    };
    return Board;
}(GameModel));
exports.Board = Board;
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    function Snake(headPosition, tailPosition) {
        var _this = _super.call(this, GameEntity.snake) || this;
        _this.headPosition = headPosition;
        _this.tailPosition = tailPosition;
        return _this;
    }
    return Snake;
}(GameModel));
exports.Snake = Snake;
var Ladder = /** @class */ (function (_super) {
    __extends(Ladder, _super);
    function Ladder(startPosition, endPositon) {
        var _this = _super.call(this, GameEntity.ladder) || this;
        _this.startPosition = startPosition;
        _this.endPosition = endPositon;
        return _this;
    }
    return Ladder;
}(GameModel));
exports.Ladder = Ladder;
var gameController = /** @class */ (function (_super) {
    __extends(gameController, _super);
    function gameController(players, dice, board) {
        var _this = _super.call(this, GameEntity.gameController) || this;
        _this.players = players;
        _this.currentPlayerIndex = 0;
        _this.dice = dice;
        _this.board = board;
        return _this;
    }
    gameController.prototype.nextTurn = function () {
        this.currentPlayerIndex = (this.currentPlayerIndex + 1) % (this.players.length);
        console.log("Next turn for ".concat(this.players[this.currentPlayerIndex].name));
    };
    gameController.prototype.checkWinCondition = function () {
        return false;
    };
    gameController.prototype.displayBoard = function () {
        var _this = this;
        var boardSize = this.board.size;
        var currentPlayer = this.players[this.currentPlayerIndex];
        var playerPosition = Array.from({ length: boardSize }, function (_, index) {
            var cellType = _this.board.getCallType(index);
            var isPlayerHere = _this.players.some(function (player) { return player.position === index; });
            var isCurrentPlayerHere = currentPlayer.position === index;
            if (isCurrentPlayerHere) {
                return "[".concat(currentPlayer.name, "]");
            }
            else if (isPlayerHere) {
                return "[other]";
            }
            else {
                return "[".concat(cellType, "]");
            }
        });
        console.log(playerPosition.join(" "));
    };
    gameController.prototype.handleMove = function (player, steps) {
        console.log("".concat(player.name, " rolled a ").concat(steps, "."));
        player.moveForward(steps);
        player.checkSnakeOrLadder(this.board);
        if (this.checkWinCondition()) {
            console.log("".concat(player.name, " wins! Game Over."));
        }
        else {
            this.displayBoard();
            this.nextTurn();
        }
    };
    return gameController;
}(GameModel));
exports.gameController = gameController;
var Dice = /** @class */ (function () {
    function Dice() {
    }
    Dice.prototype.roll = function () {
        return Math.floor(Math.random() * 6) + 1;
    };
    return Dice;
}());
exports.Dice = Dice;
