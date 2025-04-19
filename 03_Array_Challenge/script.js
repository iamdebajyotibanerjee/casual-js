const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];
const arr3 = arr2.slice(1);

console.log(`Challenge 2 - The concatenated array is = ${arr1.concat(arr3)}`);

arr1.push(6);
arr1.unshift(0);
arr1.reverse();

console.log(`Challenge 1 - The mutated first array is = ${arr1}`);
