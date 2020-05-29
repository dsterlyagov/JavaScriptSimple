function hello() {
    console.log('Hello', this)

}
//hello()

const person = {
    name: 'Dmitry',
    age: 40,
    sayHello: hello,
    sayHelloWindow: hello.bind(this),
    logInfo: function (job, phone) {
        console.group(`${this.name} info:`)
        console.log(`Name is ${this.name}`)
        console.log(`Age is ${this.age}`)
        console.log(`Job is ${job}`)
        console.log(`Phone is ${phone}`)
        console.groupEnd()
    }
}
person.sayHelloWindow();
person.logInfo();

const lena = {
    name: 'Elena',
    age: 23
}
const fnLenaInfoLog = person.logInfo.bind(lena, 'frontend', '8-999-123-12-23');
fnLenaInfoLog();

person.logInfo.call(lena, 'frontend', '8-999-123-12-23');
person.logInfo.apply(lena, ['frontend', '8-999-123-12-23']);

//======================================
const array = [1,2,3,4,5]
function multyBy(arr, n) {
    return arr.map((i)=> i*n)
}
console.log(multyBy(array,4))

Array.prototype.multBy = function (n) {
    return this.map(function (i) {
    return i*n;
    })
}
console.log(array.multBy(2));
