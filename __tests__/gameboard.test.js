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
	expect();
});

test('Track missed shots so they can be displayed on the gameboard DOM', () => {
	expect();
});

test('Check if all ships are sunk to end the game', () => {
	board.ships = [new Ship(3), new Ship(3), new Ship(3)];

	board.ships[0].hits = 3;
	board.ships[1].hits = 3;
	board.ships[2].hits = 3;

	expect(board.allSunk()).toBe(true);
});
