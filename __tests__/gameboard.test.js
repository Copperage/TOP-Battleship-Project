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
	expect(board.ships).toContainEqual(
		expect.objectContaining({ name: 'Destroyer' })
	);
});

test('Using the coordinates, determine if a ship gets hit or not on the gameboard', () => {
	let newShip = new Ship('Destroyer', 3);
	board.placeShip(newShip, 2, 1);

	board.receiveAttack(2, 1);

	expect(newShip.hits[0]).toBe(true);
});

// test('Check if the ship is rehitting the same area', () => {
// 	let newShip = new Ship('Destroyer', 3);
// 	board.placeShip(newShip, 2, 1);

// 	board.receiveAttack([2, 1]);
// 	board.receiveAttack([2, 1]);

// 	expect(newShip.hits).toBe(1);
// });

// test('Track missed shots so they can be displayed on the gameboard DOM', () => {
// 	let newShip = new Ship('Destroyer', 3);
// 	board.placeShip(newShip, 2, 1);

// 	board.receiveAttack([2, 0]);

// 	expect(board.missedShotsTracker[2][0]).toContainEqual({ x: 2, y: 0 });
// });

// test('Check if all ships are sunk to end the game', () => {
// 	let ship1 = new Ship('Destroyer', 3);
// 	let ship2 = new Ship('Submarine', 3);
// 	let ship3 = new Ship('Battleship', 4);

// 	board.placeShip(ship1, 0, 0);
// 	board.placeShip(ship2, 0, 1);
// 	board.placeShip(ship3, 0, 2);

// 	expect(board.allSunk()).toBe(true);
// });
