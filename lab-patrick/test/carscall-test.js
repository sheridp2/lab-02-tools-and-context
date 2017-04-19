'use strict';

const carscall = require('../lib/carscall.js');
const assert = require('assert');

describe('carscall.js', function(){
  describe('#Cars', function() {
    it('should return make: Ford, model: Fiesta, if given fiesta', function(){
      let fiesta = new carscall.Cars('Ford', 'Fiesta');
      assert.equal(fiesta.make, 'Ford');
      assert.equal(fiesta.model, 'Fiesta');
    });
  });
});


describe('carcall.js', function(){
  describe('#ExoticCars', function(){
    it('should return make: Ferarri, model: FXX, highHorsepower: true', function(){
      let fxx = new carscall.ExoticCars('Ferarri', 'FXX');
      assert.equal(fxx.make, 'Ferarri');
      assert.equal(fxx.model, 'FXX');
      assert.equal(fxx.highHorsepower, true);
    });
  });
});


// describe('carcall.js', function(){
//   describe('#ExoticCars', function(){
//     it('should return typeof string');
//     let fxx = new carscall.ExoticCars('Ferarri', 'FXX');
//     assert.equal(fxx.make.typeof, 'string');
//   });
// });
