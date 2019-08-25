require('chai').should();
const birl = require('../birl.js');

const simpleIfCode = `
HORA DO SHOW
ELE QUE A GENTE QUER? 3 > 2
    FRANGO f = "f"
BIRL
BIRL
`;

const ifElseCode = `
HORA DO SHOW
ELE QUE A GENTE QUER? 3 > 2
    FRANGO f = "f"
NAO VAI DAR NAO
    2 + 2
BIRL
BIRL
`;

const ifElseIfCode = `
HORA DO SHOW
ELE QUE A GENTE QUER? 3 > 2
    FRANGO f = "f"
QUE NAO VAI DAR O QUE? 4 < 2
    2 + 2
BIRL
BIRL
`;

const ifElseIfElseCode = `
HORA DO SHOW
ELE QUE A GENTE QUER? 3 > 2
    FRANGO f = "f"
QUE NAO VAI DAR O QUE? 4 < 2
    2 + 2
NAO VAI DAR NAO
    2 + 2
BIRL
BIRL
`;

const nestedIfElseCode = `
HORA DO SHOW
ELE QUE A GENTE QUER? 3 > 2
    ELE QUE A GENTE QUER? 3 > 2
        FRANGO f = "f"
    QUE NAO VAI DAR O QUE? 4 < 2
        5 + 3
    NAO VAI DAR NAO
        2 + 1
    BIRL
NAO VAI DAR NAO
    FRANGO f = "z"
BIRL
BIRL
`;


describe('if_expression', function() {
  describe('ELE QUE A GENTE QUER?', function() {
    it('should return correct code for simple if', function() {
      // Arrange, Act
      const jsCode = birl.birlToJs(simpleIfCode);

      // Assert
      jsCode.should.be.equal('if (3 > 2) {\n  var f = "f";\n}');
    });

    it('should return correct code for if -> else code', function() {
      // Arrange, Act
      const jsCode = birl.birlToJs(ifElseCode);

      // Assert
      jsCode.should.be.equal('if (3 > 2) {\n  var f = "f";\n} else {\n  2 + 2;\n}');
    });

    it('should return correct code for if -> else if code', function() {
      // Arrange, Act
      const jsCode = birl.birlToJs(ifElseIfCode);

      // Assert
      jsCode.should.be.equal('if (3 > 2) {\n  var f = "f";\n} else if (4 < 2) {\n  2 + 2;\n}');
    });

    it('should return correct code for if -> else if -> else code', function() {
      // Arrange, Act
      const jsCode = birl.birlToJs(ifElseIfElseCode);

      // Assert
      jsCode.should.be.equal('if (3 > 2) {\n  var f = "f";\n} else if (4 < 2) {\n  2 + 2;\n} else {\n  2 + 2;\n}');
    });

    it('should return correct code for nested if else code', function() {
      // Arrange, Act
      const jsCode = birl.birlToJs(nestedIfElseCode);

      // Assert
      jsCode.should.be.equal('if (3 > 2) {\n  if (3 > 2) {\n    var f = "f";\n  } else if (4 < 2) {\n    5 + 3;\n  } else {\n    2 + 1;\n  }\n} else {\n  var f = "z";\n}');
    });
  });
});