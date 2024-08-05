import Player from './player';

export default class Computer extends Player {
	constructor(name, enemyPlayer, enemyBoard) {
		super(name, enemyBoard);
		this.enemyPlayer = enemyPlayer;
		this.enemyBoard = enemyBoard;
		this.isTurn = false;
		this.attackArray = []; // store computers attack coords
	}

	getAttackArray() {
		return this.attackArray;
	}

	randomAttack() {
		if (this.checkturn()) {
			let storeObj = { x: undefined, y: undefined };

			while (true) {
				// if checkturn is true
				let randomX = Math.floor(Math.random() * 10);
				let randomY = Math.floor(Math.random() * 10);

				storeObj.x = randomX;
				storeObj.y = randomY;

				if (
					!this.attackArray.some(
						({ x, y }) => x === storeObj.x && y === storeObj.y
					)
				) {
					this.attackArray.push(storeObj);
					this.attack(
						storeObj.x,
						storeObj.y,
						this.enemyPlayer,
						this.enemyBoard
					);
					break;
				}
			}
		}
	}
}
