const pegjs = require('pegjs');
const fs = require('fs');
const generate = require('babel-generator').default;

const grammar = fs.readFileSync('./birl.peg', 'utf8');

const birl = pegjs.generate(grammar);
const ast = birl.parse(
`
HORA DO SHOW
CE QUER VER ESSA PORRA?("Hello", "jdaosj")
BIRL
`);

ast.program.body = ast.program.body.filter(line => typeof(line) === 'object' );
console.log(JSON.stringify(ast, null, 2));
console.log(generate(ast));
