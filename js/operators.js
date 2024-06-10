// Arithmetic Operators
let a = 10;
let b = 20;

console.log('Addition', a + b);
console.log('Substraction', Math.max(a, b) - Math.min(a, b));
console.log('Multiplication', a * b);
console.log('Division', a / b);
console.log('increment', a++);
console.log('increment before', ++a);
console.log('sub inc', b--);
console.log('before sub', --b);

//Chaining ternary operators

let score = 45;
let grade = score >= 90 ? 'A' : score >= 60 ? 'B' : score >= 35 ? 'C' : 'D';
console.log(grade);

//Chaining ternary operators

let size = 20;
let getSize = size > 50 ? 'Large' :
    size > 30 ? 'Medium' :
        size > 20 ? 'Small' : 'Tiny';
console.log(getSize);

//Find Income

let income = 1000000;
let hasChildren = true;
let getIcome = income <= 20000 ? 'Low Income' :
    income >= 20000 && income <= 50000 ? (hasChildren ? 'Middle income with children' : 'Middle income') :
        'High Income'
console.log(getIcome);

//Find Discount

let age = 80;
let isMember = 'True';
function isEligibleForDiscount(age,isMember){
   return age >= 64 && isMember
}
console.log('Eligible for discount',isEligibleForDiscount(age,isMember))


