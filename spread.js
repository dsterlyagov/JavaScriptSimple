max(1,3);
max(1,2,3,4,455,6);
function max(...numbers) {
    console.log(numbers);

}

const arr1 = [1, 2, 3];
const arr2 = [4, 7, 1];
const res = Math.max(...arr1, ...arr2);
console.log(res);
const arr3 = [3, 56, 11];
const arr4 = [4, 7 ,2 ];
const shallowCopy = [...arr3, ...arr4, 41]
console.log(shallowCopy);