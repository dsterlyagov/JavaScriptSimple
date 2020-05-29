const person = {
    name: 'Dmitry',
    age: 40,
    job: 'Frontend'
}


const op = new Proxy(person, {
    get(target, prop){
      //  console.log('Target', target);
      //  console.log('Prop', prop)
        if(!(prop in target)){
            return prop
                .split('_')
                .map(p=> target[p])
                .join(' ')
        }
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


console.log(op.name)
console.log(op.name_age_job);