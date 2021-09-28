var MakeWhaleDancer = function (top, left, timeBetweenSteps) {
  //start with the parent class as a base
  MakeDancer.call(this, top, left, timeBetweenSteps);
  console.log('whales!');
  //each new whaleDancer will be represented by a small image of a whale
};

//set the prototype
MakeWhaleDancer.prototype = Object.create(MakeDancer.prototype);

// keep old step
MakeWhaleDancer.prototype.oldStep = MakeDancer.prototype.step;

//add methods
MakeWhaleDancer.prototype.flip = function() {
  this.oldStep();
  this.$node.toggle();
  //rotate the whale's image by 90 degrees, four times
};

MakeWhaleDancer.prototype.slap = function() {
  //change the image from down --> flat --> up --> flat
};

//reassign the constructor
MakeWhaleDancer.prototype.constructor = MakeWhaleDancer;
