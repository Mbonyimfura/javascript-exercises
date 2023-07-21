const add = function(number1,number2) {
	return number1+number2
};

const subtract = function(number1,number2) {
	return number1-number2
};

const sum = function(number) {
	return number.reduce((acc,curr)=>{
    return acc+=curr
  },0)
};

const multiply = function(...number) {
return number.reduce((acc,curr)=>acc*=curr)
 };

const power = function(number1,number2) {
	return Math.pow(number1,number2)
};

const factorial = function(number) {
	if(number===0){
    return 1;
  }
  return number*factorial(number-1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
