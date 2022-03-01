class Product {
  // title = "DEFAULT";
  // imageUrl;
  // description;
  // price;
  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }
}

class ElementAttribute {
  constructor(attrName, attrValue) {
    this.name = attrName;
    this.value = attrValue;
  }
}

class Component {
  constructor(renderHookId) {
    this.hookId = renderHookId;
  }
  createRootElement(tag, cssClasses, attributes) {
    const rootElement = document.createElement(tag);
    if (cssClasses) {
      rootElement.className = cssClasses;
    }
    if (attributes && attributes.length > 0) {
      for (const attr of attributes) {
        rootElement.setAttribute(attr.name, attr.value);
      }
    }
    document.getElementById(this.hookId).append(rootElement);
    return rootElement;
  }
}

class ShoppingCart extends Component {
  items = [];

  set cartItems(value) {
    console.log(this.items);
    this.items = value;
    this.totalOutput.innerHTML = `<h2>Total: \$${this.totalAmount.toFixed(
      2
    )}</h2>`;
  }

  get totalAmount() {
    const sum = this.items.reduce((prev, curItem) => {
      return prev + curItem.price;
    }, 0);
    return sum;
  }

  constructor(renderHookId) {
    super(renderHookId);
  }

  addProduct(product) {
    const updatedItems = [...this.items];
    updatedItems.push(product);
    this.cartItems = updatedItems;
  }

  render() {
    const cartEl = this.createRootElement("section", "cart");
    cartEl.innerHTML = `
      <h2>Total: \$${0}</h2>
      <button>Order Now!</button>
    `;
    this.totalOutput = cartEl.querySelector("h2");
  }
}

class ProductItem extends Component {
  constructor(product, renderHookId) {
    super(renderHookId);
    this.product = product;
  }

  addToCart() {
    // console.log("Addign product to cart");
    App.addProductToCart(this.product);
  }

  render() {
    const prodEl = this.createRootElement("li", "product-item");
    prodEl.innerHTML = `
        <div>
            <img src="${this.product.imageUrl}" alt="${this.product.title}">
            <div class="product-item__content">
                <h2>${this.product.title}</h2>
                <h3>\$${this.product.price}</h3>
                <p>${this.product.description}</p>
                <button>Add to Cart</button>
            </div>
        </div>
      `;
    const addCartButton = prodEl.querySelector("button");
    addCartButton.addEventListener("click", this.addToCart.bind(this));
  }
}

class ProductList extends Component {
  products = [
    new Product(
      "Pillow",
      "https://tse1.mm.bing.net/th?id=OIP.2N9luKmJAwBlJEUYY-00gAHaFT&pid=Api&P=0&w=246&h=176",
      "A Soft Pillow",
      19.0
    ),
    new Product(
      "Carpet",
      "https://tse1.mm.bing.net/th?id=OIP.C1z4Qgtl_zLC1RtHiwT21gHaFj&pid=Api&P=0&w=207&h=155",
      "A carpet which you might like - or not",
      89.99
    ),
    new Product(
      "Plasma Tv",
      "https://tse4.mm.bing.net/th?id=OIP.ovsKiOqqEW5Ph9lW7LwGUQHaE8&pid=Api&P=0&w=259&h=172",
      "Very Nice Plasma",
      99.99
    ),
    new Product(
      "Skate Board",
      "https://tse1.mm.bing.net/th?id=OIP.fR76wT8hNR_9p15Jpy7ifgHaE8&pid=Api&P=0&w=263&h=175",
      "A Nice Skateboard",
      19.99
    ),
    new Product(
      "Kid's Car",
      "https://tse1.mm.bing.net/th?id=OIP.XsNIduBywuWwKQA3XZplHAHaEi&pid=Api&P=0&w=254&h=156",
      "A Car For Kids",
      50.0
    ),
    new Product(
      "Nice Blanket",
      "https://tse3.mm.bing.net/th?id=OIP.Wz3ALhKTG-AiWcS-qU6k6QHaFc&pid=Api&P=0&w=219&h=161",
      "A Nice Comfy Blanket",
      19.99
    ),
  ];
  constructor(renderHookId) {
    super(renderHookId);
  }

  render() {
    const prodList = this.createRootElement("ul", "product-list", [
      new ElementAttribute("id", "prod-list"),
    ]);

    for (const prod of this.products) {
      const productItem = new ProductItem(prod, "prod-list");
      productItem.render();
    }
  }
}

class Shop {
  render() {
    this.cart = new ShoppingCart("app");
    this.cart.render();
    const productList = new ProductList("app");
    productList.render();
  }
}

class App {
  static cart;
  static init() {
    const shop = new Shop();
    shop.render();
    this.cart = shop.cart;
  }

  static addProductToCart(product) {
    this.cart.addProduct(product);
  }
}
App.init();
