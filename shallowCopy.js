const person = {
    name: 'Bob',
    friends: ['Mark', 'Jacob']
};

const shallowCopy = Object.assign({}, person);
person.friends.push('Jane');
shallowCopy.friends.push('dimon');
console.log(shallowCopy);
console.log(person);