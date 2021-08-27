const basket = {
    goods: [
        {
            name: 'Материнская плата',
            quantity: 6,
            price: 10000
        },
        {
            name: 'Процессор',
            quantity: 3,
            price: 20000
        },
        {
            name: 'Видеокарта',
            quantity: 5,
            price: 7000
        }
    ],
    countBasketPrice: function () {
        return this.goods.reduce((total, item) => total + item.quantity * item.price, 0);
    }
};

console.log(basket.countBasketPrice())
