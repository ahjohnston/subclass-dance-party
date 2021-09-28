describe('turtleDancer', function() {

  var turtleDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    turtleDancer = new MakeTurtleDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(turtleDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that adds turtle as a class', function() {
    sinon.spy(turtleDancer.$node);
    turtleDancer.step();
    expect(turtleDancer.$node.attr('class').includes('turtle')).to.be.true;
  });

  it('should have a step function that adds turtle image as the path', function() {
    var path = './lib/turtle.png';
    sinon.spy(turtleDancer.$node);
    turtleDancer.step();
    expect(turtleDancer.$node.attr('src')).to.equal(path);
  });
});
