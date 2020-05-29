//В качестве первого аргумента методов call или apply  может быть передан объект
//на который будет указывать  this
var obj = {a: 'Custom'};
//Это свойство принадлежит глобальному объекту
var a = 'Global';

function whatsThis() {
    return this.a; //Значение this  зависит от контекста вызова функции

}

console.log(whatsThis());
console.log(whatsThis.call(obj));
console.log(whatsThis.apply(obj));

function add(c, d) {
    return this.a+this.b + c + d;

}

var o ={a: 1, b: 3};
//Первый параметр - это объект для использования в качестве 'this',  последующие параметры передаются как
// аргументы функции call
let objCall = add.call(o, 5, 7);
console.log(objCall);

//Первый параметр - это объект для использованияв качестве 'this' последующие параметры передаются как аргументы
// функции call
let objApply = add.apply(o,[10,20]);
console.log(objApply);

