<template>
    <div class="wrapper">
         <div class="products__list">
            <products-card v-for="product in products" :key="product.id"
            :product="product" />
         </div>
    </div>
</template>

<script>
import ProductsCard from './ProductsCard.vue';

export default {
  components: {
    ProductsCard
  },
  computed: {
    products() {
      return this.$store.state.products
    }
  }
}
</script>

<style lang="scss" scoped>
.products__list-headline {
  text-align: center;
}
.products__list {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    padding: 25px 0 75px 0;
}
</style>
