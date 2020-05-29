const log = text => `log: ${text}`

console.log(log('papa'));
const fp = new Proxy(log, {
    apply(target, thisArg, argArray) {
        console.log('Calling fn...')
        return target.apply(thisArg, argArray).toUpperCase()
    }
})
console.log(fp('fads'))
