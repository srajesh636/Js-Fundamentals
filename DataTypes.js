/* Basic Datatypes in js
Null
Undefined
Number
String
Boolean
Object
*/

// Primary
var string = "I am a String";
var number = 10;
var boolean = true;

// Composite
var array = [1, 2, 3];
var object = { name: "Hello i am object" };

// Special
var null_example = null;
var undefined_example = undefined;

console.log(string,number,boolean,array,object,null_example,undefined_example)

// Null vs undefined
var x;
console.log(typeof(x));

var y= null;
console.log(typeof(y));


//Why typeof(null) is a Object  ?
 //Its is bug in ecmascript .

 // Infinity
 let a = 10/0 ;
 console.log(a);

 // Negative Infinity
 let b = 10/-0;
 console.log(b);

 // NaN
 let c= "a"/0;
 console.log(c);
