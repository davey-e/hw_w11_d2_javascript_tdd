const assert = require('assert');
const Park = require('../park.js');
const Dinosaur = require('../dinosaur.js');

describe('Park', function(){

  beforeEach(function(){
      park = new Park();
      triceratops = new Dinosaur('Triceratops', 4);
  });

  it('should have an empty enclosure', function(){
    const actual = park.enclosure;
    assert.deepStrictEqual(actual, []);
  });

  it('should be able to add a dinosaur to enclosure', function(){
    park.addDinosaur(triceratops);
    const actual = park.enclosure;
    assert.deepStrictEqual(actual, [triceratops]);
  })

});
