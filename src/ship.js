class Ship {
	constructor(shipName, shipLength) {
		this.name = shipName;
		this.length = shipLength;
		this.hits = Array(shipLength).fill(false);
		this.shipSunk = false;
		this.position = [];
	}

	hit(position) {
		if (!this.hits[position]) {
			this.hits[position] = true;
			console.log(`Ship ${this.name} hit at position ${position}`);
		} else {
			console.log(`Ship ${this.name} already hit at position ${position}`);
		}
	}

	isShipSunk() {
		return this.hits.every((hit) => hit === true);
	}
}

export default Ship;
