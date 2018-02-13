const assert = require('assert');
const Dinosaur = require('../dinosaur.js');

describe('Dinosaur', function(){

  beforeEach(function(){
    triceratops = new Dinosaur('Triceratops', 4);
  });

  it('should have a type', function(){
    const actual = triceratops.type;
    assert.strictEqual(actual, 'Triceratops');
  });
  it('should have a number of offspring per year', function(){
    const actual = triceratops.offspringPerYear;
    assert.strictEqual(actual, 4);
  });

});
