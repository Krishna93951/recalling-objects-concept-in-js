// Import stylesheets
import './style.css';

// Write Javascript code!

// Object creation ways: 
// 1.new keyword
// 2.{}

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

function obj(){
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
}
obj();
