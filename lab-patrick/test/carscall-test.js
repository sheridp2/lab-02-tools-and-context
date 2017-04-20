'use strict';

const carscall = require('../lib/carscall.js');
const assert = require('assert');

describe('carcall.js', function(){
  describe('#ExoticCars', function(){
    it('should return make: Ferarri, model: FXX, highHorsepower: true', function(){
      let fxx = new carscall.ExoticCars('Ferarri', 'FXX');
      assert.equal(fxx.make, 'Ferarri');
      assert.equal(fxx.model, 'FXX');
      assert.equal(fxx.highHorsepower, true);
    });
    it('should return typeof string', function(){
      let fxx = new carscall.ExoticCars('Ferarri', 'FXX');
      assert.equal(typeof fxx.make, 'string');
    });
  });
});

describe('carcall.js',function(){
  describe('#ExoticCarsList', function() {
    it('should return make: Bugatti, model: FXX, highHorsepower: true', function() {
      let veron = new carscall.ExoticCarsList('Bugatti', 'Veron');
      assert.equal(veron.make, 'Bugatti');
      assert.equal(veron.model, 'Veron');
      assert.equal(veron.highHorsepower, true);
    });
    it('should return typeof string', function(){
      let veron = new carscall.ExoticCarsList('Bugatti', 'Veron');
      assert.equal(typeof veron.make, 'string');
    });
  });
});
