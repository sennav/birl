require('chai').should();
const birl = require('../birl.js');

const memberStringCode = `
HORA DO SHOW
console.bla.log("BIRL")
BIRL
`;

const memberValueCode = `
HORA DO SHOW
console.bla.log(1)
BIRL
`;

const memberIdentifierCode = `
HORA DO SHOW
console.bla.log(x)
BIRL
`;

const memberUnaryCode = `
HORA DO SHOW
console.bla.log(x--)
BIRL
`;

const memberOperationCode = `
HORA DO SHOW
console.bla.log(x -1)
BIRL
`;

const memberCallCode = `
HORA DO SHOW
console.bla.log(console.bla.log("BIRL"))
BIRL
`;

const memberBirlCallCode = `
HORA DO SHOW
console.bla.log(AJUDA O MALUCO TA DOENTE PRINT_BIRL("BIRL"))
BIRL
`;

const memberMultipleArgsCode = `
HORA DO SHOW
console.bla.log(AJUDA O MALUCO TA DOENTE PRINT_BIRL("BIRL"), 1, x, "x")
BIRL
`;

const memberExpressionAlone = `
HORA DO SHOW
console.bla.log
BIRL
`;

const arrayAccess = `
HORA DO SHOW
console.bla.log[1]
BIRL
`;

const multipleCallsAndAccesses = `
HORA DO SHOW
console.bla.log()[1]()[3]()()[4]
BIRL
`;

describe('member berry tests', function() {
  describe('TRAPEZIO DESCENDENTE', function() {
    it('should return correct code calling function on member expression with string', function() {
      // Arrange, Act
      const jsCode = birl.birlToJs(memberStringCode);

      // Assert
      jsCode.should.be.equal('console.bla.log("BIRL");');
    });

    it('should return correct code calling function on member expression with value', function() {
      // Arrange, Act
      const jsCode = birl.birlToJs(memberValueCode);

      // Assert
      jsCode.should.be.equal('console.bla.log(1);');
    });

    it('should return correct code calling function on member expression with unary', function() {
      // Arrange, Act
      const jsCode = birl.birlToJs(memberOperationCode);

      // Assert
      jsCode.should.be.equal('console.bla.log(x - 1);');
    });

    it('should return correct code calling function on member expression with operation', function() {
      // Arrange, Act
      const jsCode = birl.birlToJs(memberIdentifierCode);

      // Assert
      jsCode.should.be.equal('console.bla.log(x);');
    });

    it('should return correct code calling function on member expression with unary', function() {
      // Arrange, Act
      const jsCode = birl.birlToJs(memberUnaryCode);

      // Assert
      jsCode.should.be.equal('console.bla.log(x--);');
    });

    it('should return correct code calling function on member expression with function call', function() {
      // Arrange, Act
      const jsCode = birl.birlToJs(memberCallCode);

      // Assert
      jsCode.should.be.equal('console.bla.log(console.bla.log("BIRL"));');
    });

    it('should return correct code calling function on member expression with birl function call', function() {
      // Arrange, Act
      const jsCode = birl.birlToJs(memberBirlCallCode);

      // Assert
      jsCode.should.be.equal('console.bla.log(PRINT_BIRL("BIRL"));');
    });

    it('should return correct code calling function on member expression with birl function call', function() {
      // Arrange, Act
      const jsCode = birl.birlToJs(memberMultipleArgsCode);

      // Assert
      jsCode.should.be.equal('console.bla.log(PRINT_BIRL("BIRL"), 1, x, "x");');
    });

    it('should return correct code accessing member expression', function() {
      // Arrange, Act
      const jsCode = birl.birlToJs(memberExpressionAlone);

      // Assert
      jsCode.should.be.equal('console.bla.log;');
    });

    it('should return correct code accessing array', function() {
      // Arrange, Act
      const jsCode = birl.birlToJs(arrayAccess);

      // Assert
      jsCode.should.be.equal('console.bla.log[1];');
    });

    it('should return correct code for multiple calls and accesses', function() {
      // Arrange, Act
      const jsCode = birl.birlToJs(multipleCallsAndAccesses);

      // Assert
      jsCode.should.be.equal('console.bla.log()[1]()[3]()()[4];');
    });
  });
});