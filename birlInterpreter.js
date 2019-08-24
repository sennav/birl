function executeLine(lineAst) {
  if (lineAst === 'break line') {
    return;
  }
  if (lineAst.value.statement === 'print_statement') {
    console.log(lineAst.value.args.join(' '));
  }
}

module.exports = {
  executeLine,
}
