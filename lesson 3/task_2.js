let basket = [['Материнская плата', 6, 10000], ['Процессор', 3, 20000], ['Видеокарта', 5, 7000]];

function countBasketPrice(arr) {
    return arr.reduce((total, item) => total + item[1] * item[2], 0)
}

console.log(countBasketPrice(basket))
