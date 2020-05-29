const greeter = {
    greet:  (name) =>{
        console.log('Hello', name);
    },
    greetAll: function (names) {
        names.forEach( (name) =>{
            this.greet(name);

        });

    }
}
greeter.greetAll(['Bob', 'Mark', 'Pete']);