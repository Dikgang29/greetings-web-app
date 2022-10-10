 'use strict';

 module.exports = function Greeting(){



   var greetedArray = [];
   let greetMessage;
   let personName;
  


 function setGreeting( language, firstName){

   
   if(language==='english'){

      greetMessage = 'Hello, '+firstName;
      greetedArray.push(personName);
   }
   else if(language ==='sepedi'){
      greetMessage = 'Dumela, '+firstName;
      greetedArray.push(personName);

   }
   else if(language === 'tsonga'){
      greetMessage = 'Minjhani, '+firstName
      greetedArray.push(personName);

   }   
}

 function getGreetMessage(){
   return {
      personName,
      message: greetMessage,
      // greetedArray,
      // pushedArray : storedArray()

   }
}

function errorMessages(language, firstName){

   if(!language && !firstName){
      return 'Please enter a name and select a language';
   }
   else if(!firstName){
      return 'Please enter a valid name';
   } else if(!language){
      return 'Please select a language';
   }

} 
   return {
      errorMessages,
      getGreetMessage,
      greetMessage,
      setGreeting,
   }
}