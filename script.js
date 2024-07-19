class Ship {
	constructor(length) {
		this.length = length;
		this.hits = 0;
		this.isSunk = false;
	}

	hit() {}

	isSunk() {}
}

class gameBoard {
	constructor() {
		this.ships = [];
	}

	placeShip(ship, x, y) {
		this.ships.push(ship, x, y);
	}

	recieveAttack() {}

	missedAttack() {}

	isSunk() {}
}

module.exports = { Ship, gameBoard };
