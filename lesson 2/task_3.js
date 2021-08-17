let a;
let b;
a = Math.floor(Math.random() * 199) - 99;
b = Math.floor(Math.random() * 199) - 99;
console.log(a, b);
if (Math.sign(a) === 1 && Math.sign(b) === 1 || a === 0 && Math.sign(b) === 1 || Math.sign(a) === 1 && b === 0) {
    console.log(a - b);
} else if (Math.sign(a) === -1 && Math.sign(b) === -1) {
    console.log(a * b);
} else {
    console.log(a + b);
}
