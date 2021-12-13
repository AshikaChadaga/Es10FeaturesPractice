//Gives access to global objects like windows

//Accessing global array constructor
console.log(globalThis.Array(0, 1, 2));

//Similar to window.v = {value : true} in ES10 
globalThis.v = { value: true };
console.log(globalThis.v);