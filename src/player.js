export default class Player {
	constructor(name) {
		this.name = name;
		this.isTurn = true;
	}

	endTurn(player2) {
		if (this.isTurn === true) {
			this.isTurn = false;
			player2.startTurn();
		}
	}

	startTurn() {
		if (this.isTurn === false) {
			this.isTurn = true;
		}
	}

	attack(x, y, player2, player2Board) {
		if (this.isTurn === true) {
			player2Board.receiveAttack(x, y);
			this.endTurn(player2);
		}
	}
}
