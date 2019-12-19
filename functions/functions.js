//function - input, code, output

let greetUser = function() {
  console.log("Welcome User!");
};

greetUser();

let square = function(num) {
  let result = num * num;
  return result;
};

let value = square(4);

console.log(value);

let convertFarenheitToCelsius = function(degF) {
  let celsius = ((degF - 32) * 5) / 9;
  return celsius;
};

let tempOne = convertFarenheitToCelsius(32);
let tempTwo = convertFarenheitToCelsius(78);
console.log(tempOne);
console.log(tempTwo);
