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

  it('should have a step function that makes its node blink', function() {
    sinon.spy(whaleDancer.$node, 'toggle');
    whaleDancer.step();
    expect(whaleDancer.$node.toggle.called).to.be.true;
    whaleDancer.$node.toggle.restore();
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(whaleDancer, 'step');
      expect(whaleDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(whaleDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(whaleDancer.step.callCount).to.be.equal(2);
    });
  });
});
