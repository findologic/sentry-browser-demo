describe('sentryBrowserDemo', () => {
  describe('Raven.js wrapper', () => {
    it('should not pollute the window object', () => {
      expect(window.Raven).to.be.undefined;
    });
  });
});
