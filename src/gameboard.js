import { Ship } from './ship.js';

class gameBoard {
	constructor() {
		this.ships = [];
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

	recieveAttack(x, y) {
		if (this.board[x][y] === null) {
			return false;
		} else if (this.board[x][y] === ship) {
			return true;
		}
		return false;
	}

	allSunk() {
		return this.ships.every((ship) => ship.isShipSunk());
	}
}

export default gameBoard;
