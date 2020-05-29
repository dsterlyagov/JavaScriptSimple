class Header {
    constructor(img, h1, h2){
        this.src = img;
        this.h1 = h1;
        this.h2 = h2;
    }
    render(x){
        let out = '';
        out +=`<img src="" alt="" class="logo">`;
        out += `<h1>${this.h1}</h1>`;
        out += `<h2>${this.h2}</h2>`;
        document.getElementById(x).innerHTML = out;
    }
    static hello(a){
        console.log('work static method'+a);
        return a;
    }
}

const img = 'img/footer_logo.png';
let header = new Header(img, 'Hello', 'world');
console.log(header);
header.render('header');

class Header2 extends Header {
constructor(img, h1, h2, hero){
    super(img, h1, h2)
    this._hero = hero;

}
get hero(){
    return this._hero;
}
set hero(c){
    this._hero = c;
}
}

const  header2 = new Header2(img,'new hello', 'new site', 'gogogogogogo');
header2.render('header-new');
console.log(header2);
header2.hero = 'Google';
console.log(Header2.hello('hi'));
console.log(header2.hero);

let a = {
    a1: 'object a',
    a2: function () {
        console.log(this.a1);
        return true;
    },
    _a3: 5,
    set a3(x){
        this._a3 = x;
    }
}


let b = {
    b1: 'object b'
}
//b.__proto__ = a;
Object.setPrototypeOf(b, a);

console.log(a);
console.log(b);
console.log(b.a1);
console.log(b.a2());
console.log('-----------------------');
a.a3 = 77;
console.log(a);
b.a3 = 88;
console.log(b);
