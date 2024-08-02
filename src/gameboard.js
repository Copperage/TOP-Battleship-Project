import Ship from './ship.js';

class gameBoard {
	constructor() {
		this.missedShots = [];
		this.ships = [];
		this.board = Array.from({ length: 10 }, () =>
			Array.from({ length: 10 }, () => null)
		);
	}

	// visualization:
	//[{ shipName: null, hit: false }, ..., { shipName: null, hit: false }]
	//[{ shipName: null, hit: false }, ..., { shipName: null, hit: false }]
	//[{ shipName: null, hit: false }, ..., { shipName: null, hit: false }]
	//[{ shipName: null, hit: false }, ..., { shipName: null, hit: false }]
	//[{ shipName: null, hit: false }, ..., { shipName: null, hit: false }]
	//[{ shipName: null, hit: false }, ..., { shipName: null, hit: false }]
	//[{ shipName: null, hit: false }, ..., { shipName: null, hit: false }]
	//[{ shipName: null, hit: false }, ..., { shipName: null, hit: false }]
	//[{ shipName: null, hit: false }, ..., { shipName: null, hit: false }]
	//[{ shipName: null, hit: false }, ..., { shipName: null, hit: false }]

	placeShip(ship, x, y) {
		ship.position = [];

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

	receiveAttack(x, y) {
		let boardCell = this.board[x][y];

		if (boardCell === null) {
			this.missedShots.push({ x, y });
		} else {
			boardCell.shipName.hit(boardCell.shipIndex);
			boardCell.hit = true;
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
