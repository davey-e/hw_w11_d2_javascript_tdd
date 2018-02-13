const assert = require('assert');
const Park = require('../park.js');
const Dinosaur = require('../dinosaur.js');

describe('Park', function(){

  beforeEach(function(){
      park = new Park();
      triceratops1 = new Dinosaur('Triceratops', 4);
      triceratops2 = new Dinosaur('Triceratops', 4);
      velociraptor = new Dinosaur('Velociraptor', 2);
  });

  it('should have an empty enclosure', function(){
    const actual = park.enclosure;
    assert.deepStrictEqual(actual, []);
  });

  it('should be able to add a dinosaur to enclosure', function(){
    park.addDinosaur(triceratops1);
    const actual = park.enclosure;
    assert.deepStrictEqual(actual, [triceratops1]);
  });

  it('should be able to remove all dinosaurs of specified type', function(){
    park.addDinosaur(triceratops1);
    park.addDinosaur(triceratops2);
    park.addDinosaur(velociraptor);
    const actualBefore = park.enclosure;
    assert.deepStrictEqual(actualBefore, [triceratops1, triceratops2, velociraptor]);
    park.removeDinosaursOfType('Triceratops');
    const actualAfter = park.enclosure;
    assert.deepStrictEqual(actualAfter, [velociraptor]);
  });

  it('should be able to return all dinosaurs with offspring per year > 2', function(){
    park.addDinosaur(triceratops1);
    park.addDinosaur(triceratops2);
    park.addDinosaur(velociraptor);
    const actual = park.getDinosaursWithMoreThanTwoOffspringPerYear();
    assert.deepStrictEqual(actual, [triceratops1, triceratops2]);
  });

});
