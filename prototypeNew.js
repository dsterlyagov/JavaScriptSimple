const animal = {
    say: function () {
        console.log(this.name, 'goes', this.voice);
    }
};
const dog = Object.create(animal);
dog.name = 'dog';
dog.voice = 'woof';
dog.say();