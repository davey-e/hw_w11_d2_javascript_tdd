const assert = require('assert');
const Park = require('../park.js');
const Dinosaur = require('../dinosaur.js');

describe('Park', function(){

  beforeEach(function(){
      park = new Park();
  });

  it('should have an empty enclosure', function(){
    const actual = park.enclosure;
    assert.deepStrictEqual(actual, []);
  });

});
