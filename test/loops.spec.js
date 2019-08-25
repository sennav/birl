require('chai').should();
const birl = require('../index.js');

const whileCode = `
HORA DO SHOW
  MONSTRO X = 5
  NEGATIVA BAMBAM (X > 2)
    X -= 1
  BIRL
BIRL
`;

const forCode = `
HORA DO SHOW
  MONSTRO M = 0
  MAIS QUERO MAIS (M = 0; M < 5; M++)
    CE QUER VER ESSA PORRA? ("%d", M)
  BIRL
BIRL
`;

const forCodeWithVarDeclaration = `
HORA DO SHOW
  MAIS QUERO MAIS (MONSTRO M = 0; M < 5; M++)
    ELE QUE A GENTE QUER? M % 2
      CE QUER VER ESSA PORRA? ("%d", M)
    BIRL
  BIRL
BIRL
`;

const continueCode = `
HORA DO SHOW
  MAIS QUERO MAIS (MONSTRO M = 0; M < 5; M++)
    ELE QUE A GENTE QUER? M % 2
      VAMO MONSTRO
    BIRL
    CE QUER VER ESSA PORRA? ("%d", M)
  BIRL
BIRL
`;

const breakCode = `
HORA DO SHOW
  MAIS QUERO MAIS (MONSTRO M = 0; M < 20; M++)
    ELE QUE A GENTE QUER? M == 13
      CE QUER VER ESSA PORRA? ("É TREZE PORRA")
      SAI FILHO DA PUTA
    BIRL
  BIRL
BIRL
`;

describe('loops', function() {
  describe('NEGATIVA BAMBAM', function() {
    it('should return correct code for while', function() {
      // Arrange, Act
      const jsCode = birl.birlToJs(whileCode);

      // Assert
      jsCode.should.be.equal('var X = 5;\n\nwhile (X > 2) {\n  X -= 1;\n}');
    });

    it('should return correct code for for loop', function() {
      // Arrange, Act
      const jsCode = birl.birlToJs(forCode);

      // Assert
      jsCode.should.be.equal('var M = 0;\n\nfor (M = 0; M < 5; M++) {\n  console.log("%d", M);\n}');
    });

    it('should return correct code for for loop with variable declaration', function() {
      // Arrange, Act
      const jsCode = birl.birlToJs(forCodeWithVarDeclaration);

      // Assert
      jsCode.should.be.equal('for (var M = 0; M < 5; M++) {\n  if (M % 2) {\n    console.log("%d", M);\n  }\n}');
    });

    it('should return correct code on for loop with continue', function() {
      // Arrange, Act
      const jsCode = birl.birlToJs(continueCode);

      // Assert
      jsCode.should.be.equal('for (var M = 0; M < 5; M++) {\n  if (M % 2) {\n    continue;\n  }\n\n  console.log("%d", M);\n}');
    });

    it('should return correct code on for loop with break', function() {
      // Arrange, Act
      const jsCode = birl.birlToJs(breakCode);

      // Assert
      jsCode.should.be.equal('for (var M = 0; M < 20; M++) {\n  if (M == 13) {\n    console.log("\\xC9 TREZE PORRA");\n    break;\n  }\n}');
    });
  });
});