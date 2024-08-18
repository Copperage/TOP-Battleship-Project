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
updateBoard('player-board', playerBoard);
updateBoard('computer-board', enemyBoard);

function shipAttacks(element) {
	let x = parseInt(element.getAttribute('data-x'));
	let y = parseInt(element.getAttribute('data-y'));

	if (
		element.classList.contains('hit') ||
		element.classList.contains('missed')
	) {
		return;
	}

	player.attack(x, y, computer, enemyBoard);
	updateBoard('computer-board', enemyBoard);

	computer.randomAttack();
	updateBoard('player-board', playerBoard);
}

function displayBoard(boardName, boardObj) {
	let board = document.querySelector(`.${boardName}`);
	let boardArray = boardObj.getBoard();

	for (let x = 0; x < 10; x++) {
		for (let y = 0; y < 10; y++) {
			let cell = document.createElement('div');
			cell.classList.add('cell');
			cell.setAttribute('data-x', x);
			cell.setAttribute('data-y', y);

			if (boardArray[x][y] !== null) {
				cell.classList.add('ship');
			}

			if (boardName === 'computer-board') {
				cell.addEventListener('click', (e) => {
					shipAttacks(e.target);
				});
			}

			board.appendChild(cell);
		}
	}
}

function updateBoard(boardName, board) {
	const boardArray = board.getBoard();
	const missedShots = board.getMissedShots();

	// iterate through board
	boardArray.forEach((row, x) => {
		row.forEach((cell, y) => {
			const selectedCell = document.querySelector(
				`.${boardName} [data-x="${x}"][data-y="${y}"]`
			);

			if (cell && cell.shipName) {
				// function to check if shipindex has been hit
				const isHit = cell.shipName.hits[cell.shipIndex];
				selectedCell.classList.toggle('ship', !isHit);
				selectedCell.classList.toggle('hit', isHit);
			}
		});
	});

	missedShots.forEach(({ x, y }) => {
		const selectedCell = document.querySelector(
			`.${boardName} [data-x="${x}"][data-y="${y}"]`
		);

		if (selectedCell) {
			selectedCell.classList.add('missed');
		}
	});
}

// function dragShips(element) {
// 	element.addEventListener('dragstart', (e) => {
// 		e.dataTransfer.setData('text/plain', e.target.className);
// 	});
// }

// function dropShip(e) {
// 	// get the class name of the ship that was dropped
// 	let data = e.dataTransfer.getData('text');
// 	// get coords
// 	let x = parseInt(e.target.getAttribute('data-x'));
// 	let y = parseInt(e.target.getAttribute('data-y'));

// 	switch (data) {
// 		case 'carrier':
// 			// Check if the ship can be placed at the specified coordinates
// 			if (playerBoard.checkIfValidCell(carrier.length, x, y)) {
// 				// If it can be placed, place the ship
// 				playerBoard.placeShip(carrier, x, y);

// 				// Display the updated board
// 				displayBoard('player-board', playerBoard);

// 				// Remove the ship from the list of available ships to place
// 				let ship = document.querySelector(`#${data}`);
// 				addShips.removeChild(ship);
// 			}
// 			break;
// 	}
// }

/*
	get board displayed - done
	add ships - done
	add ships to enemy board - done
	make enemy board clickable and record the attack - done
	make sure enemy attacks randomly - done
	add random AI ships
	let you drag ships to board
	update display so that dragged ships are recorded
*/
