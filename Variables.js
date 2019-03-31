// There are 3 variables in Js
// Let , Var , Const

// var are global scope can be used any where and can reassigned any time.catch

var a = 10 ;

function one(no){
  return function two(no){
    return function three(no) {
      return no * no * no;
    }
  }
}

console.log(one(2)(3)(4));

// Let and const are both block Scope

function showMessage(name){
  let message = "Hello "
  console.log(message + ' ' + name);
}

showMessage('Sai Rajesh');
console.log(message);
