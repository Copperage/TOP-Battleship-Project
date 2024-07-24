class Ship {
	constructor(shipName, shipLength) {
		this.name = shipName;
		this.length = shipLength;
		this.hits = 0;
		this.shipSunk = false;
		this.position = [];
	}

	setPosition(position) {
		this.position = position;
	}

	hit() {
		this.hits++;
	}

	isShipSunk() {
		this.shipSunk = this.hits === this.length;
		return this.shipSunk;
	}
}

export default Ship;
