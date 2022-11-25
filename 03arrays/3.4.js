var tab1 = [ 1,2,3,4,5 ];

const min = tab1 => tab1.reduce((x, y) => Math.min(x, y));
const max = tab1 => tab1.reduce((x, y) => Math.max(x, y));

console.log("Min:", min(tab1));
console.log("Max:", max(tab1));