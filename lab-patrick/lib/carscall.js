'use strict';

module.exports = exports = {};

exports.Cars = function(make, model) {
  this.make = make;
  this.model = model;
};

exports.ExoticCars = function(make, model) {
  exports.Cars.call(this, make, model);
  this.highHorsepower = true;
};

// exports.ExoticCarsList = function(make, model) {
//   exports.Cars.apply(this, [make, model]);
//   this.highHorsepower = true;
// };

let fiesta = new exports.Cars('Ford', 'Fiesta');
let fxx = new exports.ExoticCars('Ferarri', 'FXX');
// let veron = new exports.ExoticCarsList('Bugatti', 'Veron');

console.log(fiesta);
console.log(fxx);
// console.log(veron);
