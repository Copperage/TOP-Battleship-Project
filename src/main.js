import Ship from './ship.js';
import GameBoard from './gameboard.js';
import Player from './player.js';
import AI from './AI.js';

// Query Selection
const playerBoardDOM = document.querySelector('.player-board');
const computerBoardDOM = document.querySelector('.computer-board');
const playerShipsDOM = document.querySelector('.player-ships');

// Player Ships
// Enemy Ships
// Board
let playerBoard = new GameBoard();
let enemyBoard = new GameBoard();
// Players
let player = new Player('Player 1');
let computer = new AI('Player 2', player, enemyBoard);
