# Node.js-lesson-2
Node.js Lesson 2

app1.js
```node
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
```
____
app2.js
```node
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

const f = {one: 44, two: 'Hello'};
console.log(f)         // { one: 44, two: 'Hello" }
```
