let num = 1.234
console.log(num)

let nums = 1e6;
console.log(nums)

let bigint =  12345678901234567890n;

let anotherbigint =  98765432109876543210n;

let calbigint = bigint + anotherbigint;
console.log(calbigint);

let convertnum = BigInt(100);
let bigintNum = Number(convertnum)
 
console.log(bigintNum);

//To string
let Numbers = 12344;
let toStrings  = Numbers.toString()
console.log(toStrings);

//String to number
let thestring = "123456"
let toNum =  Number(thestring);
console.log(toNum)

//Template literals
let dev = "Javascript";
let devDetails = `Hello, ${dev} is a scripting language`;
console.log(devDetails);

//Slice Example
let word = "Example of javascript";
let jsworld = word.slice(11);
console.log(jsworld);

//Split example
let makeSentence = "Let's capitalize each word's first letter."
let wordIt = makeSentence.split(" ")
let capitalize =  wordIt.map(w => w.charAt(0).toUpperCase()+ w.slice(1))
let joinIt = capitalize.join(" ");
console.log(joinIt)