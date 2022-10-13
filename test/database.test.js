const assert = require('assert');
const { count } = require('console');
const { get } = require('http');
// const { types } = require('pg-promise/typescript/pg-subset');
const TestingFunction = require('../databaseFactory');
const pgp = require('pg-promise')();

// we are using a special test database for the tests
const connectionString = process.env.DATABASE_URL || 'postgresql://greet_unit:testing@localhost:5432/greet_tests';

const db = pgp(connectionString);

describe('The basic database web app', function(){

    beforeEach(async function(){
        // clean the tables before each test run
        try {
            // clean the tables before each test run
            await db.none('TRUNCATE TABLE user_names RESTART IDENTITY CASCADE;');
        } catch (err) {
            console.log(err);
            throw err;
        }
    });

    it('should show the user that has been greeted', async function(){
        
        // the Factory Function is called CategoryService
        let testingfunction  = TestingFunction(db);
        await testingfunction.namesInDatabase('Dikgang');


        let getNames = await testingfunction.getNamesInDatabase();
        let getUserGreeted = getNames[0];
        // console.log(getUserGreeted);

// assert.equal([{id:1, users_greeted: 'Dikgang', name_counter: 1}], getNames);
assert.equal('Dikgang', getUserGreeted.users_greeted);
    
    });
    it('should show how many times a user has ben greeted', async function(){
        
        // the Factory Function is called CategoryService
        let testingfunction  = TestingFunction(db);
        await testingfunction.namesInDatabase('Dikgang');
        await testingfunction.namesInDatabase('Dikgang');


        let getNames = await testingfunction.getNamesInDatabase();
        let getUserGreeted = getNames[0];
assert.equal(2, getUserGreeted.name_counter);
    
    });
   
    it('should show all users', async function(){
        
        let testingfunction  = TestingFunction(db);
        await testingfunction.namesInDatabase('Boitumelo');
        await testingfunction.namesInDatabase('Boitumelo');
        await testingfunction.namesInDatabase('Tshegofatso');
        await testingfunction.namesInDatabase('Kaboentle');

        let getNames = await testingfunction.getNamesInDatabase();
    
assert.deepEqual([{id:1, users_greeted: 'Boitumelo', name_counter:2},
{id:2, users_greeted: 'Tshegofatso', name_counter:1},
{id:3, users_greeted: 'Kaboentle', name_counter:1}
], getNames);
    
    });
    it('should return the count', async function(){
        
        let testingfunction  = TestingFunction(db);
        await testingfunction.namesInDatabase('Boitumelo');
        await testingfunction.namesInDatabase('Tshegofatso');
        await testingfunction.namesInDatabase('Kaboentle');


        let getCount = await testingfunction.getDatabaseCount();
        const theCount = getCount[0];

assert.equal('3', theCount);
    
    });
//     it('should reset the count/ delete from the table', async function(){
        
//         let testingfunction  = TestingFunction(db);
//         await testingfunction.namesInDatabase('Boitumelo');
//         await testingfunction.namesInDatabase('Tshegofatso');
//         await testingfunction.namesInDatabase('Kaboentle');

//          await testingfunction.deleteAll();
//         let getCount = await testingfunction.getDatabaseCount();
//         let theCount = getCount[0];
        

// assert.equal('0', theCount);
    
//     });
   

    after(function(){
        db.$pool.end
    })
});