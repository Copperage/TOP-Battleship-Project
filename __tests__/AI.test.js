import Computer from '../src/AI';
import Player from '../src/player';
import GameBoard from '../src/gameboard';

test('AI has a name and doesnt start the game with a turn', () => {
	let ai = new Computer('Player 2');

	expect(ai.name).toBe('Player 2');
	expect(ai.isTurn).toBe(false);
});

test('AI attacks when it starts a turn', () => {
	let player = new Player('Player 1');
	let ai = new Computer('Player 2');
	let board = new GameBoard();
	let board2 = new GameBoard();

	player.attack(2, 1, ai, board2);
	ai.randomAttack();

	expect(ai.attackArray().length).toBe(1);
});
