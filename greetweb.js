 'use strict';

 module.exports = function Greeting(){



   var greetedArray = [];
   let newArry = [];
   const newTestArr = [];
   let greetMessage;
   let personName;

  
//    function capitilizeFirstLetter(firstname){

//       const nameInCaps = firstname.charAt(0).toUpperCase() + firstname.slice(1).toLowerCase();
//       return nameInCaps;
      
//   }

   // function greetEnglish(firstName){
   //    if(firstName === '') return "Please enter a name";
   //    else if(firstName >=0 || firstName<=0) return "Error, Please enter a name NOT a number"

   //     else  {
   //        greetedArray.push(firstName);
         
   //        return 'Hello, '+firstName;
   //       //  return 'Hello, '+capitilizeFirstLetter(firstName);
   //       }

   // }

   // function greetSepedi(firstName){

   //    if(firstName === '') return "Kgopela o tsenye leina";
   //    else if(firstName >=0 || firstName<=0) return "Phosho, kgopela o tsenye leina e sego nomoro"
   //   else { 
   //    greetedArray.push(firstName);
   //      return 'Dumela, '+capitilizeFirstLetter(firstName);
   //    }
   // }

   // function greetTsonga(firstName){

   //    if(firstName === '') return "Ndza kombela mumanghenelo vito";
   //    else if(firstName >=0 || firstName<=0) return "Xihoxo, Mumanghenelo vito a u nomboro"
   //   else { 
   //    greetedArray.push(firstName);
   //      return 'Minjhani, '+capitilizeFirstLetter(firstName); }
   // }

function getGreetMessage(){
   return {
      personName,
      message: greetMessage,
      greetedArray,
      pushedArray : storedArray()

   };
}


function setGreeting(language, firstName){
   personName = firstName;

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
   else if(!language){
      greetMessage = 'Please select a language';
   }
   
}
   function check(){
      greetMessage = greetedArray;
   }
   
   function storedArray(){
      //  let newArry = [];

      greetedArray.forEach(elem => {
         if(!newArry.includes(elem)){
            newArry.push(elem);
         }
      })

      return newArry;
      
   }
   function newStoredArr(firstName){
      personName = firstName;
      
      greetedArray.forEach(personName=>{
         if(!newTestArr.includes(personName)){
            newTestArr.push(personName);
         }
      });
      // return newTestArr;
   }

   function greetedUserNames(){
      return newTestArr;
   }
   

  

   function checkedType(type){
      if(type==='english'){
         return greetEnglish()
      }
   }
 
   return {

      // greetEnglish,
      // greetSepedi,
      // greetTsonga,
      // getGreetedArray,
      storedArray,
      check,
      getGreetMessage,
      greetMessage,
      setGreeting,
      newStoredArr,
      // retunNames,
      checkedType
      // assign
   }
}