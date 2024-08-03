import Player from '../src/player';
import GameBoard from '../src/gameboard';
import Ship from '../src/ship';

test('Player has a name', () => {
	let player = new Player('Player 1');

	expect(player.name).toBe('Player 1');
});

test('Player ending their turn passes it onto the other player', () => {
	let player = new Player('Player 1');
	let player2 = new Player('Player 2');

	player.endTurn(player2);

	expect(player.isTurn).toBe(false);
	expect(player2.isTurn).toBe(true);
});

test('Player can attack if its their turn', () => {
	let player = new Player('Player 1');
	let player2 = new Player('Player 2');
	let board = new GameBoard();
	let ship = new Ship('Destroyer', 3);

	board.placeShip(ship, 2, 1);
	player.attack(2, 1, player2, board);

	expect(ship.hits[0]).toBe(true);
});

test('After player has attacked, it ends their turn', () => {
	let player = new Player('Player 1');
	let player2 = new Player('Player 2');
	let board = new GameBoard();
	let ship = new Ship('Destroyer', 3);

	board.placeShip(ship, 2, 1);
	player.attack(2, 1, player2, board);

	expect(player.isTurn).toBe(false);
	expect(player2.isTurn).toBe(true);
});
