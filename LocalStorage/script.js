const myNumber = 42;

const object = {
    name: 'Max',
    age: 20
}
console.log(localStorage.getItem('number'));
localStorage.setItem('number', myNumber);
console.log(localStorage.getItem('number'));
//localStorage.setItem('person', JSON.stringify(object))
const raw = localStorage.getItem('person');
const person  = JSON.parse(raw)
person.name = 'Vladilen'
console.log(person);
window.addEventListener('storage', event =>{
    console.log(event)
})

//localStorage.setItem('temp', Date.now().toString())