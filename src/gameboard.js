import { Ship } from './ship.js';

class gameBoard {
	constructor() {
		this.ships = [];
		this.board = [Array.from({ length: 10 }), () => Array(10).fill(x)];
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

	// recieveAttack(hitx, hity) {
	// 	const currentStatus = this.board[hitx][hity];

	// 	// if its an empty space, return false
	// 	if (currentStatus === 'x') return false;
	// 	// if its already been hit, return false
	// 	if (currentStatus.ship.tiles[currentStatus.shipPos].hit) return false;
	// 	// if it hits a ship, return true
	// 	currentStatus.ship.hit();
	// 	currentStatus.hit = true;

	// 	return true;
	// }

	missedAttack() {}

	allSunk() {
		return this.ships.every((ship) => ship.isShipSunk());
	}
}

export default gameBoard;
