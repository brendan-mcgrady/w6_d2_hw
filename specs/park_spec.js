const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dinosaur1;
  let dinosaur2;
  let dinosaur3;

  beforeEach(function () {
    park = new Park('Jurassic Park', 45, []);
    dinosaur1 = new Dinosaur('T-rex', 'Carnivore', 50);
    dinosaur2 = new Dinosaur('Diplodicus', 'Herbivore', 40);
    dinosaur3 = new Dinosaur('Raptor', 'Carnivore', 45);
  });

  it('should have a name', function() {
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park');
  });

  it('should have a ticket price', function() {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 45);
  });

  it('should have a collection of dinosaurs', function() {
    const actual = park.dinosaurCollection;
    assert.deepStrictEqual(actual, []);
  });

  it('should be able to add a dinosaur to its collection', function() {
    park.addDinosaurToCollection(dinosaur1);
    const actual = [dinosaur1];
    assert.deepStrictEqual(actual, park.dinosaurCollection);
  });

  it('should be able to remove a dinosaur from its collection');

  it('should be able to find the dinosaur that attracts the most visitors');

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
