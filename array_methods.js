//Array.flat(depth)
const name = [['Ashika', 'Sagarika'], ['Jake Peralta', 'Scully'], ['Deku', 'Bakugo'] ];
const flatName = name.flat();

console.log("Flatten to Depth 1 : ", flatName);

const names = [['Ashika', 'Sagarika'], ['Jake Peralta', "Scully", ['Deku', ['Bakugo'], 'All Might']]];
const flatNameInfinity = names.flat(Infinity);
console.log("Flatten to Depth Infinity : ", flatNameInfinity);

//Array.flatMap()
const personName = ['Ashika', 'Sagarika', 'Jake Peralta', 'Scully'];
const job = ['engineer', 'doctor', 'detective', 'policeman'];

const mappedOnly = personName.map((name, index) => [name, job[index]]);
console.log("Using Map Function : ", mappedOnly);

const mappedAndFlatten = personName.flatMap((name, index) => [name, job[index]]);
console.log("Using FlatMap Function : ", mappedAndFlatten);
