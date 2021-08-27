function numberToObj(num) {
    if (num > 999) {
        console.log('Введите число, меньшее 999');
        return {};
    } else if (!Number.isInteger(num)) {
        console.log('Введите число');
        return {};
    } else {
        return {
            units: num % 10,
            tens: Math.trunc(num / 10) % 10,
            hundreds: Math.trunc(num / 100)
        };
    }
}

console.log(numberToObj(245))
console.log(numberToObj(200))
console.log(numberToObj('abcd'))
console.log(numberToObj(9999))
