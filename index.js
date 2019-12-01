#! /usr/bin/env node
const fs = require('fs');
const { birlToJs } = require('./birl.js');
const commander = require('commander');

function main() {
  let birlFilepath;
  const program = new commander.Command();

  program
    .version('BIRL 1.0.0')
    .option('-j, --javascript', 'MOSTRA ESSE JAVASCRIPT TREZE!')
    .arguments('<SEU_PROGRAMA_FRANGO>')
    .action((filename) => {
      birlFilepath = filename;
    });
  program.parse(process.argv);

  if (!birlFilepath) {
    program.outputHelp();
    process.exit(1);
  }

  const birlCode = fs.readFileSync(birlFilepath, 'utf8');
  const jsCode = birlToJs(birlCode);

  if (program.javascript) {
    console.log(jsCode);
    return;
  }
  eval(jsCode);
}

main();
