export enum GameEntity{
    player="player",
    board = "board",
    snake= "snake",
    ladder = "ladder",
    gameController = 'gameController',
}

type GameEntityMapping= |{entity :GameEntity.player; type:IPlayer;}
 |{entity :GameEntity.board; type:IBoard;} 
 |{entity:GameEntity.snake; type:ISnake;}
 |{entity:GameEntity.ladder; type:ILadder}
 |{entity:GameEntity.gameController; type:IGameController};

interface IModel{
    entity :GameEntity;
    id:number;
}

export abstract class GameModel implements IModel{
    entity: GameEntity;
    id:number;
    constructor(entity:GameEntity){
        this.entity=entity;
        this.id=Math.random();
    }
}

interface IPlayer extends IModel{
    name :string;
    position:number;
    rollDice():number;
    moveForward(steps:number):void;
    checkSnakeOrLadder(board:IBoard):void;
    punish():void;
    reward():void;
    getCurrentPosition():number;
}

export class Player extends GameModel implements IPlayer{
    name: string;
    position: number;
    constructor(name:string){
        super(GameEntity.player);
        this.name =name;
        this.position=0;
    }

    rollDice(): number {
        return Math.floor(Math.random()*6)+1;
    }
    MoveForward(steps:number):void{
        this.position+=steps;
    }

    checkSnakeOrLadder(board: IBoard): void {
        const callType=board.getCallType(this.position);

        if(callType==='snake'){
            const snakeTail=board.getSnakeTail(this.position);
            console.log(`OOPS! Snake Bite you , GO back to positon ${snakeTail}`);
            this.position=snakeTail;
        }else if(callType==='ladder'){
            const ladderTop= board.getLadderTop(this.position);
            console.log(`Wow!  YOU Got A ladder .Moving forward to position ${ladderTop}`);
            this.position=ladderTop;
        }
    }
    punish(): void {
         console.log(`${this.name}, You have been punished ! Move back 2 postions.`);
         this.position-=2;
    }

    reward(): void {
        console.log(`${this.name},You have been rewarded ! Move 5 position.`);
        this.position+=5;
    }
}

interface IBoard extends IModel{
    size: number;
    snakes:ISnake[];
    ladders:ILadder[];
    addSnake(snake:ISnake):void;
    addLadder(ladder:ILadder):void;
    getCallType(position:number);string;
    getSnakeTail(headPosition:number):number;
    getLadderTop(startPosition:number):number;
}

export class Board extends GameModel implements IBoard{
    size:number;
    snakes: ISnake[];
    ladders:ILadder[];

    constructor(size:number){
        super(GameEntity.board);
        this.size=size;
        this.snakes=[];
        this.ladders=[];
    }

    addSnake(snake: ISnake): void {
        this.snakes.push(snake);
    }

    addLadder(ladder: ILadder): void {
        this.ladders.push(ladder);
    }
    getCallType(position: number) {
        return "normal";
    }

    getSnakeTail(headPosition: number): number {
        return headPosition-1;
    }

    getLadderTop(startPosition: number): number {
        return startPosition+1;
    }

}

interface ISnake extends IModel{
    headPosition:number;
    tailPosition:number;
}

export class Snake extends GameModel implements ISnake{
    headPosition: number;
    tailPosition: number;

    constructor(headPosition:number, tailPosition:number){
        super(GameEntity.snake);
        this.headPosition=headPosition;
        this.tailPosition=tailPosition;
    }
}

interface ILadder extends IModel{
    startPosition:number;
    endPosition:number;

}

export class Ladder extends GameModel implements ILadder{
  startPosition: number;
  endPosition: number;

  constructor(startPosition:number,endPositon:number){
    super(GameEntity.ladder);
    this.startPosition=startPosition;
    this.endPosition=endPositon;
  }
}

interface IGameController extends IModel{
    players:IPlayer[];
    currentPlayerIndex:number;
    dice:InputDeviceInfo;
    board:IBoard;
    nextTurn():void;
    checkWinCondition():boolean;
    displayBoard():void;
    // handleMove(player:IPlayer,steps:number);
}

export class gameController extends GameModel implements IGameController{
    players: IPlayer[];
    currentPlayerIndex: number;
    dice:InputDeviceInfo;
    board:IBoard;

    constructor(players:IPlayer[],dice:InputDeviceInfo, board:IBoard){
        super(GameEntity.gameController);
        this.players=players;
        this.currentPlayerIndex=0;
        this.dice=dice;
        this.board=board;
    }

    nextTurn(): void {
        this.currentPlayerIndex=(this.currentPlayerIndex+1)%(this.players.length);
        console.log(`Next turn for ${this.players[this.currentPlayerIndex].name}`);
    }
    checkWinCondition(): boolean {
        return false;
    }
    displayBoard(): void {
        const boardSize=this.board.size;
        const currentPlayer=this.players[this.currentPlayerIndex];
        const playerPosition:string[]= Array.from({length:boardSize},(_,index)=>{
            const cellType=this.board.getCallType(index);
            const isPlayerHere=this.players.some(player=>player.position===index);
            const isCurrentPlayerHere = currentPlayer.position===index;

            if(isCurrentPlayerHere){
                return `[${currentPlayer.name}]`
            }else if(isPlayerHere){
                return `[other]`;
            }else{
                return `[${cellType}]`;
            }
        });
        console.log(playerPosition.join(" "));
    }
    handleMove(player: IPlayer, steps: number) {
        console.log(`${player.name} rolled a ${steps}.`);

        player.moveForward(steps);

        player.checkSnakeOrLadder(this.board);

        if(this.checkWinCondition()){
            console.log(`${player.name} wins! Game Over.`)
        }else{
            this.displayBoard();
            this.nextTurn();
        }
    }
}

interface IDice{
    roll():number;
}

export class Dice implements IDice{
    roll():number{
        return Math.floor(Math.random()*6)+1;
    }
}




