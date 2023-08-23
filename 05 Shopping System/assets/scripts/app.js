class Product {
  constructor(title, image, desc, price) {
    this.title = title;
    this.imageUrl = image;
    this.description = desc;
    this.price = price;
  }
}

class ShoppingCart {
  items = [];

  addProduct(product) {
    this.items.push(product);
    this.totalCost.textContent = `<h2>Total: \$${1}</h2>`;
  }

  render() {
    const cartEl = document.createElement("section");
    cartEl.innerHTML = `
    <h2>Total: \$${0}</h2>
    <button>Order Now!</button>
    `;
    cartEl.className = "cart";
    this.totalCost = cartEl.querySelector("h2");
    return cartEl;
  }
}

class ProductItem {
  constructor(product) {
    this.product = product;
  }

  addToCart() {
    App.AddProductToCart(this.product);
  }

  render() {
    const prodEl = document.createElement("li");
    prodEl.className = "product-item";
    prodEl.innerHTML = `
        <div>
          <img src="${this.product.imageUrl} alt="${this.product.title}"></img>
          <div class="product-item__content">
            <h2>${this.product.title}</h2>
            <h3>\$${this.product.price}</h3>
            <p>${this.product.description}</p>
            <button>Add To Cart</button>
          </div>
        </div>
      `;
    const addCartButton = prodEl.querySelector("button");
    addCartButton.addEventListener("click", this.addToCart.bind(this));
    return prodEl;
  }
}

class ProductList {
  products = [
    new Product(
      "A pillow",
      "https://th.bing.com/th/id/OIP.qsK6PnAqRTKnpGFwcEXiyQHaFl?pid=ImgDet&rs=1",
      "A Soft Pillow!",
      15.99
    ),
    new Product(
      "A Carpet",
      "https://th.bing.com/th/id/OIP.VL6FgxRsWNTPjV9QzRBdHQHaHa?w=192&h=192&c=7&r=0&o=5&dpr=1.1&pid=1.7",
      "A Carpet, you may like!",
      78.43
    ),
  ];
  render() {
    const prodList = document.createElement("ul");
    prodList.className = "product-list";
    for (const prod of this.products) {
      const productItem = new ProductItem(prod);
      const prodEl = productItem.render();
      prodList.append(prodEl);
    }
    return prodList;
  }
}

class Shop {
  render() {
    const renderHook = document.getElementById("app");

    this.cart = new ShoppingCart();
    const cartEl = this.cart.render();

    const productList = new ProductList();
    const prodListEl = productList.render();

    renderHook.append(cartEl);
    renderHook.append(prodListEl);
  }
}

class App {
  static cart;

  static init() {
    const shop = new Shop();
    shop.render();
    this.cart = shop.cart;
  }

  static AddProductToCart(product) {
    this.cart.addProduct(product);
  }
}

App.init();
