/**
 * 
 * Given are two strings password and password_repeat. Check if the password is secure by the following criteria:
- both passwords must match
- password must be at least 8 chars
- contains at least a number
- contains at lease an uppercase letter
- contains at least a lowercase letter
- contains at least one of these special chars (&$%§-_)

Return true only if all criteria are met, otherwise return false.

 */


function checkPassword(password, password_repeat) {
   // Check if both passwords match
   if (password !== password_repeat) {
    return false;
  }

  // Check if the password meets all criteria
  const regex = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[&$%§_\-]).{8,}$/;
  return regex.test(password);
}


console.log(checkPassword('omvdsse', 'omvdsse'));                        // false
console.log(checkPassword('HUIFDSJHKSADN', 'HUIFDSJHKSADN'));            // false
console.log(checkPassword('YY&glk4Hfi_ffS', 'YY&glk4Hfi_ffS'));          // true
console.log(checkPassword('Joifd$3', 'Joifd$3'));                        // false
console.log(checkPassword('JoFDd$0MY6Ad4', 'JoFDd$0MY6Ad4'));            // true
console.log(checkPassword('JoFDd#0MY6Ad4', 'JoFDd#0MY6Ad4'));            // false
console.log(checkPassword('EY8J62', 'EY8J62'));                          // false
console.log(checkPassword('UR9G1GOF', 'UR9G1GOF'));                      // false
console.log(checkPassword('6BKYT2GY8CX7CFPC', '6BKYT2GY8CX7CFPC'));      // false
console.log(checkPassword('JIOfdsf&fdsflk', 'JIOfdsf&fdsflk'));          // false
console.log(checkPassword('kg4N%sPrX$H', 'kg4N%sPrX$H'));                // true
console.log(checkPassword('ono53a7suikzb3h7', 'ono53a7suikzb3h7'));      // false
console.log(checkPassword('qn%5F', 'qn%5F'));                            // false
console.log(checkPassword('0&J&xxQYmD§kx§k$AO', '0&J&xxQYmD§kx§k$AO'));  // true
console.log(checkPassword('0&J&xxQYmD§kx§k$AO', '0&J&xxQYmD§kx§k$Ao'));  // false
console.log(checkPassword('0#J#xxQYmD#kx#k#AO', '0#J#xxQYmD#kx#k#AO'));  // false