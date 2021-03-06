require('chai').should();
const birl = require('../birl.js');

const birlCode = `
HORA DO SHOW
CE QUER VER ESSA PORRA?("arg1", arg2)
BIRL
`;

describe('standard_function_call', function() {
  describe('CE QUER VER ESSA PORRA?', function() {
    it('should return correct code for console.log', function() {
      // Arrange, Act
      const jsCode = birl.birlToJs(birlCode);

      // Assert
      jsCode.should.be.equal('console.log("arg1", arg2);');
    });
  });
});