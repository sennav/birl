require('chai').should();
const birl = require('../index.js');

const declarationCode = `
HORA DO SHOW
FRANGO frango = "frango"
BIRL
`;

const attributionCode = `
HORA DO SHOW
FRANGO frango = "frango"
frango = "Monstro"
BIRL
`;

describe('variables', function() {
  describe('FUNCIONA SEU FRANGO', function() {
    it('should return correct code for variable declaration', function() {
      // Arrange, Act
      const jsCode = birl.birlToJs(declarationCode);

      // Assert
      jsCode.should.be.equal('var frango = "frango";');
    });

    it('should return correct code for variable attribution', function() {
      // Arrange, Act
      const jsCode = birl.birlToJs(attributionCode);

      // Assert
      jsCode.should.be.equal('var frango = "frango";\nfrango = "Monstro";');
    });
  });
});