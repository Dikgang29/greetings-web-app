const express = require('express');
const exphb = require('express-handlebars');
const bodyParser = require('body-parser');
const pgp = require('pg-promise')();
const Greeting = require('./greetweb');
const  flash = require('express-flash');
const session = require('express-session')
// const db = require('./database');
const app = express();
const TestingFunction = require('./databaseFactory')
// const testingFunction = TestingFunction(db);
const greeting = Greeting();
const DATABASE_URL =  process.env.DATABASE_URL || `postgresql://greete_admin:greetings123@localhost:5432/greet`

const config = {
    connectionString: DATABASE_URL
}

const db = pgp(config);
const testingFunction = TestingFunction(db);

// const greeting = Greeting();


// module.exports = db;


//setting up handlebars
app.engine('handlebars', exphb.engine({defaultLayout : false}));
app.set('view engine', 'handlebars');
//setting up body parser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false })); 
// parse application/json
app.use(bodyParser.json());

app.use(session({
    secret: 'Dikgang29',
    resave: false,
    saveUninitialized: true, 
    cookie: {maxAge: 55000}
  }));

  app.use(flash());
// app.use(express.static(__dirname + '/public'))
app.use(express.static('public'));

// this has to be the home page/default page
app.get('/',  async (req,res)=>{
  const counter = await testingFunction.getDatabaseCount();

  
    res.render('index',{
        nameValue: greeting.getGreetMessage().personName,
        printMessage: greeting.getGreetMessage().message,
        counter, 
    

    });
    
});

app.post('/greetme',  (req,res)=>{
    const name = req.body.inputName;
    // testingFunction.namesInDatabase(name);
    const {languages} = req.body;
    const {inputName} = req.body;
    // greeting.setGreeting(languages, inputName);
    if(!languages && !inputName){
        req.flash('error', 'Please enter a valid name and select a language')
    } 
    else if(!inputName){
        req.flash('error', 'Please enter a valid name');
    } else if(!languages){
        req.flash('error', 'Please select a language');
    }
    else if(languages, inputName){
        req.flash('success', 'User has been greeted successfully');
    testingFunction.namesInDatabase(name);
    greeting.setGreeting(languages, inputName);
    }
    res.redirect(`/`);
});

app.post('/clear', (req,res)=>{
    testingFunction.deleteAll();
    res.redirect('/')
})



//a route to the greeted page
app.get('/greeted', async (req,res)=>{
    const listedNames = await testingFunction.getNamesInDatabase();
    res.render('greeted', {
        listedNames
    })
});


//a route counter and has a parameter
app.get('/counter/:users_greeted', async (req, res)=>{
const name = req.params.users_greeted;
const testUser = await testingFunction.getUser(name);
const nameCounter = testUser[0].name_counter;
    res.render(`counter`,{name, nameCounter})
});

const PORT = process.env.PORT || 3000
app.listen(PORT, ()=>{
    console.log('the server started at port:', PORT)
})