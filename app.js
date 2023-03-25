//console.log(process);
// node app one 2 3

const arg = process.argv;
console.log(arg);
let a,b;
a = arg[2];
b = arg[3];

if (a > b){
  console.log(a);
} else {
  console.log(b);
}

 
