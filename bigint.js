//The variables can now represent 2^53 numbers and not just max out at 9007199254740992.
let maxNumber = Number.MAX_SAFE_INTEGER;
console.log(maxNumber + ' = ' + typeof maxNumber) // 9007199254740991 = number
maxNumber = maxNumber + 1
console.log(maxNumber + ' = ' + typeof maxNumber) //9007199254740992 = number
maxNumber = maxNumber + 1
console.log(maxNumber + ' = ' + typeof maxNumber) // 9007199254740992 = number