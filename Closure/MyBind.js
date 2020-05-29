function bind(context, fn) {
    return function (...args) {
        fn.apply(context, args);
    }

}

function logPerson() {
    console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)

}

const person1 = {name: 'Michael', age: 32, job: 'Frontend'}
const person2 = {name: 'Helen', age:30, job: 'SMM'}

bind(person1, logPerson)()
bind(person2, logPerson)()