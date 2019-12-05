// Import stylesheets
import './style.css';

//accessing Object :
// Dot 
// Square brackets 

//looping in an Object:
//1.for...in
//2.Object.keys()
//3.Object.value()
//4.Object.entries() 

function objLooping(){
  var animal = {};
  Object.defineProperties(animal,{
    1:{
    value:'Lion',
    enumerable:false
    },
    2:{
      value:'Tiger',
      enumerable:true
    },
    3:{
      value:'Ox',
      enumerable:false
    }
  });
  console.log(Object.keys(animal));
  console.log(Object.values(animal));
  console.log(Object.entries(animal));
  for(var key in animal){
    console.log(key,animal[key]);
  }
}
objLooping();

// Object creation ways: 
// 1.new keyword
// 2.{}
function objCreation(){
  //1
  var currency = new Object();
  currency.Dollar = '$';
  currency.Rupees = 'Rs';
  console.log(currency);

  //2
  var food ={
    SouthIndian:'Dosa',
    Chienes:'Noodles'
  };
  console.log(food);

  //removing a property from object.
  delete food.SouthIndian;
  console.log(food);

  //Inserting new properties.
  food.NorthIndia = 'Roti curry';
  console.log(food);

  Object.defineProperty(food, 'SouthIndian',{
    value:'MasalaDosa',
    writable:false
  });
  console.log(food.SouthIndian)

  //above if writable is set to false, that property becomes read only. 

  // Object.defineProperty(food, 'SouthIndian',{
  //   value:'King Fish',
  // });
  // console.log(food.SouthIndian);

  //throws error as configurable is false
  // delete food.SouthIndian;
  };
  objCreation();

//freezing an object helps in not able to change the Object - like we cannot add new property or delete property ,chaning data descriptors and changing prototype.The existing properties cannot be modified.
(function (){

 
  var objFreeze = function (){
  var language = {
    Germany:'German',
    Finland:'Finnish'
  }

  Object.freeze(language);

  //cannot modify existing properties
  //language.Germany='KK';
  
  // delete language.Finland;

  // language.India = 'Hindi';
  console.log(language);
  }
  objFreeze();
})();


//Sealing an object will prevent addition of new properties into objects and making existing properties as non configurable (deletable). The existing properties can be modified with they are writable. 

function objSeal(){
  var digits = {
    1:'one',
    2:'two',
    3:'three',
  }
  // Object.defineProperty(digits,2,{
  //   writable:false
  // })
  console.log(digits);
  Object.seal(digits);
  digits[2] = 'TWO';
  console.log(digits);
}
objSeal();