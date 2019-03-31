// There are 3 types of Scopes in Js
// Global Scope , Local scope , Block Scope

// Global Scope :

var welcomeMessage = "Hello";

console.log(greet("Sai Rajesh"));

function greet(name) {
  return welcomeMessage + " " + name;
}

// Local Scope
var a = 10;

function square(no){
  let a = 20;
   return function log(){
     var b = 30;
      return a * no;
   }
}
console.log(square(10)());

// Block Scopes
var flag = true;

if(flag){
  var message="Block Scope"
}

console.log(message);
