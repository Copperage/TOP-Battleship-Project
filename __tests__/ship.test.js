const { Ship } = require('../src/ship');

beforeEach(() => {
	ship = new Ship(3);
});

test('Ship has a length', () => {
	expect(ship.length).toBe(3);
});

test('Ship gets hit', () => {
	ship.hit();
	expect(ship.hits).toBe(1);
});

test('Ship is sunk', () => {
	ship.hit();
	ship.hit();
	ship.hit();
	expect(ship.isSunk()).toBe(true);
});
