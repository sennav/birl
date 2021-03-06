require('chai').should();
const birl = require('../birl.js');

const functionDeclarationCode = `
HORA DO SHOW
OH O HOME AI PO MONSTRO SOMA_MONSTRO (MONSTRO A, MONSTRO B)
    FRANGO SOMA = A + B
    BORA CUMPADI SOMA
BIRL
BIRL
`;

const functionCallCode = `
HORA DO SHOW
OH O HOME AI PO MONSTRO SOMA_MONSTRO (MONSTRO A, MONSTRO B)
    FRANGO SOMA = A + B
    BORA CUMPADI SOMA
BIRL
AJUDA O MALUCO TA DOENTE SOMA_MONSTRO(1, 2)
BIRL
`;

const functionCallCodeAllArgs = `
HORA DO SHOW
AJUDA O MALUCO TA DOENTE SOMA_MONSTRO(x, x--, x- 1, "x", AJUDA O MALUCO TA DOENTE SOMA_MONSTRO(y))
BIRL
`;


describe('functions', function() {
  describe('OH O HOME AI PO', function() {
    it('should return correct code for function declaration', function() {
      // Arrange, Act
      const jsCode = birl.birlToJs(functionDeclarationCode);

      // Assert
      jsCode.should.be.equal('function SOMA_MONSTRO(A, B) {\n  var SOMA = A + B;\n  return SOMA;\n}');
    });

    it('should return correct code for function call', function() {
      // Arrange, Act
      const jsCode = birl.birlToJs(functionCallCode);

      // Assert
      jsCode.should.be.equal('function SOMA_MONSTRO(A, B) {\n  var SOMA = A + B;\n  return SOMA;\n}\n\nSOMA_MONSTRO(1, 2);');
    });

    it('should return correct code for function call with all argument types', function() {
      // Arrange, Act
      const jsCode = birl.birlToJs(functionCallCodeAllArgs);

      // Assert
      jsCode.should.be.equal('SOMA_MONSTRO(x, x--, x - 1, "x", SOMA_MONSTRO(y));');
    });
  });
});