let assert = require('assert');
let greeting = require('../greetweb');

describe('the Greetings Function - when enlish is checked', ()=>{
    it('should be able to greet Dikgang in English',()=>{
        const greet = greeting();
        greet.setGreeting('english', 'Dikgang');
        assert.equal('Hello, Dikgang', greet.getGreetMessage().message, greet.getGreetMessage().personName);
    });
describe('the Greetings Function - when sepedi is checked', ()=>{

    it('should be able to greet Dikgang in Sepedi',()=>{
        const greet = greeting();
        greet.setGreeting('sepedi', 'Dikgang');
        assert.equal('Dumela, Dikgang', greet.getGreetMessage().message, greet.getGreetMessage().personName);
    });
});

describe('the Greetings Function - when Tsonga is checked', ()=>{

    it('should be able to greet Dikgang in Tsonga',()=>{
        const greet = greeting();
        greet.setGreeting('tsonga', 'Dikgang');
        assert.equal('Minjhani, Dikgang', greet.getGreetMessage().message, greet.getGreetMessage().personName);
    });
});



})
