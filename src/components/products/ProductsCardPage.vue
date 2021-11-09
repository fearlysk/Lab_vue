<template>
  <div class="product__page-wrapper">
    <div class="product__page-title">
       <h1 class="product__page-title--headline">Game: {{ product[id - 1].title }}</h1>
        <img :src="product[id-1].image" class="product__page-image">
       <h1>Genre: {{product[id-1].genre}}</h1>
    </div>
    <div class="product__page-description">
      <h3>Developer: {{ product[id - 1].developer}}</h3>
      <hr>
      <h3>Description: {{ product[id - 1].description }}</h3>
      <div class="product__page-description--cart">
        <button class="cartbtn">Add to cart</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductsCardPage',
  data() {
    return {
      product: {}
    }
  },
  props: {
    id: Number
  },
  mounted() {
    fetch('http://localhost:3000/products')
      .then((res) => res.json())
      .then((data) => { this.product = data })
      .catch((err) => console.log(err.message))
  },
}
</script>

<style lang="scss">
.product__page-wrapper {
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 18px 9px rgba(25, 214, 39, 0.33);
}
.product__page-title {
  text-align: center;
  width: 70%;
}
.product__page-title--headline {
  border-bottom: 2px solid black;
  padding-bottom: 5px;
}
.product__page-description {
  width: 60%;
  background-color: rgb(68, 66, 66);
  margin: 10px 0px;
  padding: 10px;
  border-radius: 12px;
}
.product__page-image {
  width: 25%;
  margin-top: 15px;
  border: 1px solid black;
  box-shadow: 0px 0px 18px 9px rgba(25, 214, 39, 0.33);
}
.product__page-description--cart {
  width: 40%;
  margin: 10px auto;
  border-radius: 7px;
  box-shadow: 0px 0px 18px 3px rgba(25, 214, 39, 0.33);
}
.cartbtn {
  width: 100%;
  height: 100%;
  padding: 5px 10px;
  border-radius: 7px;
  background: green;
  color: #FFFFFF;
  font-size: 1rem;
}
</style>
