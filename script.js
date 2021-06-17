const API_URL =
  "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses";

//Каталог товаров, шаблон ячейки товара
class Product {
  constructor(title = 'Товар', price = 'Цена', text = 'Описание:', id) {
    this.title = title;
    this.price = price;
    this.text = text;
    this.id = id;
  }
  //Разметка HTML и кнопки
  render() {
    return `<div class="main__card" itemId=${this.id}>
      <a href="#"><h4 class="main__card_title">${this.title}</h4></a>
      <p class="text main__card_text">${this.text}</p>
      <p class="main__card_price">${this.price}</p>
      <button class='addBasket' itemId="addBasket">Добавить</button>
      <button class='delBasket' itemId="addBasket">Удалить из корзины</button>
    </div>`;
  }
}
//Список товаров, получение товара и добавление на страницу
class CatalogList {
  constructor() {
    this.list = [];
    this.basketList = [];
  }
  //Получение списка товаров
  async filling() {
    const responce = await fetch(`${API_URL}/catalogData.json`);
    if (responce.ok) {
      const catalogItems = await responce.json();
      this.list = catalogItems;
    } else {
      alert("Ошибка при соединении с сервером");
    }
  }

  //Сумма товаров
  getSum() {
    let sum = 0;
    this.list.forEach(item => {
      sum += +item.price;
    })
    console.log(sum);
  }

  //Добавление товара по списку товаров
  addProduct() {
    let listHtml = '';
    this.list.forEach((item) => {
      const product = new Product(
        item.product_name,
        item.price,
        item.id_product
      );
      listHtml += product.render();
    });
    document.querySelector(".main__content_top").innerHTML = listHtml;
  }

  //Добавление товара в корзину. Здесь я не могу вспомнить, выводит объект, а не его внутренности.
  addBasketList() {
    let basketHtml = '';
    let buttons = document.querySelectorAll('.addBasket');
    buttons.forEach(function (button) {
      button.addEventListener('click', buttonClickHandler);
    });

    function buttonClickHandler(event) {
      this.basketList = basketHtml += event.target.parentNode;
      event.target.textContent = 'Добавлено';
      document.querySelector(".main__content_basket").innerHTML = basketHtml;
      //  console.log(this.basketList);
    }
  }

  //Удаление товара из корзины. Здесь надо разобраться с областью видимости basketList
  delBasketList() {
    console.log(this.basketList);
  }

  //Покупка
  buyProduct() {

  }
}



const init = async () => {
  const list = new CatalogList();
  await list.filling();
  list.addProduct();
  list.getSum();
  list.addBasketList();
  list.delBasketList();
};

window.onload = init