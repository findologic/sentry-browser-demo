import sentryBrowserDemo from '../../src/sentry-browser-demo';

describe('sentryBrowserDemo', () => {
  xdescribe('Greet function', () => {
    beforeEach(() => {
      spy(sentryBrowserDemo, 'greet');
      sentryBrowserDemo.greet();
    });

    it('should have been run once', () => {
      expect(sentryBrowserDemo.greet).to.have.been.calledOnce;
    });

    it('should have always returned hello', () => {
      expect(sentryBrowserDemo.greet).to.have.always.returned('hello');
    });
  });
});
