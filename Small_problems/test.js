const specialChar = ['!','@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', ':','<', '>', '?', '~', '-', '=', '[', ']', '{', '}'];

function cleanUp(string) {
 console.log(string.includes(specialChar) ? 'Yes' : 'No');
}

cleanUp("---what's my +*& line?"); 
