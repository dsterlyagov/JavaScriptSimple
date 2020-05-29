const animal = {
    say: function(){
        console.log(this.name, 'goes', this.voice);
        return true;
    }
};
function createAnimal(name, voice) {
    const result = Object.create(animal);
    result.name = name;
    result.voice = voice;
    return result;

}
const dog = createAnimal('Dog', 'woof');
const cat = createAnimal('Cat', 'meayu');
console.log(dog.say());
console.log(cat.say());