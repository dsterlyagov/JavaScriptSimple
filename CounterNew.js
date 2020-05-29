class CounterNew {
    constructor(){
        this.count = 0;
        this.increment = () =>{
            this.count += Counter.incrementStep;
        }
    }
}
CounterNew.incrementStep = 2;
CounterNew.incrementAll = function (arr) {
    arr.forEach((c) => c.increment());
}