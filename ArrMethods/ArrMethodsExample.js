const people = [
    {name: 'Dmitry', age: 40, budget: 40000},
    {name: 'Elena',  age: 14, budget: 23000},
    {name: 'Igor',   age: 46, budget: 50000},
    {name: 'Michael', age: 22, budget: 22000},
    {name: 'Vasilisa', age: 23, budget: 10000},
    {name: 'Victoria', age: 36, budget: 2300},

];


//===============
const  newPeopleFinal = people
    .filter(person=>person.budget > 3000)
    .map(person =>{
        return{
            info: `${person.name} (${person.age})`,
            budget: person.budget
        }
    });
console.log(newPeopleFinal);

//====================
const amountNew = people
    .filter(person => person.budget > 3000)
    .map(person =>{
        return {
            info: `${person.name} (${person.age})`,
            budget: person.budget
        }
    })
    .reduce((total, person) => total+ person.budget,0);
console.log(amountNew);

