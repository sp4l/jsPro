const API_URL =
  "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses";

const app = new Vue({
  el: '#app',
  data: {
      goods: [],
      filteredGoods: [],
      basketGoods: [],
      searchLine: '',
  },
  methods: {
    async getProducts() {
      const responce = await fetch(`${API_URL}/catalogData.json`);
      if (responce.ok) {
        const catalogItems = await responce.json();
        this.goods = catalogItems;
        this.filteredGoods = catalogItems;
      } else {
        alert("Ошибка при соединении с сервером");
      }
    },
    
      addToBasket(id) {
        this.basketGoods.push(id);
        console.log(this.basketGoods)
      },
      deleteItem(id) {
        
      },
      filterGoods(searchLine) {
        this.filteredGoods = searchLine ?
          this.goods.filter(good => good.product_name.toLowerCase().includes(searchLine.toLowerCase())) :
          this.goods;
      },

  },

  async mounted() {
      await this.getProducts();
  }
})
