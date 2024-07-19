class Ship {
	constructor(length) {
		this.length = length;
		this.hits = [];
	}

	hit() {
		this.hits++;
	}

	isSunk() {
		return this.hits >= this.length;
	}
}

module.exports = { Ship };
