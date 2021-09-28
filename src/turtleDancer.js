var MakeTurtleDancer = function (top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
};

//set the prototype
MakeTurtleDancer.prototype = Object.create(MakeDancer.prototype);

// keep old step
MakeTurtleDancer.prototype.oldStep = MakeDancer.prototype.step;

//add methods
MakeTurtleDancer.prototype.step = function() {
  this.oldStep();
  this.$node.removeClass('dancer');
  this.$node.addClass('turtle');
  this.$node.attr('src', './lib/turtle.png');
};

//reassign the constructor
MakeTurtleDancer.prototype.constructor = MakeTurtleDancer;
