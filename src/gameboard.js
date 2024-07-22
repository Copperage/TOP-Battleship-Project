import { Ship } from './ship.js';

class gameBoard {
	constructor() {
		this.ships = [];
	}

	// fill the board
	board = [Array.from({ length: 10 }), () => Array(10).fill(x)];
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

	placeShip(length, x, y) {
		this.ships.push(length, x, y);
	}

	recieveAttack() {}

	missedAttack() {}

	allSunk() {
		return this.ships.every((ship) => ship.isSunk());
	}
}

module.exports = { gameBoard };
