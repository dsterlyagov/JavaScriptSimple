const fib = [1, 1, 2, 3, 5, 8, 13];
const [a, b] = fib;
console.log(a, b);

const [,d,c,,e] = fib;
console.log(c,d,e);
const line = [[10, 17], [14, 7]];
const[[p1x, p1y], [p2x, p2y]] = line;
console.log(p1x, p1y, p2x, p2y);
const people = ['chris', 'sandra'];
const [k, l, m ='guest'] = people;
console.log(k, l, m);

const peopleNew = ['dimon', 'lemon', 'dongan'];
const [o, ...others] = people;
console.log(others);
console.log(o);