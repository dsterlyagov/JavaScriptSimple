const animal ={
    say: function () {
        console.log(this.name, 'goes', this.voice);
    }
}

const dog = {
    name: 'dog',
    voice: 'woof',
};
Object.setPrototypeOf(dog, animal);
const cat = {
    name: 'cat',
    voice: 'meow',
};
Object.setPrototypeOf(cat, animal);

dog.say();
cat.say();