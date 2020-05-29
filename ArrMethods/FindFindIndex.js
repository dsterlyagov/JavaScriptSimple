const people = [
    {name: 'Dmitry', age: 40, budget: 40000},
    {name: 'Elena',  age: 14, budget: 23000},
    {name: 'Igor',   age: 46, budget: 50000},
    {name: 'Michael', age: 22, budget: 22000},
    {name: 'Vasilisa', age: 23, budget: 10000},
    {name: 'Victoria', age: 36, budget: 2300},

];


//Find
const dmitry = people.find(person=>person.name==='Dmitry');
console.log(dmitry);
//FindIndex
const dmitryIndex = people.findIndex(person=>person.name==='Dmitry');
console.log(dmitryIndex);