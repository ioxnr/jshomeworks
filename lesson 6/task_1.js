const catalog = {

    goods: [
        {
            name: 'Материнская плата',
            price: 10000
        },
        {
            name: 'Процессор',
            price: 20000
        },
        {
            name: 'Видеокарта',
            price: 7000
        }
    ],

    init(basket) {
        this.items = document.querySelector('.catalog');
        this.basket = basket;
        this.render();
        this.addEventHandlers();
    },

    render() {
        this.goods.forEach(item => {
            this.items.insertAdjacentHTML('afterbegin', this.renderItem(item));
        });
    },

    renderItem(item) {
        return `<div class="item">
                <h3>Название: ${item.name}</h3>
                <h4>Цена: ${item.price} руб.</h4>
                <button class="add-to-basket" data-name="${item.name}">Добавить в корзину</button>
            </div>`;
    },

    addEventHandlers() {
        this.items.addEventListener('click', event => this.addToBasket(event));
    },

    addToBasket(event) {
        if (event.target.className === 'add-to-basket') {
            const name = event.target.dataset.name;
            const addedItem = this.goods.find((item) => item.name === name);
            this.basket.addToBasket(addedItem);
        }
    }

};

const basket = {

    goods: [],

    init() {
        this.items = document.querySelector('.basket');
        this.render();
    },

    render() {
        this.items.innerHTML = '';
        if (this.isBasketFull()) {
            this.goods.forEach(item => {
                this.items.insertAdjacentHTML('afterbegin', this.renderItem(item));
            });
            this.items.insertAdjacentHTML('beforeend', `В корзине: ${this.goodsCount()} 
            товаров на сумму ${this.countBasketPrice()} рублей`);
        } else {
            this.items.textContent = 'Корзина пуста';
        }
    },

    renderItem(item) {
        return `<div class="item">
                <h3>Название: ${item.name}</h3>
                <h4>Цена: ${item.price} руб.</h4>
                <h4>Количество: ${item.quantity}</h4>
            </div>`;
    },

    countBasketPrice: function () {
        return this.goods.reduce((total, item) => total + item.quantity * item.price, 0);
    },

    isBasketFull() {
        return this.goods.length > 0;
    },

    goodsCount() {
        return this.goods.reduce((total, item) => total + item.quantity, 0);
    },

    addToBasket(item) {
        const findItem = this.goods.find((good) => item.name === good.name);
        if (findItem) {
            findItem.quantity++;
        } else {
            this.goods.push({...item, quantity: 1});
        }
        this.render();
    }

};

catalog.init(basket);
basket.init();
