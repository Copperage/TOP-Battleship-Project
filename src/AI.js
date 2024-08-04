import Player from './player';

export default class Computer extends Player {
	constructor(name, player2, player2Board) {
		super(name, player2Board);
		this.player2 = player2;
		this.isTurn = false;
		this.attackArray = []; // store computers attack coords
	}

	randomAttack() {}
}
