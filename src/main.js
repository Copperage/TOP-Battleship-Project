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
	// Board
	let playerBoard = new GameBoard();
	let enemyBoard = new GameBoard();

	// Player + Computer
	let player = new Player('Player 1');
	let computer = new Computer('Player 2', player, playerBoard);

	// Ships
	let carrier = new Ship('Carrier', 5);
	let battleship = new Ship('Battleship', 4);
	let destroyer = new Ship('Destroyer', 3);
	let submarine = new Ship('Submarine', 3);
	let patrolBoat = new Ship('Patrol Boat', 2);

	// AI Ships
	let aiCarrier = new Ship('Carrier', 5);
	let aiBattleship = new Ship('Battleship', 4);
	let aiDestroyer = new Ship('Destroyer', 3);
	let aiSubmarine = new Ship('Submarine', 3);
	let aiPatrolBoat = new Ship('Patrol Boat', 2);

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

function dragShips(element) {
	element.addEventListener('drag', (e) => {
		e.dataTransfer.setData('text/plain', e.target.className);
	});
}

// get board displayed - done
// add ships - done
// let you drag ships to board
// update display so that dragged ships are recorded
