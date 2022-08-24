const express = require('express');
const exphb = require('express-handlebars');
const bodyParser = require('body-parser');
const Greeting = require('./greetweb');
const app = express();
const greeting = Greeting();
// const path = require('path')

//setting up handlebars
app.engine('handlebars', exphb.engine({defaultLayout : false}));
app.set('view engine', 'handlebars');
//setting up body parser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false })); 
// parse application/json
app.use(bodyParser.json());



// app.use(express.static(__dirname + '/public'))
app.use(express.static('public'));

// this has to be the home page/default page
app.get('/', (req,res)=>{
console.log(greeting.getGreetMessage().greetedArray)
console.log(greeting.getGreetMessage().pushedArray)
    res.render('index',{
        nameValue: greeting.getGreetMessage().personName,
        printMessage: greeting.getGreetMessage().message
    });
    
});

app.post('/greetme', (req,res)=>{
    
   
   greeting.setGreeting(req.body.languages,req.body.inputName);
   

    res.redirect(`/`);
});


//a route to the greeted page
app.get('/greeted', (req,res)=>{
    res.render('greetme', {userNames: greeting.greetedUserNames()})
});

//a route counter and has a parameter
app.get('/counter/:id',(req, res)=>{

    res.send(`this show show how many times a user has been greeted
    e.g The user Dikgang has been greeted 2 times`)
});




const PORT = process.env.PORT || 3000
app.listen(PORT, ()=>{
    console.log('the server started at port:', PORT)
})