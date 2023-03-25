const arg = process.argv;

console.log(arg);

let a,b;
a = +arg[2];
b = +arg[3];

let c = (a > b) ? a : b ;
console.log(c);

for (let i = 5; i >= 0; i--) {
  console.log(i);
}
// 5
// 4
// 3
// 2
// 1
// 0

let out = '';
for (let i = 5; i >= 0; i--) {
  
 out += i + ' ';
} 
console.log(out);  // 5 4 3 2 1 0



let myArr = [6,7,8];
let modifArr = myArr.map(elem => {
  return elem * 3;
});

console.log(modifArr)  // [ 18, 21,24 ]














