const fruits = { lemon: '1', pineapple: '2', banana: '3' };
const entries = Object.entries(fruits);
console.log("Object.entries : ", entries);

//Transforms list of key and value pairs into object
const fromEntries = Object.fromEntries(entries);
console.log("Object.fromEntries : ", fromEntries);