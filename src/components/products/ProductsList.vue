<template>
    <div>
      <h1 style="text-align: center">Товары</h1>
         <div class="products_list">
            <div v-for="product in products" :key="product.id">
                <products-card
                    :id="product.id"
                    :image="product.image"
                    :title="product.title"
                    :price="product.price" />
            </div>
         </div>
    </div>
</template>

<script>
import ProductsCard from './ProductsCard.vue';

export default {
  data() {
    return {
      products: [
        {
          id: 1, image: require('../../assets/battlefield.jpg'), title: 'Battlefield 1', price: '49.99$'
        },
        {
          id: 2, image: require('../../assets/gta.jpg'), title: 'Grand Theft Auto V', price: '39.99$'
        },
        {
          id: 3, image: require('../../assets/csgo.jpg'), title: 'Counter-Strike: Global Offensive', price: '9.99$'
        },
        {
          id: 4, image: require('../../assets/pubg.jpg'), title: "PLAYERUNKNOWN'S BATTLEGROUNDS", price: '19.99$'
        }
      ]
    }
  },
  components: {
    ProductsCard
  },
}
</script>

<style lang="scss">
@import '../styles.scss';
@import 'ProductsList.scss';
</style>
