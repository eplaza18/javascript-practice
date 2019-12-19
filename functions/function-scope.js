//Global(converFarenheitToCelsius, tempOne, TempTwo)
//local scope (farenheit, celsius )
//local scope (isFreezing)

let convertFarenheitToCelsius = function(degF) {
  let celsius = ((degF - 32) * 5) / 9;

  if (celsius <= 0) {
    let isFreezing = true;
  }
  return celsius;
};

let tempOne = convertFarenheitToCelsius(32);
let tempTwo = convertFarenheitToCelsius(78);
console.log(tempOne);
console.log(tempTwo);
