const path = require('path');
const pegjs = require('pegjs');
const fs = require('fs');
const generate = require('babel-generator').default;

const grammar = fs.readFileSync(path.resolve(__dirname, 'birl.peg'), 'utf8');
const birl = pegjs.generate(grammar);

function getBirlAST(birlCode) {
  const ast = birl.parse(birlCode);
  ast.program.body = ast.program.body.filter(line => typeof(line) === 'object' );
  return ast;
}

function birlToJs(birlCode) {
  const ast = getBirlAST(birlCode);
  return generate(ast).code;
}

module.exports = {
  birlToJs,
};
