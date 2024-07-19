const { gameBoard } = require('../src/gameboard');

let board;

beforeEach(() => {
	board = new gameBoard();
});

test('Gameboard is a grid', () => {
	expect(board.board).toBeInstanceOf(Array);
});

test('You can place ships on the gameboard', () => {
	board.placeShip(2, 1);
	expect(board.board[2][1]).not.toBeUndefined();
});
