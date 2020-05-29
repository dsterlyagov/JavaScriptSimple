var arr = [
    {name: 'width',geo: {geo1:1, geo2:2}, value: 10, age:45},
    {name: 'height',geo: {geo1:1, geo2:2}, value: 20, age:33},
];

function f(arr) {
    let obj = {};
   arr.forEach(({name,geo:{geo1, geo2}, value}) => {

       obj['geo'] = geo2;
       obj[name] = value;});
 return obj;
}
console.log(f(arr));
