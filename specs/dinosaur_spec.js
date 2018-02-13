const assert = require('assert');
const Dinosaur = require('../dinosaur.js');

describe('Dinosaur', function(){

  beforeEach(function(){
    triceratops = new Dinosaur('Triceratops');
  })

  it('should have a type', function(){
    const actual = triceratops.type;
    assert.equal(actual, 'Triceratops');
  })

})
