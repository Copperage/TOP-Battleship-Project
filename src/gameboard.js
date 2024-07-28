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
		ship.position = [x, y];
		for (let i = 0; i < ship.length; i++) {
			this.board[x][y + i] = ship;
		}
		this.ships.push(ship);
	}

	recieveAttack(x, y) {
		for (let i = 0; i < this.ships.length; i++) {
			if (this.ships[i].position.includes([x, y])) {
				this.ships[i].hit();
				return true;
			}
			return false;
		}
	}

	allSunk() {
		return this.ships.every((ship) => ship.isShipSunk());
	}
}

export default gameBoard;
