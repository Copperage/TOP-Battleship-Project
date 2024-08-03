import Ship from './ship.js';

export default class GameBoard {
	constructor() {
		this.missedShots = [];
		this.ships = [];
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

	checkIfValidCell(length, x, y) {
		if (x < 0 || x >= 10 || y < 0 || y >= 10 || y + length > 10) {
			return false;
		}
		return true;
	}

	placeShip(ship, x, y) {
		ship.position = [];

		if (this.checkIfValidCell(ship.length, x, y)) {
			for (let i = 0; i < ship.length; i++) {
				this.board[x][y + i] = {
					shipName: ship,
					shipIndex: i,
					hit: false,
				};
				ship.position.push([x, y + i]);
			}
			this.ships.push(ship);
		}
	}

	receiveAttack(x, y) {
		let boardCell = this.board[x][y];

		if (boardCell === null) {
			this.missedShots.push({ x, y });
		} else {
			boardCell.shipName.hit(boardCell.shipIndex);
			boardCell.hit = true;
		}
	}

	getMissedShots() {
		return this.missedShots;
	}

	allSunk() {
		return this.ships.every((ship) => ship.isShipSunk());
	}
}
