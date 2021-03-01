const Manager = require('../lib/Manager');

describe('Manager class', () => {


    describe('constructor and getter methods', () => {
        const manager = new Manager('Harvey Specter', 007, 'Specter007@fakemail.com', '1025');
        expect(manager.getName().toBe('Harvey Specter'));
        expect(manager.getId().toBe(007));
        expect(manager.getEmail().toBe('Specter007@fakemail.com'));
        expect(manager.getOfficeNumber().toBe('1025'));
        expect(manager.getRole().toBe('Manager'));
    });
})