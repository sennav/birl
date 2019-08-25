const fs = require('fs');
require('chai').should();
const birl = require('../birl.js');

const fatorial = fs.readFileSync('examples/FATORIAL_PORRA.BIRL', 'utf8');
const helloWorld = fs.readFileSync('examples/ALO_MUNDO_FRANGO.BIRL', 'utf8');

describe('example tests', function() {
  describe('DERRUBAR AS ARVORE DO IBIRAPUERA', function() {
    it('should return correct code for fatorial', function() {
      // Arrange, Act
      const jsCode = birl.birlToJs(fatorial);

      // Assert
      jsCode.should.be.equal('function FATORIAL_MONSTRO(N) {\n  if (N == 1) {\n    return 1;\n  }\n\n  return N * FATORIAL_MONSTRO(N - 1);\n}\n\nvar FAT = FATORIAL_MONSTRO(5);\nconsole.log(FAT);');
    });

    it('should return correct code for hello world', function() {
      // Arrange, Act
      const jsCode = birl.birlToJs(helloWorld);

      // Assert
      jsCode.should.be.equal('console.log("ALO, BANDO DE FRANGO!");');
    });
  });
});