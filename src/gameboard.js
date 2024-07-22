const { Ship } = require('./ship.js');

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

	placeShip(ship, x, y) {
		this.ships.push(ship);
	}

	recieveAttack() {}

	missedAttack() {}

	allSunk() {
		return this.ships.every((ship) => ship.isShipSunk());
	}
}

module.exports = { gameBoard };
