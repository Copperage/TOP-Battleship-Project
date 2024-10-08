import GameBoard from '../src/gameboard';
import Ship from '../src/ship';

let board;

// Board Init

beforeEach(() => {
	board = new GameBoard();
});

test('Gameboard is a grid', () => {
	expect(board.board).toBeInstanceOf(Array);
});

test('Gameboard is 10x10', () => {
	expect(board.board.length).toBe(10);
	expect(board.board[0].length).toBe(10);
});

// Place Ships tests

describe('checkIfValidCell & placeShip', () => {
	test('You can place ships on the gameboard', () => {
		let newShip = new Ship('Destroyer', 3);

		board.placeShip(newShip, 2, 1);

		expect(newShip.position).toEqual([
			[2, 1],
			[2, 2],
			[2, 3],
		]);

		expect(board.board[2][1].shipName).toBe(newShip);
		expect(board.board[2][2].shipName).toBe(newShip);
		expect(board.board[2][3].shipName).toBe(newShip);
	});

	test('Cant place ship outside of the board', () => {
		let result = board.checkIfValidCell(4, 0, 7, true);
		expect(result).toBe(false);
	});

	test('Cant overlap two ships together', () => {
		let newShip = new Ship('Destroyer', 3);
		board.placeShip(newShip, 0, 0);
		let result = board.checkIfValidCell(4, 0, 1, true);
		expect(result).toBe(false);
	});
});

test('Using the coordinates, determine if a ship gets hit or not on the gameboard', () => {
	let newShip = new Ship('Destroyer', 3);
	board.placeShip(newShip, 2, 1);

	board.receiveAttack(2, 1);
	board.receiveAttack(2, 0);

	expect(board.board[2][0]).toBe(null);
	expect(newShip.hits[0]).toBe(true);
});

test('Attacking cell multiple times returns false', () => {
	expect(board.receiveAttack(4, 4)).toBe(true);
	expect(board.getMissedShots()).toContainEqual({ x: 4, y: 4 });

	expect(board.receiveAttack(4, 4)).toBe(false);

	expect(board.getMissedShots().length).toBe(1);
	expect(board.getMissedShots()).toContainEqual({ x: 4, y: 4 });
});

test('Track missed shots so they can be displayed on the gameboard DOM', () => {
	let newShip = new Ship('Destroyer', 3);
	board.placeShip(newShip, 2, 1);

	board.receiveAttack(2, 0);
	board.receiveAttack(3, 0);

	expect(board.getMissedShots()).toEqual([
		{ x: 2, y: 0 },
		{ x: 3, y: 0 },
	]);
});

test('Check if all ships are sunk to end the game', () => {
	let ship1 = new Ship('Destroyer', 3);
	let ship2 = new Ship('Submarine', 3);

	board.placeShip(ship1, 2, 1);
	board.placeShip(ship2, 3, 1);

	board.receiveAttack(2, 1);
	board.receiveAttack(2, 2);
	board.receiveAttack(2, 3);
	board.receiveAttack(3, 1);
	board.receiveAttack(3, 2);
	board.receiveAttack(3, 3);

	expect(board.allSunk()).toBe(true);
});
