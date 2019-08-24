require('chai').should();
const birl = require('../index.js');

function getCodeForOperation(operation) {
return `
HORA DO SHOW
${operation}
BIRL
`;
}

describe('operation', function() {
  describe('É TREZE PORRA', function() {
    it('should return correct code for simple addition', function() {
      // Arrange
      const birlCode = getCodeForOperation('2 + 2');

      // Act
      const jsCode = birl.birlToJs(birlCode);

      // Assert
      jsCode.should.be.equal('2 + 2;');
    });

    it('should return correct code for ternary addition', function() {
      // Arrange
      const birlCode = getCodeForOperation('2 + 2 + 42');

      // Act
      const jsCode = birl.birlToJs(birlCode);

      // Assert
      jsCode.should.be.equal('2 + (2 + 42);');
    });
  });
});