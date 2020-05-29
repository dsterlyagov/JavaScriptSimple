const person = {
    name: 'Dmitry',
    age: 40,
    job: 'Frontend'
}


const op = new Proxy(person, {
    get(target, prop){
        console.log('Target', target);
        console.log('Prop', prop)
        return target[prop]
    },
    set(target, prop, value){
      if(prop in target){
          target[prop] = value
      } else {
          throw new Error(`No ${prop} field in target`)
      }

    },
    has(target, prop) {
        return ['age', 'name', 'job'].includes(prop)
    },
    deleteProperty(target, prop) {
        console.log('Deleting.... ', prop);
        delete target[prop]
        return true;
    }
});

console.log(op.name);

op.name = 'Vasya';
console.log(op);

console.log( 'name' in op)

delete op.age
console.log(op)