<template>
  <div class="product__card-wrapper">
        <div class="product__card">
          <div class="front">
            <img class="product__card-img" :src="product.image" alt="Image Not Found" />
            <hr>
            <p>Title: {{ product.title }}</p>
            <p>Price: {{ product.price }}</p>
            <p>Genre: {{ product.genre }}</p>
          </div>
          <div class="back">
            <p>{{product.description}}</p>
            <Rating />
            <router-link :to="`/products/${product.id}`">
            <h3 class="product__card-pagelink">Open product page</h3>
            <button class="product__card-cartbtn">Add to cart</button>
            </router-link>
          </div>
        </div>
    </div>
</template>

<script>
import Rating from '../../elements/rating.vue';

export default {
  name: 'ProductsCard',
  components: {
    Rating
  },
  props: {
    product: {
      type: Object
    }
  }
}
</script>

<style lang="scss">
.product__card-wrapper {
    margin: 15px 25px;
    z-index: 2;
    box-shadow: 0px 0px 18px 9px rgba(16, 122, 24, 0.75);
    border-radius: 4px;
    background-color: #191919;
}
.product__card {
    background-color: #191919;
    min-width: 252px;
    min-height: 360px;
    color: #fff2f2;
    border: 1px solid black;
    padding: 60px 0;
    text-align: center;
    transform: translate(-50%, -50%);
    position: relative;
    top: 50%;
    left: 50%;
    border-radius: 4px;
}
.product__card-img {
  width: 250px;
  height: 220px;
  border-radius: 4px;
}
.front{
    transform: perspective(600px) rotateY(0deg);
    background-color: #191919;
}
.back{
    transform: perspective(600px) rotateY(180deg);
    background-color: #454545;
    padding: 30px 0;
}
.product__card:hover > .front{
    transform: perspective(600px) rotateY(-180deg);
}
.product__card:hover > .back{
    transform: perspective(600px) rotateY(0deg);
}
.front,
.back{
    position: absolute;
    overflow: hidden;
    backface-visibility: hidden;
    transition: transform .6s linear;
    top: 0;
    border-radius: 4px;
}
.product__card-pagelink {
  color: #FFFFFF;
  text-decoration: none;
  border: 1px solid white;
  border-radius: 9px;
  padding: 5px 10px;
  margin-top: 10px;
  transition: 0.3s;
}
.product__card-pagelink:hover {
  color: rgb(75, 221, 75);
  border: 1px solid rgb(75, 221, 75);
  transition: 0.3s;
}
.product__card-cartbtn {
  padding: 5px 15px;
  margin-top: 10px;
}
</style>
