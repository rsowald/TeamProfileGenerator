const Engineer = require('../lib/Engineer');

describe('Engineer class', () => {


    it('constructor and getter methods', () => {
        const engineer = new Engineer('John Doe', 458, 'doe458@fakemail.com', 'https://github.com/jdozer');
        expect(engineer.getName()).toEqual('John Doe');
        expect(engineer.getId()).toBe(458);
        expect(engineer.getEmail()).toBe('doe458@fakemail.com');
        expect(engineer.getGitHub()).toBe('https://github.com/jdozer');
        expect(engineer.getRole()).toBe('Engineer');
    });



    it('engineer card', () => {
        const engineer = new Engineer('John Doe', 458, 'doe458@fakemail.com', 'https://github.com/jdozer');
        expect(engineer.getEmployeeCard()).toMatchSnapshot();
    });
})