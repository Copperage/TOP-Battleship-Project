export default class Ship {
	constructor(shipName, shipLength) {
		this.name = shipName;
		this.length = shipLength;
		this.hits = Array(shipLength).fill(false);
		this.shipSunk = false;
		this.position = [];
	}

	hit(position) {
		this.hits[position] = true;
	}

	isShipSunk() {
		return this.hits.every((hit) => hit === true);
	}
}
