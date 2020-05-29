//Hidden propetries
//Создаем скрытое поле с помощью прокси
const withHiddenProps = (target, prefix = '_') =>{
    return new Proxy(target, {
        has: (obj, prop) => prop in obj && !prop.startsWith(prefix),
        ownKeys: obj => Reflect.ownKeys(obj)
            .filter(p => !p.startsWith(prefix)),
        get: (obj, prop, receiver) => (prop in receiver ? obj[prop]: void 0)

    })
}

const data = withHiddenProps({
    name: 'Dmitry',
    age: 25,
    _uid: '122334'
});
console.log(data.name);
