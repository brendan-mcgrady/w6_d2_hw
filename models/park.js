const Park = function(name, ticketPrice, dinosaurCollection) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurCollection = [];
}

Park.prototype.addDinosaurToCollection = function(dinosaur) {
  this.dinosaurCollection.push(dinosaur);
}

module.exports = Park;
