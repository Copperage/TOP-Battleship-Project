class gameBoard {
	constructor() {
		this.ships = [];
	}

	board = [Array.from({ length: 10 }), () => Array(10).fill(null)];

	placeShip(ship, x, y) {
		this.ships.push(ship, x, y);
	}

	recieveAttack() {}

	missedAttack() {}

	isSunk() {}
}

module.exports = { gameBoard };
