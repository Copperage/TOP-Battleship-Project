import Ship from './ship.js';

export default class GameBoard {
	constructor() {
		this.missedShots = [];
		this.ships = [];
		this.board = Array.from({ length: 10 }, () => Array(10).fill(null));
		this.attackedCells = new Set();
	}

	// visualization:
	//[null, null, null, null, null, null, null, null, null, null]
	//[null, null, null, null, null, null, null, null, null, null]
	//[null, null, null, null, null, null, null, null, null, null]
	//[null, null, null, null, null, null, null, null, null, null]
	//[null, null, null, null, null, null, null, null, null, null]
	//[null, null, null, null, null, null, null, null, null, null]
	//[null, null, null, null, null, null, null, null, null, null]
	//[null, null, null, null, null, null, null, null, null, null]
	//[null, null, null, null, null, null, null, null, null, null]
	//[null, null, null, null, null, null, null, null, null, null]

	getBoard() {
		return this.board;
	}

	checkIfValidCell(length, x, y) {
		if (x < 0 || x >= 10 || y < 0 || y >= 10 || y + length > 10) {
			return false;
		} else {
			for (let i = 0; i < length; i++) {
				if (this.board[x][y + i] !== null) return false;
			}
		}

		return true;
	}

	placeShip(ship, x, y) {
		ship.position = [];

		if (this.checkIfValidCell(ship.length, x, y)) {
			for (let i = 0; i < ship.length; i++) {
				this.board[x][y + i] = {
					shipName: ship,
					shipIndex: i,
					hit: false,
				};
				ship.position.push([x, y + i]);
			}
			this.ships.push(ship);
		}
	}

	receiveAttack(x, y) {
		let boardCell = this.board[x][y];

		// Using a set to track if the hit is a duplicate
		if (this.attackedCells.has(`${x}, ${y}`)) {
			return false; // Return false because it's already been attacked
		}
		this.attackedCells.add(`${x}, ${y}`); // Add the coordinates to the set for tracking

		// If cell is empty then it's a miss
		if (boardCell === null) {
			this.missedShots.push({ x, y });
			return true; // Return true because an attack was done
		} else {
			// Else its a hit
			boardCell.shipName.hit(boardCell.shipIndex);
			return true;
		}
	}

	getMissedShots() {
		return this.missedShots;
	}

	allSunk() {
		return this.ships.every((ship) => ship.isShipSunk());
	}
}
