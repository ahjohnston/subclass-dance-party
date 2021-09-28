// Creates and returns a new dancer object that can step
var MakeDancer = function (top, left, timeBetweenSteps) {
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  console.log('hi', this); //in the spec, this logs correctly (the dancer object), but in dancefloor this logs "window"
  this.step();
  this.setPosition(top, left);
};

// use jQuery to create an HTML <span> tag
MakeDancer.prototype.$node = $('<span class="dancer"></span>');

MakeDancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

MakeDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};
