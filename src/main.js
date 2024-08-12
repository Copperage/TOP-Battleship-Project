import './styles/style.scss';
import Ship from './ship.js';
import GameBoard from './gameboard.js';
import Player from './player.js';
import Computer from './AI.js';

// Query Selection
const playerBoardDOM = document.querySelector('.player-board');
const computerBoardDOM = document.querySelector('.computer-board');
const playerShipsDOM = document.querySelector('.player-ships');

document.addEventListener('DOMContentLoaded', () => {
	let playerBoard = new GameBoard();
	let enemyBoard = new GameBoard();
	let player = new Player('Player 1');
	let computer = new Computer('Player 2', player, playerBoard);

	displayBoard('player-board');
	displayBoard('computer-board');
});

function displayBoard(boardName) {
	let board = document.querySelector(`.${boardName}`);

	for (let i = 0; i < 10; i++) {
		for (let j = 0; j < 10; j++) {
			let cell = document.createElement('div');
			cell.classList.add('cell');
			cell.setAttribute('data-x', i);
			cell.setAttribute('data-y', j);

			board.appendChild(cell);
		}
	}
}
