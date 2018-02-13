const Park = function(){
  this.enclosure = [];
}

Park.prototype.addDinosaur = function(dinosaur){
  this.enclosure.push(dinosaur);
}

Park.prototype.removeDinosaursOfType = function(type){
  this.enclosure = this.enclosure.filter(function(dinosaur) {
    return dinosaur.type !== type;
  });
}

Park.prototype.getDinosaursWithMoreThanTwoOffspringPerYear = function(){
  let dinosaursWithMoreThanTwoOffspringPerYear = [];
  for(let i = 0; i < this.enclosure.length; i++){
    let currentDinosaur = this.enclosure[i];
    if(currentDinosaur.offspringPerYear > 2){
      dinosaursWithMoreThanTwoOffspringPerYear.push(currentDinosaur);
    }
  }
  return dinosaursWithMoreThanTwoOffspringPerYear;
}

module.exports = Park;
