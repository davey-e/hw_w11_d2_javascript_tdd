const assert = require('assert');
const Park = require('../park.js');
const Dinosaur = require('../dinosaur.js');

describe('Park', function(){

  beforeEach(function(){
      park = new Park();
      triceratops1 = new Dinosaur('Triceratops', 4);
      triceratops2 = new Dinosaur('Triceratops', 4);
      velociraptor = new Dinosaur('Velociraptor', 2);
      tyrannosaurus = new Dinosaur('Tyrannosaurus', 3);
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

  it('should be able to calculate number of dinosaurs after 1 year starting with 1 dinosaur', function(){
    park.addDinosaur(tyrannosaurus);
    assert.strictEqual(park.calculateDinosaurs(1), 4);
  });

  it('should be able to calculate number of dinosaurs after 1 year starting with 2 dinosaurs', function(){
    park.addDinosaur(tyrannosaurus);
    park.addDinosaur(velociraptor);
    assert.strictEqual(park.calculateDinosaurs(1), 7);
  });

  it('should be able to calculate number of dinosaurs after 1 year starting with 3 dinosaurs', function(){
    park.addDinosaur(tyrannosaurus);
    park.addDinosaur(velociraptor);
    park.addDinosaur(triceratops1);
    assert.strictEqual(park.calculateDinosaurs(1), 12);
  });

  // it('should be able to calculate number of dinosaurs after 2 years starting with 1 dinosaur', function(){
  //   park.addDinosaur(tyrannosaurus);
  //   assert.strictEqual(park.calculateDinosaurs(2), 16);
  // });

});
