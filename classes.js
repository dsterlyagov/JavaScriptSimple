class Animal {
constructor(name, voice){
    this.name = name;
    this.voice = voice;
}
say(){
    console.log(this.name, 'goes', this.voice);
}
}
class Bird extends Animal {
    constructor(name, voice, canFly){
        super(name, voice);
        super.say()
        this.canFly = canFly;
        console.log()
    }
    say() {
        console.log('Birds dont like to talk');
    }

}

const duck = new Bird('Duck', 'quack', true);
duck.say();