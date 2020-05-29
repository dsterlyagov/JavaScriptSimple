const set = new Set([1,2,3,3,4,5,6,6,6])
console.log(set)
set.add(10)
    .add(20)
    .add(20)
    .add(30)
//console.log(set)
//console.log(set.has(42))
//console.log(set.size)
//console.log(set.delete(1))
//set.clear()
//console.log(set.size)
// console.log(set.values());
//
// for(let key of set){
//     console.log(key)
// }

//=======================
    const arr1 = [1,1,1,2,3,2,2,3,3,4,4,4,5,55,6,6,6,7,7];
function unigueValues(array) {
   return[...new Set(array)];

}
console.log(unigueValues(arr1));
