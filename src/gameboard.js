import { Ship } from './ship.js';

class gameBoard {
	constructor() {
		this.ships = [];
		this.board = Array.from({ length: 10 }, () => Array(10).fill('x'));
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

	placeShip(ship, position) {
		ship.setPosition(position);
		this.ships.push(ship);
	}

	recieveAttack() {}

	missedAttack() {}

	allSunk() {
		return this.ships.every((ship) => ship.isShipSunk());
	}
}

export default gameBoard;
