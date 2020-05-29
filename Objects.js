const x = 10;
const y = 30;
const point ={
    x: x,
    y: y,
    draw: function () {
        return this.x;
    }
}

console.log(point);

const p = {
    x,
    y,
    draw(ctx){
        return this.y
    }
}
console.log(p.draw());

const prefix = '_blah_';
const  data = {
    [prefix+ 'name']: 'Bob',
    [prefix+ 'age']: 32
}
console.log(data);