const { Ship, gameBoard } = require('./script');

test('You can place ships on the gameboard'),
	() => {
		const gameBoard = new gameBoard();
		const ship = new Ship(2);

		gameBoard.placeShip(ship, 0, 0);
		expect(gameBoard.board[0][0]).toBe(ship);

		gameBoard.placeShip(new Ship(2), 0, 1);
		expect(gameBoard.board[0][1]).toBeInstanceOf(Ship);
	};
