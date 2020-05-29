class ProxyClass {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

}

const PersonProxy = new Proxy(ProxyClass, {
    construct(target, argArray) {
        console.log('Construct....')
        return new Proxy(new target(...argArray), {
            get(t, prop){
                console.log(`Getting prop "${prop}"`)
                return t[prop];
            }
        })
    }
})

const p = new PersonProxy('Maxim', 30);

console.log(p.name);