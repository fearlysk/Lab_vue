<template>
    <div>
      <h1 style="text-align: center">Товары</h1>
         <div class="products_list">
            <div v-for="product in products" :key="product.id">
              <router-link :to="{name: 'ProductsCardPage',
              params: {id: product.id, title: product.title, description: product.description}}">
                <products-card
                    :id="product.id"
                    :image="product.image"
                    :title="product.title"
                    :price="product.price"
                    :description="product.description"
                />
              </router-link>
            </div>
         </div>
    </div>
</template>

<script>
import ProductsCard from './ProductsCard.vue';

export default {
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
  components: {
    ProductsCard
  },
}
</script>

<style lang="scss">
.products_list {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
}
</style>
