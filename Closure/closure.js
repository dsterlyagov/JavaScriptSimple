function createCalcFunction(n) {
    return function () {
console.log(1000*n)
    }
}

const calc = createCalcFunction(42);
calc();

function createIncrementor(n) {
return function (num) {
    return n+ num;
}
}

const addOne = createIncrementor(1);
const addTen = createIncrementor(10);

console.log(addOne(10));
console.log(addOne(40));

console.log(addTen(10))
console.log(addTen(41));

function urlGenerator(domain) {
    return function (url, apikey, numberPage, quantity) {
        return `https://${url}.${domain}?=${apikey}&${numberPage}&${quantity}`
    }
}

const comUrl = urlGenerator('com');

for(let i = 0; i<50;i++){
   console.log(comUrl('google','4B12BBCE-D7AE-4B82-BE7A-5F8117EDB528', i,15));
}
console.log(comUrl('google','4B12BBCE-D7AE-4B82-BE7A-5F8117EDB528', 1,15));
//console.log(comUrl('netflix'));