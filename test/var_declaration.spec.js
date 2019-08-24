require('chai').should();
const birl = require('../index.js');

const birlCode = `
HORA DO SHOW
FRANGO frango = "frango"
BIRL
`;

describe('standard_function_call', function() {
  describe('FUNCIONA SEU FRANGO', function() {
    it('should return correct code', function() {
      // Arrange, Act
      const jsCode = birl.birlToJs(birlCode);

      // Assert
      jsCode.should.be.equal('var frango = "frango";');
    });
  });
});