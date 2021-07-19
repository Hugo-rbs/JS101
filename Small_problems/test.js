let passcode = ['11', 'jz5', 'hQf3', 'lS2a', 'nMnP1'];
// let joinedPassword = '';
// for (let idx = 0; idx < passcode.length; idx += 1) {
//   if (idx > 0) {
//     joinedPassword += '-';
//   }
//   joinedPassword += passcode[idx];
// }

let joinedPassword = passcode.join('-');

console.log(joinedPassword)