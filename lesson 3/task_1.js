function isPrime(number) {
    for (let i = 2; i <= Math.sqrt(number); i++)
        if (number % i === 0) return false;
    return true;
}

let i = 2;
let arr = [];

while (i <= 100) {
    if (isPrime(i)) arr.push(i);
    i++;
}

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
