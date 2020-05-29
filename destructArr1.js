const dict = {
    duck: 'quack',
    dog: 'wuff',
    mouse: 'squeak',
    hamster: 'squeak'
};
const res = Object.entries(dict)
    .filter(([, value])=> value ==='squeak')
    .map(([key])=> key);

console.log(res);

const res1 = Object.entries(dict)

    .map(([key])=> key);

console.log(res1);