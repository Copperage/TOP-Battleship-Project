const { default: expect } = require('expect');
const { Ship } = require('../src/ship');

beforeEach(() => {
	ship = new Ship(3);
});

test('Ship has a length', () => {
	expect(ship.length).toBe(3);
});

test('Ship gets hit', () => {
	ship.hit(1);
	expect(ship.hits).toBe(1);
});

test('Ship is sunk', () => {
	ship.hit(0);
	ship.hit(1);
	ship.hit(2);
	expect(ship.isSunk()).toBe(true);
});
