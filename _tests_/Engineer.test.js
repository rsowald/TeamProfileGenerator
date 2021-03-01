const Engineer = require('../lib/Engineer');

describe('Engineer class', () => {


    describe('constructor and getter methods', () => {
        const engineer = new Engineer('John Doe', 458, 'doe458@fakemail.com', 'JDoe1976');
        expect(engineer.getName().toBe('John Doe'));
        expect(engineer.getId().toBe(458));
        expect(engineer.getEmail().toBe('doe458@fakemail.com'));
        expect(engineer.getGitHub().toBe('JDoe1976'));
        expect(engineer.getRole().toBe('Engineer'));
    });
})