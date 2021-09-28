describe('whaleDancer', function() {

  var whaleDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    whaleDancer = new MakeWhaleDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(whaleDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that adds whale as a class', function() {
    sinon.spy(whaleDancer.$node);
    whaleDancer.step();
    expect(whaleDancer.$node.attr('class').includes('whale')).to.be.true;
  });

  it('should have a step function that adds whale image as the path', function() {
    var path = './lib/whale.png';
    sinon.spy(whaleDancer.$node);
    whaleDancer.step();
    expect(whaleDancer.$node.attr('src')).to.equal(path);
  });
});
