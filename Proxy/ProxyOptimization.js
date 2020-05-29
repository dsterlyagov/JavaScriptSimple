//Optimization
const userData = [
    {id:1, name: 'Dmitry', age: 40, budget: 40000},
    {id:2, name: 'Elena',  age: 14, budget: 23000},
    {id:33, name: 'Igor',   age: 46, budget: 50000},
    {id:4, name: 'Michael', age: 22, budget: 22000},
    {id:5, name: 'Vasilisa', age: 23, budget: 10000},
    {id:6, name: 'Victoria', age: 36, budget: 2300},

];

const index = {};
 userData.forEach(i => (index[i.id] =i));
//console.log(index);


const IndexedArray = new Proxy(Array, {
    construct(target,[args]) {
        const index = {};
        args.forEach(item=>(index[item.id] = item))
        return new Proxy(new target(...args),{
            get(arr, prop){
                    switch (prop) {
                        case 'push': return item =>{
                            index[item.id] = item
                            arr[prop].call(arr,item)
                        }
                        case 'findById': return id => index[id]
                        default: arr[prop]
                    }
            }
        })
    }
});


const users = new IndexedArray([
    {id:33, name: 'Igor',   age: 46, budget: 50000},
    {id:4, name: 'Michael', age: 22, budget: 22000},
    {id:5, name: 'Vasilisa', age: 23, budget: 10000},
    {id:6, name: 'Victoria', age: 36, budget: 2300}
]);

console.log(users.findById(33));