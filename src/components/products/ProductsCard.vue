<template>
  <div class="product__card-wrapper">
        <div class="product__card">
          <router-link :to="{name: 'ProductsCardPage',
          params: {id: product.id, title: product.title, description: product.description}}">
          <img class="product__card-img" :src="product.image" alt="Image Not Found" />
          </router-link>
          <hr>
          <p>Название: {{ product.title }}</p>
          <p>Цена: {{ product.price }}</p>
        </div>
  </div>
</template>

<script>
export default {
  name: 'ProductsCard',
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
}
.product__card {
    background-color: #393838;
    width: 250px;
    color: #fff2f2;
    height: 400px;
    border: 1px solid black;
    text-align: center;
    padding: 0;
}
.product__card-img {
  width: 100%;
  height: 75%;
}
</style>
