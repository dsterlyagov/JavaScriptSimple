const person = {
    name: 'Max',
    age: 20,
    address:{
        country: 'Russia',
        city: 'Moscow',

    }
}

const person1 = {
    name: 'Vova',
    age: 26,
    address:{
        country: 'Russia',
        city: 'Sankt-Petersburg',

    }
}

const {name:namePerson, ...info} = person1
const {name: firstName, age, car = 'Машины нет', address: {city: homeTown, country}} = person;
console.log(firstName, age, car, homeTown, country);
console.log(namePerson, info)

function logPerson({name, age}) {
    console.log(name+ ' '+ age)

}
logPerson(person);