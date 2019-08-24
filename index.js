const pegjs = require('pegjs');
const fs = require('fs');
const birlInterpreter = require('./birlInterpreter');

const grammar = fs.readFileSync('./birl.peg', 'utf8');

const birl = pegjs.generate(grammar);
const ast = birl.parse(
`
HORA DO SHOW
FRANGO = "a"
"a" + "b"
CE QUER VER ESSA PORRA?("Hello", "jdaosj")
BIRL
`);

console.log(ast.File.program.body);
// ast.forEach(birlInterpreter.executeLine);
