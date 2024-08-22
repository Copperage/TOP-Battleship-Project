import './styles/style.scss';
import Ship from './ship.js';
import GameBoard from './gameboard.js';
import Player from './player.js';
import Computer from './AI.js';

// Query Selection
const carrierDOM = document.querySelector('#carrier');
const battleshipDOM = document.querySelector('#battleship');
const destroyerDOM = document.querySelector('#destroyer');
const submarineDOM = document.querySelector('#submarine');
const patrolBoatDOM = document.querySelector('#patrol-boat');

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

// Placed Ships Tracker
let placedShips = 0;

// AI Ships
let aiCarrier = new Ship('Carrier', 5);
let aiBattleship = new Ship('Battleship', 4);
let aiDestroyer = new Ship('Destroyer', 3);
let aiSubmarine = new Ship('Submarine', 3);
let aiPatrolBoat = new Ship('Patrol Boat', 2);

// playerBoard.placeShip(carrier, 0, 2);
// playerBoard.placeShip(battleship, 2, 1);
// playerBoard.placeShip(destroyer, 3, 6);
// playerBoard.placeShip(submarine, 6, 2);
// playerBoard.placeShip(patrolBoat, 8, 6);

dragShips(carrierDOM);
dragShips(battleshipDOM);
dragShips(destroyerDOM);
dragShips(submarineDOM);
dragShips(patrolBoatDOM);

placeRandomAiShip(aiCarrier);
placeRandomAiShip(aiBattleship);
placeRandomAiShip(aiDestroyer);
placeRandomAiShip(aiSubmarine);
placeRandomAiShip(aiPatrolBoat);

displayBoard('player-board', playerBoard);
displayBoard('computer-board', enemyBoard);
updateBoard('player-board', playerBoard);
updateBoard('computer-board', enemyBoard);

resetGame();

function placeRandomAiShip(ship) {
	// take the ai ship variables and randomize their position between 0 and 10 on the grid
	let placed = false;

	while (!placed) {
		let row = Math.floor(Math.random() * 10);
		let column = Math.floor(Math.random() * 10);

		if (enemyBoard.checkIfValidCell(ship.length, row, column)) {
			enemyBoard.placeShip(ship, row, column);
			placed = true;
		}
	}
}

function shipAttacks(element) {
	let x = parseInt(element.getAttribute('data-x'));
	let y = parseInt(element.getAttribute('data-y'));
	let modal = document.querySelector('.bg-blur');
	let winnerText = document.querySelector('.winner');

	if (
		element.classList.contains('hit') ||
		element.classList.contains('missed')
	) {
		return;
	}

	player.attack(x, y, computer, enemyBoard);
	updateBoard('computer-board', enemyBoard);

	if (enemyBoard.allSunk()) {
		modal.classList.remove('hidden');
		winnerText.textContent = 'You win!';
	}

	computer.randomAttack();
	updateBoard('player-board', playerBoard);

	if (playerBoard.allSunk()) {
		modal.classList.remove('hidden');
		winnerText.textContent = 'You lose...';
	}
}

function resetGame() {
	const reloadButton = document.querySelector('.retry');

	reloadButton.addEventListener('click', () => {
		location.reload();
	});
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
			} else if (boardName === 'player-board') {
				cell.addEventListener('dragover', (e) => {
					e.preventDefault();
				});
				cell.addEventListener('drop', dropShip);
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

function dragShips(element) {
	element.addEventListener('dragstart', (e) => {
		e.dataTransfer.setData('text/plain', e.target.id);
	});
}

function dropShip(e) {
	e.preventDefault();
	// get the class name of the ship that was dropped
	let data = e.dataTransfer.getData('text');
	// get coords
	let x = parseInt(e.target.getAttribute('data-x'));
	let y = parseInt(e.target.getAttribute('data-y'));

	switch (data) {
		case 'carrier':
			playerShipDrag(carrier, x, y);
			break;
		case 'battleship':
			playerShipDrag(battleship, x, y);
			break;
		case 'destroyer':
			playerShipDrag(destroyer, x, y);
			break;
		case 'submarine':
			playerShipDrag(submarine, x, y);
			break;
		case 'patrol-boat':
			playerShipDrag(patrolBoat, x, y);
			break;
	}
}

function playerShipDrag(ship, x, y) {
	let aiBoardDom = document.querySelector('.computer-board');
	let shipsDom = document.querySelector('.player-ships');

	if (playerBoard.checkIfValidCell(ship.length, x, y)) {
		playerBoard.placeShip(ship, x, y);
		updateBoard('player-board', playerBoard);

		const shipElement = document.querySelector(
			`#${ship.name.toLowerCase().replace(' ', '-')}`
		);

		// remove ship when placed so you dont get duplicates
		if (shipElement) {
			shipElement.parentElement.removeChild(shipElement);
		}

		placedShips++;
	}

	if (placedShips === 5) {
		aiBoardDom.classList.remove('hidden');
		shipsDom.classList.add('hidden');
	}
}

/*
	TO DO LIST 
	-----------------------------
	get board displayed - done
	add ships - done
	add ships to enemy board - done
	make enemy board clickable and record the attack - done
	make sure enemy attacks randomly - done
	add random AI ships - done
	end game when either side ships are fully destroyed - done
	add modal and reset game button - done
	let you drag ships to board - done
	update display so that dragged ships are recorded and game is playable
*/
