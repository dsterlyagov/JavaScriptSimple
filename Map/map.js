const obj = {
    name: 'Dmitry',
    age: 40,
    job: 'fullstack'
};


const entries = [
    ['name', 'Dmitry'],
    ['age', 40],
    ['job', 'Fullstack']
];

//console.log(Object.entries(obj));
//console.log(Object.fromEntries(entries));

const map = new Map(entries);
//console.log(map.get('job'))
map
    .set('newField', 42)
    .set(obj, 'Value of object')
map
    .delete('job')
//console.log(map.has('job'))
//console.log(map);
//console.log(map.size);
//console.log(map.clear())

// for (let [key, value] of map){
//     console.log(key, value)
// }
//
// for (let val of map.values()){
//     console.log(val);
// }
// for (let key of map.keys()){
//     console.log(key);
// }
//
// map.forEach((val, key, m)=>{
//     console.log(val, key);
// });
//
const array = [...map];
const array1 = Array.from(map);
console.log(array);
 console.log(array1);

const users = [
    {name: 'Elena'},
    {name: 'Alex'},
    {name:'Irina'}
];

const visits = new Map()

visits
    .set(users[0], new Date())
    .set(users[1], new Date(new Date().getTime()+1000*60))
    .set(users[2], new Date(new Date().getTime()+1500*60))

function lastVisit(user) {
    return visits.get(user)

}

console.log(lastVisit(users[2]))