require('chai').should();
const birl = require('../birl.js');

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
      jsCode.should.be.equal('2 + 2 + 42;');
    });

    it('should return correct code for operation with parenthesis', function() {
      // Arrange
      const birlCode = getCodeForOperation('2 * (2 + 42)');

      // Act
      const jsCode = birl.birlToJs(birlCode);

      // Assert
      jsCode.should.be.equal('2 * (2 + 42);');
    });

    it('should return correct code for operation with variable as operator', function() {
      // Arrange
      const birlCode = getCodeForOperation('2 + (a + 42)');

      // Act
      const jsCode = birl.birlToJs(birlCode);

      // Assert
      jsCode.should.be.equal('2 + (a + 42);');
    });

    it('should return correct code for operation with member function as operator', function() {
      // Arrange
      const birlCode = getCodeForOperation('(2+a.a) *   1');

      // Act
      const jsCode = birl.birlToJs(birlCode);

      // Assert
      jsCode.should.be.equal('(2 + a.a) * 1;');
    });

    it('should return correct code for operation with member function call as operator', function() {
      // Arrange
      const birlCode = getCodeForOperation('(2 + a.a(1)) * 42');

      // Act
      const jsCode = birl.birlToJs(birlCode);

      // Assert
      jsCode.should.be.equal('(2 + a.a(1)) * 42;');
    });

    it('should return correct code for operation with BIRL function call as operator', function() {
      // Arrange
      const birlCode = getCodeForOperation('(2 + AJUDA O MALUCO TA DOENTE SOMA_MONSTRO(1, 2)) * 42');

      // Act
      const jsCode = birl.birlToJs(birlCode);

      // Assert
      jsCode.should.be.equal('(2 + SOMA_MONSTRO(1, 2)) * 42;');
    });

    it('should return correct code for operation with unary operation as operator', function() {
      // Arrange
      const birlCode = getCodeForOperation('z++ / (2 + a++) * 42');

      // Act
      const jsCode = birl.birlToJs(birlCode);

      // Assert
      jsCode.should.be.equal('z++ / (2 + a++) * 42;');
    });

    it('should return correct code for operation with comparison as operator', function() {
      // Arrange
      const birlCode = getCodeForOperation('z==a / (2 + a++) * 42');

      // Act
      const jsCode = birl.birlToJs(birlCode);

      // Assert
      jsCode.should.be.equal('(z == a) / (2 + a++) * 42;');
    });
  });
});