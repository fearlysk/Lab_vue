<template>
    <div>
      <h1 class="products__list-headline">Товары</h1>
         <div class="products__list">
            <products-card v-for="product in products" :key="product.id"
            :product="product" />
         </div>
    </div>
</template>

<script>
import ProductsCard from './ProductsCard.vue';

export default {
  data() {
    return {
      products: {}
    }
  },
  mounted() {
    fetch('http://localhost:3000/api/products')
      .then((res) => res.json())
      .then((data) => { this.products = data })
      .catch((err) => console.log(err.message))
  },
  components: {
    ProductsCard
  },
}
</script>

<style lang="scss">
.products__list-headline {
  text-align: center;
}
.products__list {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
}
</style>
