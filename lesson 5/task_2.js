const basket = {

    items: document.getElementById('basket'),

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
    },

    render() {
        if (this.isBasketFull()) {
            const n = this.goodsCount();
            const m = this.countBasketPrice();
            this.items.innerHTML = 'В корзине: ' + n + ' товаров на сумму ' + m + ' рублей';
        } else {
            this.items.innerHTML = "Корзина пуста";
        }
    },

    isBasketFull() {
        return this.goods.length > 0;
    },

    goodsCount() {
        return this.goods.length;
    }

};

basket.render();
