import './styles/style.scss';
import Ship from './ship.js';
import GameBoard from './gameboard.js';
import Player from './player.js';
import Computer from './AI.js';

// Query Selection
const carrierDOM = document.querySelector('.carrier');
const battleshipDOM = document.querySelector('.battleship');
const destroyerDOM = document.querySelector('.destroyer');
const submarineDOM = document.querySelector('.submarine');
const patrolBoatDOM = document.querySelector('.patrol-boat');

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

	playerBoard.placeShip(carrier, 0, 2);
	playerBoard.placeShip(battleship, 2, 1);
	playerBoard.placeShip(destroyer, 3, 6);
	playerBoard.placeShip(submarine, 6, 2);
	playerBoard.placeShip(patrolBoat, 8, 6);

	enemyBoard.placeShip(aiCarrier, 0, 5);
	enemyBoard.placeShip(aiBattleship, 2, 2);
	enemyBoard.placeShip(aiDestroyer, 4, 1);
	enemyBoard.placeShip(aiSubmarine, 6, 2);
	enemyBoard.placeShip(aiPatrolBoat, 8, 4);

	// dragShips(carrierDOM);
	// dragShips(battleshipDOM);
	// dragShips(destroyerDOM);
	// dragShips(submarineDOM);
	// dragShips(patrolBoatDOM);

	displayBoard('player-board', playerBoard);
	displayBoard('computer-board', enemyBoard);
});

function displayBoard(boardName, boardObj) {
	let board = document.querySelector(`.${boardName}`);

	for (let i = 0; i < 10; i++) {
		for (let j = 0; j < 10; j++) {
			let cell = document.createElement('div');
			cell.classList.add('cell');
			cell.setAttribute('data-x', i);
			cell.setAttribute('data-y', j);

			if (boardObj.board[i][j] !== null) {
				cell.classList.add('ship');
			}

			board.appendChild(cell);
		}
	}
}

// function dragShips(element) {
// 	element.addEventListener('dragstart', (e) => {
// 		e.dataTransfer.setData('text/plain', e.target.className);
// 	});
// }

/*
	get board displayed - done
	add ships - done
	add ships to enemy board - done
	make enemy board clickable and record the attack
	make sure enemy attacks randomly
	let you drag ships to board
	update display so that dragged ships are recorded
*/
