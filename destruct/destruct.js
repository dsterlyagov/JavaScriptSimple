function calcValues(a, b) {
    return[
        a+b,
        undefined,
        a*b,
        a/b
    ]
}
const [sum,sub='Вычитания нет', mult,...other]= calcValues(42, 10)
//const sum = result[0]
//const sub = result[1]
//const [sub, sum] = result;
console.log(sum, sub, mult, other);
