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

	checkTurn() {
		return this.isTurn;
	}

	attack(x, y, player2, enemyBoard) {
		if (this.checkTurn()) {
			let result = enemyBoard.receiveAttack(x, y);
			this.endTurn(player2);
			return result;
		}
		return false;
	}
}
