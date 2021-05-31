const goods = [
  { img: "img/main_card01.jpg",
    title: "ELLERY X M'O CAPSULE", 
    text: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.', 
    price: '$52.00'
  },
  { img: "img/main_card02.jpg",
    title: "ELLERY X M'O CAPSULE", 
    text: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.', 
    price: '$52.00'
  },
  { img: "img/main_card03.jpg",
    title: "ELLERY X M'O CAPSULE", 
    text: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.', 
    price: '$52.00'
  },
  { img: "img/main_card04.jpg",
    title: "ELLERY X M'O CAPSULE", 
    text: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.', 
    price: '$52.00'
  },
  { img: "img/main_card05.jpg",
    title: "ELLERY X M'O CAPSULE", 
    text: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.', 
    price: '$52.00'
  },
  { img: "img/main_card06.jpg",
    title: "ELLERY X M'O CAPSULE", 
    text: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.', 
    price: '$52.00'
  }
]

const renderGoodsItem = (img, title, text, price) => {
  return `
    <div class="main__card">
      <a href="#"><img class="main__product_img" src="${img}" alt="card01"></a>
      <a href="#"><h4 class="main__card_title">${title}</h4></a>
      <p class="text main__card_text">${text}</p>
      <p class="main__card_price">${price}</p>
    </div>
    `
}

const renderGoodsList = list => {
  let goodsList = list.map(item => renderGoodsItem(item.img, item.title, item.text, item.price))



  //   const goodsListDiv = document.querySelector('.goods-list')
  //   goodsListDiv.innerHTML = goodsList

  document.querySelector('.main__content_top').innerHTML = goodsList.join('')

}

const init = () => {
  renderGoodsList(goods)
}

window.onload = init