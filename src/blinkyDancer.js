var MakeBlinkyDancer = function (top, left, timeBetweenSteps) {
  //start with the parent class as a base
  MakeDancer.call(this, top, left, timeBetweenSteps);
};

//set the prototype
MakeBlinkyDancer.prototype = Object.create(MakeDancer.prototype);

// keep old step
MakeBlinkyDancer.prototype.oldStep = MakeDancer.prototype.step;

//add methods
MakeBlinkyDancer.prototype.step = function() {
  this.oldStep();
  this.$node.addClass('starfish');
  this.$node.attr('src', './lib/starfish.png');
};

MakeBlinkyDancer.prototype.lineUp = function() {
  this.$node.addClass('lineUpStarfish');
};

//reassign the constructor
MakeBlinkyDancer.prototype.constructor = MakeBlinkyDancer;
