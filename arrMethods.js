const people = [
    {name: 'Dmitry', age: 40, budget: 40000},
    {name: 'Elena',  age: 14, budget: 23000},
    {name: 'Igor',   age: 46, budget: 50000},
    {name: 'Michael', age: 22, budget: 22000},
    {name: 'Vasilisa', age: 23, budget: 10000},
    {name: 'Victoria', age: 36, budget: 2300},

];

// for(let i=0; i<people.length; i++){
//     console.log(people[i])
// }
//
// for (let person of people){
//     console.log(person)
// }

//forEach

//people.forEach(person=>console.log(person))
//Map
const newPeople = people.map(person=>`${person.name}(${person.age})`);
//console.log(newPeople);

//Filter
// const adults= [];
// for(let i= 0; i< people.length; i++){
//     if(people[i].age >=18){
//         adults.push(people[i])
//     }
// }
// console.log(adults);

//const adults = people.filter(person=> person.age >=18)
//console.log(adults);

//Reduce
// let amount = 0;
// for(let i=0; i< people.length;i++){
//     amount +=people[i].budget;
// }
// console.log(amount);

const amount = people.reduce((total, person)=>  total + person.budget,0)
console.log(amount);

//Find
const dmitry = people.find(person=>person.name==='Dmitry');
console.log(dmitry);
//FindIndex
const dmitryIndex = people.findIndex(person=>person.name==='Dmitry');
console.log(dmitryIndex);
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