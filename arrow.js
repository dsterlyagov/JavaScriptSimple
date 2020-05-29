const arr = ['1', '2', '2', '3', '13'];
const res = arr
    .map((el) =>parseInt(el))
    .filter((num) => num%2)
    .reduce((max, value)=> Math.max(max, value),0);
console.log(res);