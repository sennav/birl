require('chai').should();
const birl = require('../birl.js');

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

const arrayCode = `
HORA DO SHOW
FRANGO frango = [ 1, "a", a, x++, x+y]
frango = [ 1, "a", a, x++, x+y]
BIRL
`;

const objectCode = `
HORA DO SHOW
FRANGO frango = {1: x+y, "a":y--,   "aa": "" }
frango={1: x+y,
 "a":y--,
    "aa": "" ,}
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

    it('should return correct code for array attribution', function() {
      // Arrange, Act
      const jsCode = birl.birlToJs(arrayCode);

      // Assert
      jsCode.should.be.equal('var frango = [1, "a", a, x++, x + y];\nfrango = [1, "a", a, x++, x + y];');
    });

    it('should return correct code for object attribution', function() {
      // Arrange, Act
      const jsCode = birl.birlToJs(objectCode);

      // Assert
      jsCode.should.be.equal('var frango = {\n  1: x + y,\n  "a": y--,\n  "aa": ""\n};\nfrango = {\n  1: x + y,\n  "a": y--,\n  "aa": ""\n};');
    });
  });
});