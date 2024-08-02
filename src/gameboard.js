import Ship from './ship.js';

class gameBoard {
	constructor() {
		this.ships = [];
		this.missedShots = [];
		this.board = Array.from({ length: 10 }, () => Array(10).fill(null));
	}
	// visualization:
	//[x, x, x, x, x, x, x, x, x, x]
	//[x, x, x, x, x, x, x, x, x, x]
	//[x, x, x, x, x, x, x, x, x, x]
	//[x, x, x, x, x, x, x, x, x, x]
	//[x, x, x, x, x, x, x, x, x, x]
	//[x, x, x, x, x, x, x, x, x, x]
	//[x, x, x, x, x, x, x, x, x, x]
	//[x, x, x, x, x, x, x, x, x, x]
	//[x, x, x, x, x, x, x, x, x, x]
	//[x, x, x, x, x, x, x, x, x, x]

	placeShip(ship, x, y) {
		ship.position = [];

		for (let i = 0; i < ship.length; i++) {
			this.board[x][y + i] = ship;
			ship.position.push([x, y + i]);
		}
		this.ships.push(ship);
	}

	recieveAttack([x, y]) {
		const boardCell = this.board[x][y];
		if (boardCell === null) {
			this.missedShots.push({ x: x, y: y });
		} else if (boardCell instanceof Ship) {
			boardCell.hit();
		}
	}

	missedShotsTracker() {
		return this.missedShots;
	}

	allSunk() {
		return this.ships.every((ship) => ship.isShipSunk());
	}
}

export default gameBoard;
