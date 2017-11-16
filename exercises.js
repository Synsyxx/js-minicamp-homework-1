//Do not change any of the function names
//Assignment 1 Terms:
 //Variables - Variables are like containers to hold things like numbers or phrases  in your code.
 
//Strings - Strings are things you want the program to read, rather than do something with.  They can be any combination of words, numbers, etc. wrapped in quotes to tell the program to just read it out.

//Functions (arguments, return) - A function is a piece of code that you want to do something, much like solving a math problem. The argument would be the problem (Like 2 + 2) and the return would be the answer (4.)

//if statements - if statements allow you to create different actions. For example, you could say "if 2 + 2 = 4, print 5, if 2 + 2 /= 4, print 4!" It is a useful way to write larger functions and codes for programs.


//Boolean values (true, false) - “Boolean values” is a fancy way to describe true/false, and what almost all code comes down to. 0s and 1s, yes and no etc or are boolean values.

function multiplyByTen(num) {
  // return num after multiplying it by ten
  // code here
  var product = num * 10;
  return product;
}

function subtractFive(num) {
  // return num after subtracting five
  // code here
  var five = num - 5;
  return five;
}

function areSameLength(str1, str2) {
  // return true if the two strings have the same length
  // otherwise return false
  // code here
  if (str1.length === str2.length) {
    return true;} else {return false;}

}

function areEqual(x, y) {
  // return true if x and y are the same
  // otherwise return false
  // code here
  if (x === y) {
    return true;
  } else {return false;}
}

function lessThanNinety(num) {
  // return true if num is less than ninety
  // otherwise return false
  // code here
if (num < 90) {
  return true;
} else {return false;}
}

function greaterThanFifty(num) {
  // return true if num is greater than fifty
  // otherwise return false
  // code here
  if (num > 50) {
    return true;
  } else {return false;}
}

function add(x, y) {
  // add x and y together and return the value
  // code here
  var sum = x + y;
  return sum;
}

function subtract(x, y) {
  // subtract y from x and return the value
  // code here
  var sub = x - y;
  return sub;
}

function divide(x, y) {
  // divide x by y and return the value
  // code here
  var div = x / y;
  return div;
}

function multiply(x, y) {
  // multiply x by y and return the value
  // code here
  var multi = x * y;
  return multi;
}

function getRemainder(x, y) {
  // return the remainder from dividing x by y
  // code here
  var remainder = x % y;
  return remainder;
}

function isEven(num) {
  // return true if num is even
  // otherwise return false
  // code here
  if (num % 2 === 0) {
    return true;
  } else {return false;}
}

function isOdd(num) {
  // return true if num is false
  // otherwise return false
  // code here
  if (num % 2 === 1) {
    return true;
  } else {return false;}
}

function square(num) {
  // square num and return the new value
  // code here
  var squared = Math.pow(num, 2);
  return squared;
}

function cube(num) {
  // cube num and return the new value
  // code here
  var cubed = Math.pow(num, 3);
  return cubed;
}

function raiseToPower(num, exponent) {
  // raise num to whatever power is passed in as exponent
  // code here
  var power = Math.pow(num, exponent);
  return power;
}

function roundNumber(num) {
  // round num and return it
  // code here
  return Math.round(num);
}

function roundUp(num) {
  // round num up and return it
  // code here
  return Math.ceil(num);
}

function addExclamationPoint(str) {
  // add an exclamation point to the end of str and return the new string
  // 'hello world' -> 'hello world!'
  // code here
  return str + '!';
}

function combineNames(firstName, lastName) {
  // return firstName and lastName combined as one string and separated by a space.
  // 'Lambda', 'School' -> 'Lambda School'
  // code here
  return firstName + ' ' + lastName;
}

function getGreeting(name) {
  // Take the name string and concatenate other strings onto it so it takes the following form:
  // 'Sam' -> 'Hello Sam!'
  // code here
  return 'Hello ' + name + '!';
}

// If you can't remember these area formulas then head over to Google or look at the test code.

function getRectangleArea(length, width) {
  // return the area of the rectangle by using length and width
  // code here
  return length * width;
}

function getTriangleArea(base, height) {
  // return the area of the triangle by using base and height
  // code here
  return (base * height)/2;
}

function getCircleArea(radius) {
  // return the rounded area of the circle given the radius
  // code here
  var circle = Math.pow(radius, 2) * Math.PI;
  return Math.round(circle);
}

function getRectangularPrismVolume(length, width, height) {
  // return the volume of the 3D rectangular prism given the length, width, and height
  // code here
  return length * width * height;
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  multiplyByTen: multiplyByTen,
  subtractFive: subtractFive,
  areSameLength: areSameLength,
  areEqual: areEqual,
  lessThanNinety: lessThanNinety,
  greaterThanFifty: greaterThanFifty,
  add: add,
  subtract: subtract,
  divide: divide,
  multiply: multiply,
  getRemainder: getRemainder,
  isEven: isEven,
  isOdd: isOdd,
  square: square,
  cube: cube,
  raiseToPower: raiseToPower,
  roundNumber: roundNumber,
  roundUp: roundUp,
  addExclamationPoint: addExclamationPoint,
  combineNames: combineNames,
  getGreeting: getGreeting,
  getRectangleArea: getRectangleArea,
  getTriangleArea: getTriangleArea,
  getCircleArea: getCircleArea,
  getRectangularPrismVolume: getRectangularPrismVolume
};
