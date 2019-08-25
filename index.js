const fs = require('fs');
const { birlToJs } = require('./birl.js');

function main() {
  const birlFilepath = process.argv[2];
  const birlCode = fs.readFileSync(birlFilepath, 'utf8');
  const jsCode = birlToJs(birlCode);
  eval(jsCode);
}

main();
