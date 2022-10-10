// const assert = require('assert');
// const { get } = require('http');
// // const { types } = require('pg-promise/typescript/pg-subset');
// const TestingFunction = require('../databaseFactory');
// const pgp = require('pg-promise')();

// // we are using a special test database for the tests
// const connectionString = process.env.DATABASE_URL || 'postgresql://greet_unit:testing@localhost:5432/greet_tests';

// const db = pgp(connectionString);

// describe('The basic database web app', function(){

//     beforeEach(async function(){
//         // clean the tables before each test run
//         try {
//             // clean the tables before each test run
//             await db.none('TRUNCATE TABLE user_names RESTART IDENTITY CASCADE;');
//         } catch (err) {
//             console.log(err);
//             throw err;
//         }
//     });

//     it('should show the user that has been greeted', async function(){
        
//         // the Factory Function is called CategoryService
//         let testingfunction  = TestingFunction(db);
//         await testingfunction.namesInDatabase('Dikgang');


//         let getNames = await testingfunction.getNamesInDatabase();
//         let getUserGreeted = getNames[0];
//         // console.log(getUserGreeted);

// // assert.equal([{id:1, users_greeted: 'Dikgang', name_counter: 1}], getNames);
// assert.equal('Dikgang', getUserGreeted.users_greeted);
    
//     });
//     it('should show how many times a user has ben greeted', async function(){
        
//         // the Factory Function is called CategoryService
//         let testingfunction  = TestingFunction(db);
//         await testingfunction.namesInDatabase('Dikgang');
//         await testingfunction.namesInDatabase('Dikgang');


//         let getNames = await testingfunction.getNamesInDatabase();
//         let getUserGreeted = getNames[0];
//         console.log(getUserGreeted);

// // assert.equal([{id:1, users_greeted: 'Dikgang', name_counter: 1}], getNames);
// assert.equal(2, getUserGreeted.name_counter);
    
//     });

//     after(function(){
//         db.$pool.end
//     })
// });