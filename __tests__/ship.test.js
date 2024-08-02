import Ship from '../src/ship.js';

let ship;

beforeEach(() => {
	ship = new Ship('Destroyer', 3);
});

test('Ship has the correct name and length', () => {
	let ship = new Ship('Destroyer', 3);
	expect(ship.name).toBe('Destroyer');
	expect(ship.length).toBe(3);
});

// test('Ship gets hit', () => {
// 	ship.hit(1);
// 	expect(ship.hits[1]).toBe(true);
// });

// test('Ship is sunk', () => {
// 	ship.hit(0);
// 	ship.hit(1);
// 	ship.hit(2);
// 	expect(ship.isShipSunk()).toBe(true);
// });
