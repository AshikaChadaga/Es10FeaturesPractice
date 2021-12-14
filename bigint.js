//The variables can now represent 2^53 numbers and not just max out at 9007199254740992.
let maxNumber = Number.MAX_SAFE_INTEGER;
console.log(maxNumber + ' = ' + typeof maxNumber) // 9007199254740991 = number
maxNumber = maxNumber + 1
console.log(maxNumber + ' = ' + typeof maxNumber) //9007199254740992 = number
maxNumber = maxNumber + 1
console.log(maxNumber + ' = ' + typeof maxNumber) // 9007199254740992 = number

//Using BigInt
let bigIntegerValue=117823928394820384239n;
let bigIntegerValue1= BigInt(12312312123123n) 
let bigIntegerValue2= BigInt(5675675);// equals 5675675n
let bigIntegerValue3= BigInt("77878"); 

//Bigint With Arithmatic operators
console.log(1n + 2n); 
console.log(10n - 2n); 
console.log(10n * 2n);
console.log(10n / 3n);
console.log(10n % 2n); 

//Equality and comparision operators
console.log(1n === 1); 
console.log(1n == 1); 
console.log(5n < 1); 
console.log(5n < 1n); 
console.log(5n > 1); 
console.log(5n > 1n); 

//Bigint and boolean operators
console.log(Boolean(12n)); 
console.log(Boolean(0n)); 
console.log(0n || 34n); 
console.log(0n && 34n);