const people = [
    {name: 'Dmitry', age: 40, budget: 40000},
    {name: 'Elena',  age: 14, budget: 23000},
    {name: 'Igor',   age: 46, budget: 50000},
    {name: 'Michael', age: 22, budget: 22000},
    {name: 'Vasilisa', age: 23, budget: 10000},
    {name: 'Victoria', age: 36, budget: 2300},

];
//oldSchool
// for(let i=0; i<people.length; i++){
//     console.log(people[i])
// }
//
// for (let person of people){
//     console.log(person)
// }

//forEach

// people.forEach(person=>
// {{...}
//
// }
 const peopleNew  =people.forEach(arr =>{
    //const [{name, age, budget}] =people;
    //let obj ={budget};
    return arr;
})


// obj.push = [].push;
//
// obj.push(1);
console.log(peopleNew);