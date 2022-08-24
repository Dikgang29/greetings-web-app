let assert = require('assert');
let greeting = require('../greetweb');

describe('the Greetings Function - when enlish is checked', ()=>{
    it('should be able to greet Dikgang in English',()=>{
        const greet = greeting();
        assert.equal('Hello, Dikgang', greet.greetEnglish('Dikgang'));
    });
    it('should send an error message if no name is greeted',()=>{
        const greet = greeting();
        assert.equal('Please enter a name', greet.greetEnglish(''));
    });
    it('should send an error message if a number is called',()=>{
        const greet = greeting();
        assert.equal('Error, Please enter a name NOT a number', greet.greetEnglish(5));
    });
})

describe('the Greetings Function - when sepedi is checked',()=>{
    it('should greet Lethabo in Sepedi with first letter being upper case and the rest lower case',()=>{
        const greet = greeting();
        assert.equal('Dumela, Lethabo',greet.greetSepedi('leThabo'));
    });
    it('should send an error message in Sepedi if no name is called/passed',()=>{
        const greet = greeting();
        assert.equal('Kgopela o tsenye leina',greet.greetSepedi(''));
    });
    it('should send an error message in Sepedi if a number is called and not name',()=>{
        const greet = greeting();
        assert.equal('Phosho, kgopela o tsenye leina e sego nomoro',greet.greetSepedi(1.05));
    });
});

describe('The Greeting Function - when Tsonga is Checked',()=>{
    it('should be able to greet Ntsakelo in Tsonga',()=>{
        const greet  = greeting();
        assert.equal('Minjhani, Ntsakelo',greet.greetTsonga('ntsakelo'));
    });

    it('should send a error message in Tsonga is no name is called',()=>{
        const greet  = greeting();
        assert.equal('Ndza kombela mumanghenelo vito',greet.greetTsonga(''));
    });

    it('should send a error message in Tsonga if a number is called',()=>{
        const greet  = greeting();
        assert.equal('Xihoxo, Mumanghenelo vito a u nomboro',greet.greetTsonga(-875));
    });
})
