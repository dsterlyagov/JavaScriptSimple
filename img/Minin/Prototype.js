

let  person = new Object({
    name: 'Maxim',
    age: 25,
    greet: function () {
        console.log('Greet')
    }
});

console.log(person)

Object.prototype.sayHello = function () {
        console.log('Hello');
}
console.log(person.sayHello());
const lena = Object.create(person);
console.log(lena.name);