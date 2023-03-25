//console.log(process);
// node app one 2 3

const arg = process.argv;
console.log(arg);
let a,b;
a = arg[2];
b = arg[3];

function c(a,b) {
if (a > b){
  console.log(a);
} else {
  console.log(b);
}
}

console.log(c(a,b));


// node app 4 1
console.log(c(a,b));      // 4         

// node app 8 555

c(a,b);     // 8

console.log(typeof a);  // string
console.log(typeof b);  // string


// node app 8 555
a = +a
b = +b
c(a,b)  // 555





 
