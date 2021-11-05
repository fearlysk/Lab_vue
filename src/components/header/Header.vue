<template>
    <div class="header">
     <h1 class="header__headline">Game Store</h1>
        <div class="header__nav">
            <div class="header__nav-item">
                <a class="header__nav-item--home" href="/">Home</a>
            </div>
            <div class="header__nav-item header_nav_item_products">
                <div class="products__link">
                    <a class="products__link-item header__nav-item--products" href="/products">
                        Products
                    </a>
                </div>
                <div class="products__dropdown-wrapper">
                    <ul class="products__dropdown">
                      <div v-for="product in products" :key="product.id">
                          <li class="products__dropdown-item">
                            <router-link class="products__dropdown-item--link"
                            :to="{name: 'ProductsCardPage',
                            params: {id: product.id, title: product.title,
                            description: product.description}}">
                            {{ product.title }}
                            </router-link>
                          </li>
                      </div>
                    </ul>
                </div>
            </div>
            <div class="header__nav-item">
                <a class="header__nav-item--link" href="/about">About</a>
            </div>
            <div class="header__nav-item">
                <a class="header__nav-item--link" href="/signin">Sign In</a>
            </div>
            <div class="header__nav-item">
                <a class="header__nav-item--link" href="/signup ">Sign Up</a>
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
.header__headline {
    margin-left: 40px;
}
.header__nav {
    display: flex;
    width: 40%;
    height: 100%;
    justify-content: center;
}
.header__nav-item {
    display: flex;
    align-items: center;
    padding: 0 20px;
    transition: 0.3s;
    border-bottom: 5px solid transparent;
}
.header__nav-item--home {
    text-decoration: none;
    color: #fff2f2;
}
.header__nav-item--link{
    text-decoration: none;
    color: #fff2f2;
}
.header__nav-item:hover {
    border-bottom: 5px solid rgb(75, 221, 75);
    background-color: #393838;
    transition: 0.3s;
}
.header__nav-item--products {
    padding: 0;
    &::after {
    content: '';
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-top-color: #fff2f2;
    position: relative;
    top: 16px;
    left: 7px;
    }
}
.products__link {
    margin-top: 0px;
}
.products__link-item {
    text-decoration: none;
    color: #fff2f2;
}
.products__dropdown-wrapper {
    display: none;
    position: absolute;
    top: 80px;
    margin-left: 0px;
}
 .products__dropdown {
    display: flex;
    flex-direction: column;
    list-style-type: none;
    background-color: #393838;
    padding: 0 20px;
    padding-bottom: 25px;
    text-align: left;
    font-size: 15px;
}
.header_nav_item_products:hover {
    .products__dropdown-wrapper {
        display: block;
    }
}
.products__dropdown-item {
    margin-top: 25px;
    background-color: rgb(75, 221, 75);
    padding: 10px;
    transition: 0.3s;
}
.products__dropdown-item:hover {
    transition: 0.3s;
    background-color: #f7e13e;
}
.products__dropdown-item:hover .products__dropdown-item--link {
    color: #393838;
    transition: 0.3s;
}
.products__dropdown-item--link {
    text-decoration: none;
    padding: 5px 20px;
    color: #fff2f2;
    transition: 0.3s;
}
</style>
