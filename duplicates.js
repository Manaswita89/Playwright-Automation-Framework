
let arr=[1,2,3,3,4,5,6,7,8,9,9];
let arr1=[11,12,13,13,14];

let duplicates=[...arr,...arr1];

console.log(duplicates);
console.log([...new Set(duplicates)]);
