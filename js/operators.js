// Arithmetic Operators
let a = 10;
let b = 20;

console.log('Addition',a + b)
console.log('Substraction', Math.max(a,b) - Math.min(a,b))
console.log('Multiplication', a*b)
console.log('Division',a/b)
console.log('increment', a++)
console.log('increment before',++a)
console.log('sub inc', b--);
console.log('before sub', --b)

//Chaining ternary operators

let score = 45;

let grade = score >= 90 ? 'A' :score >= 60 ? 'B': score >= 35 ? 'C':'D';

console.log(grade);