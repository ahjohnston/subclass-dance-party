var MakeWhaleDancer = function (top, left, timeBetweenSteps) {
  //start with the parent class as a base
  MakeDancer.call(this, top, left, timeBetweenSteps);
  //each new whaleDancer will be represented by a small image of a whale
  //add a class to each whale, so that CSS file has access to each whaleDancer
};

//set the prototype
MakeWhaleDancer.prototype = Object.create(MakeDancer.prototype);

// keep old step
MakeWhaleDancer.prototype.oldStep = MakeDancer.prototype.step;

//add methods
MakeWhaleDancer.prototype.step = function () {
  this.oldStep();
  this.$node.removeClass('dancer');
  this.$node.addClass('whale');
  this.$node.attr('src', './lib/whale.png');
};

//rotate the whale's image by 90 degrees, four times

// MakeWhaleDancer.prototype.flip = function () {
//   this.oldStep();

// };

// //make the whale slap by changing the image
// MakeWhaleDancer.prototype.slap = function () {
//   this.oldStep();
// }

//reassign the constructor
MakeWhaleDancer.prototype.constructor = MakeWhaleDancer;
