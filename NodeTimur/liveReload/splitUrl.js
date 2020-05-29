const url =`https://www.w3schools.com/jsref/jsref_split.asp`;

const [...args] = url.substring(0).split('/');

console.log(args);

