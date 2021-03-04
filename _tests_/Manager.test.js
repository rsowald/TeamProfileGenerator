const Manager = require('../lib/Manager');

describe('Manager class', () => {


    it('constructor and getter methods', () => {
        const manager = new Manager('Harvey Specter', 4598, 'Specter007@fakemail.com', '1025');
        expect(manager.getName()).toBe('Harvey Specter');
        expect(manager.getId()).toBe(4598);
        expect(manager.getEmail()).toBe('Specter007@fakemail.com');
        expect(manager.getOfficeNumber()).toBe('1025');
        expect(manager.getRole()).toBe('Manager');
    });
})