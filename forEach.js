const arraySparse = [1, 3, , 7];
let numCallbackRuns = 0;

arraySparse.forEach((element)=>{
    console.log(element);
    numCallbackRuns++;
})
console.log("numCallbackRuns ", numCallbackRuns);

const items = ['item1', 'item2', 'item3'];
const copy = [];

items.forEach((item)=>{
    copy.push(item);
})

console.log(copy);

function logArrayElements(element, index, array) {
    console.log('a['+index+'] =' + element);

}
[2,5,,9].forEach(logArrayElements);

function Counter() {
 this.sum=0;
 this.count = 0;

}

Counter.prototype.add = function (array) {
        array.forEach((entry) => {
            this.sum += entry;
            ++this.count;
        }, this)
}

const obj = new Counter();
obj.add([2,5,9]);
console.log(obj.count);
console.log(obj.sum);


const THRESHOLD = 12;
const v = [5, 2, 16, 4, 3, 18, 20];
let res;

res =v.every(function (element, index, array) {
    console.log('element: ', element);
    if(element >= THRESHOLD){
        return false;
    }
    return true;

});

res = v.some(function (element,index, array) {
                console.log('element: ', element);
                if(element>=THRESHOLD){
                    return true;
                }
                return false;
});

console.log('res ', res);
