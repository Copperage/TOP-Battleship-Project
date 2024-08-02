import gameBoard from '../src/gameboard';
import Ship from '../src/ship';

let board;

// Board Init

beforeEach(() => {
	board = new gameBoard();
});

test('Gameboard is a grid', () => {
	expect(board.board).toBeInstanceOf(Array);
});

test('Gameboard is 10x10', () => {
	expect(board.board.length).toBe(10);
	expect(board.board[0].length).toBe(10);
});

// Place Ships tests

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

test('Using the coordinates, determine if a ship gets hit or not on the gameboard', () => {
	let newShip = new Ship('Destroyer', 3);
	board.placeShip(newShip, 2, 1);

	board.receiveAttack(2, 1);
	board.receiveAttack(2, 0);

	expect(board.board[2][0]).toBe(null);
	expect(newShip.hits[0]).toBe(true);
});

test('Track missed shots so they can be displayed on the gameboard DOM', () => {
	let newShip = new Ship('Destroyer', 3);
	board.placeShip(newShip, 2, 1);

	board.receiveAttack(2, 0);
	board.receiveAttack(3, 0);

	expect(board.missedShotsTracker()).toEqual([
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
