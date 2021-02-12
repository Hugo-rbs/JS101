function logInBox(str) {
 let horizontalRule = `+${'-'.repeat(str.length + 2)}+`;
 let verticalRule = `|${' '.repeat(str.length + 2)}|`;
 console.log(horizontalRule);
 console.log(verticalRule);
 console.log(`| ${str} |`);
 console.log(verticalRule);
 console.log(horizontalRule);
}


logInBox('Is it working?');