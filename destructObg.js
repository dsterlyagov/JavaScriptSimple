const person ={
    name: {
        firstName: 'Peter',
        lastName: 'Smith'
    },
    age: 27
}
const {name: {firstName: first, lastName: last}} = person;
console.log(first, last);

function connect({
    host = 'localhost',
    port = 12345,
    user = 'guest'
                 } = {}) {

    console.log('user: ', user, 'port: ', port, 'host: ', host);
}

connect({port : 1111});
connect();
const dict = {
    duck: 'quack',
    dog: 'wuff',
    mouse: 'squeak'
};
const {duck, ...otherAnimals} = dict;
console.log(otherAnimals);