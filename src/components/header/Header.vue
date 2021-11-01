<template>
    <div class="header">
     <h1 class="header_headline">Game Store</h1>
        <div class="header_nav">
            <div class="header_nav_item">
                <a href="/">Home</a>
            </div>
            <div class="header_nav_item" id="header_nav_item_products">
                <div class="products_link">
                    <a class="header_nav_item_products" href="/products">Products</a>
                </div>
                <div class="products_dropdown_wrapper">
                    <ul class="products_dropdown">
                      <div v-for="product in products" :key="product.id">
                          <li class="products_dropdown_item">
                            <router-link :to="{name: 'ProductsCardPage',
                            params: {id: product.id, title: product.title,
                            description: product.description}}">
                            {{ product.title }}
                            </router-link>
                          </li>
                      </div>
                    </ul>
                </div>
            </div>
            <div class="header_nav_item">
                <a href="/about">About</a>
            </div>
            <div class="header_nav_item">
                <a href="/signin">Sign In</a>
            </div>
            <div class="header_nav_item">
                <a href="/signup ">Sign Up</a>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'Header',
  data() {
    return {
      products: []
    }
  },
  mounted() {
    fetch('http://localhost:3000/products')
      .then((res) => res.json())
      .then((data) => { this.products = data })
      .catch((err) => console.log(err.message))
  },
}
</script>

<style lang="scss">
.header {
    background-color: #222222;
    color: #fff2f2;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'Open Sans', sans-serif;
    height: 100px;
}
.header_headline {
    margin-left: 40px;
}
.header_nav {
    display: flex;
    width: 40%;
    height: 100%;
    justify-content: center;
}
.header_nav_item {
    display: flex;
    align-items: center;
    padding: 0 20px;
    transition: 0.3s;
    border-bottom: 5px solid transparent;
}
.header_nav_item > a {
    text-decoration: none;
    color: #fff2f2;
}
.header_nav_item:hover {
    border-bottom: 5px solid rgb(75, 221, 75);
    background-color: #393838;
    transition: 0.3s;
}
.header_nav_item_products {
    padding: 0;
}
.header_nav_item_products::after {
    content: '';
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-top-color: #fff2f2;
    position: relative;
    top: 16px;
    left: 7px;
}
#header_nav_item_products {
    display: flex;
    flex-direction: column;
}
.products_link {
    margin-top: 37px;
}
.products_link a {
    text-decoration: none;
    color: #fff2f2;
}
.products_dropdown_wrapper {
    display: none;
    position: absolute;
    top: 80px;
    margin-left: 30px;
}
 .products_dropdown {
    display: flex;
    flex-direction: column;
    list-style-type: none;
    background-color: #393838;
    padding: 0 20px;
    padding-bottom: 25px;
    text-align: left;
    font-size: 15px;
}
#header_nav_item_products:hover {
    .products_dropdown_wrapper {
        display: block;
    }
}
.products_dropdown_item {
    margin-top: 25px;
    background-color: rgb(75, 221, 75);
    padding: 10px;
    transition: 0.3s;
}
.products_dropdown_item:hover {
    transition: 0.3s;
    background-color: #f7e13e;
}
.products_dropdown_item:hover > a {
    color: #393838;
    transition: 0.3s;
}
.products_dropdown_item > a {
    text-decoration: none;
    padding: 5px 20px;
    color: #fff2f2;
    transition: 0.3s;
}
</style>
