const { gameBoard } = require('../src/gameboard');
const { Ship } = require('../src/ship');

let board;

beforeEach(() => {
	board = new gameBoard();
});

test('Gameboard is a grid', () => {
	expect(board.board).toBeInstanceOf(Array);
});

test('You can place ships on the gameboard', () => {
	board.placeShip(4, 2, 1);
	expect(board.board[(3, 1)]).not.toBeUndefined();
});

test('Using the coordinates, determine if a ship gets hit or not on the gameboard', () => {
	let newShip = new Ship[(3, 2, 1)]();
	board.recieveAttack(2, 1);
	expect(newShip.hits).toBe(1);
});

test('Track missed shots so they can be displayed on the gameboard DOM', () => {
	expect();
});

test('Check if all ships are sunk to end the game', () => {
	const ship1 = new Ship('Destroyer', 3);
	const ship2 = new Ship('Submarine', 3);
	const ship3 = new Ship('Cruiser', 3);

	board.placeShip(ship1, 0, 0);
	board.placeShip(ship2, 0, 1);
	board.placeShip(ship3, 0, 2);

	ship1.hit();
	ship1.hit();
	ship1.hit();
	ship2.hit();
	ship2.hit();
	ship2.hit();
	ship3.hit();
	ship3.hit();
	ship3.hit();

	expect(board.allSunk()).toBe(true);
});
