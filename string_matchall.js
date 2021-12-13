//MatchAll : returns an iterator of all results matching a string against a regular expression
const string = 'Magic hex numbers : DEADBEEF CAFE';
const regex = /\b\p{ASCII_Hex_Digit}+\b/gu;

//string.match - finds words that contain hexadecimal digits only
console.log('Using string.match() : ');
for (let match of string.match(regex)) {
    console.log(match);
}

//string.matchAll - gives full information for each individual match
console.log('Using string.matchAll() : ');
for (let match of string.matchAll(regex)) {
    console.log(match);
}