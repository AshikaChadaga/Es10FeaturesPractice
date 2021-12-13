//stable sorting algorithm is when two objects with equal keys appear in the same order in the sorted output as they appear in the unsorted input
const fruits = [
    { name: 'Orange', units: 13 },
    { name: 'Apple', units: 12 },
    { name: 'Water Melon', units: 12 },
    { name: 'Rambutan', units: 11 },
    { name: 'Mangosteen', units: 11 },
    { name: 'Litchi', units: 10 },
    { name: 'banana', units: 10 },
];

const sortCriteria = (fruit1, fruit2) => fruit1.units - fruit2.units;
const sortedFruits = fruits.sort(sortCriteria);

console.log(sortedFruits);