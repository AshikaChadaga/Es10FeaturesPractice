//toString() method returns a string representing the source code of the function
let names = [];
function addNames(name) {
    names = [...names, name];
}
console.log(addNames.toString());