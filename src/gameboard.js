import Ship from './ship.js';

class gameBoard {
	constructor() {
		this.ships = [];
		this.missedShots = [];
		this.board = Array.from({ length: 10 }, () => Array(10).fill(null));
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

	placeShip(ship, x, y) {
		ship.position = [];

		for (let i = 0; i < ship.length; i++) {
			this.board[x][y + i] = ship;
			ship.position.push([x, y + i]);
		}
		this.ships.push(ship);
	}

	receiveAttack(x, y) {
		if (this.board[x][y] === null) {
			this.missedShots.push({ x: x, y: y });
		} else {
				const shipIndex = this.board[y][x].shipIndex;
				const ship = this.ships.find((ship) => ship.shipIndex === shipIndex);
				
				ship.hit(shipIndex);
			  }
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
