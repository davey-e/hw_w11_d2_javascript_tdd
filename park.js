const Park = function(){
  this.enclosure = [];
}

Park.prototype.addDinosaur = function(dinosaur){
  this.enclosure.push(dinosaur);
}

Park.prototype.removeDinosaursOfType = function(type){
  this.enclosure = this.enclosure.filter(function(dinosaur) {
    return dinosaur.type !== type
  });
}

module.exports = Park;
