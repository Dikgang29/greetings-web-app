// const express = require('express');
// const exphb = require('express-handlebars');
// const bodyParser = require('body-parser');
// const pgp = require('pg-promise')();
// const Greeting = require('../greetweb');


// const TestingFunction = require('../databaseFactory');

// const greeting = Greeting();


// const DATABASE_URL =  process.env.DATABASE_URL || `postgresql://greete_admin:greetings123@localhost:5432/greet`

// const config = {
//     connectionString: DATABASE_URL
// }
// if(process.env.NODE_ENV == 'production'){
//     config.ssl ={
//         rejectUnauthorized: false
//     }
// }
// const db = pgp(config);
// const testingFunction = TestingFunction(db);

// // const testingFunction = TestingFunction();


// module.exports = function RouterTest(){


//     async  function home(req,res){
//         const counter = await testingFunction.getDatabaseCount();
      
        
//           res.render('index',{
//               nameValue: greeting.getGreetMessage().personName,
//               printMessage: greeting.getGreetMessage().message,
//               counter, 
//           });
          
//       }

//      function post (req,res){
//         const name = req.body.inputName;
//         // testingFunction.namesInDatabase(name);
//         const {languages} = req.body;
//         const {inputName} = req.body;
//         // greeting.setGreeting(languages, inputName);
//         if(!languages && !inputName){
//             req.flash('error', 'Please enter a valid name and select a language')
//         } 
//         else if(!inputName){
//             req.flash('error', 'Please enter a valid name');
//         } else if(!languages){
//             req.flash('error', 'Please select a language');
//         }
//         else if(languages, inputName){
//             req.flash('success', 'User has been greeted successfully');
//         testingFunction.namesInDatabase(name);
//         greeting.setGreeting(languages, inputName);
//         }
//         res.redirect(`/`);
//     }
//       return{
//         home,
//         post
//       }
// }