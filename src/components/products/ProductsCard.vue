<template>
  <div class="product_card_wrapper">
        <div class="product_card">
            <router-link :to="`/products/${id}`">
             <img height="240" width="248" :src="image" alt="Image Not Found" />
            </router-link>
            <hr>
            <p>Название: {{ title }}</p>
            <p>Цена: {{ price }}</p>
        </div>
  </div>
</template>

<script>
export default {
  name: 'ProductsCard',
  props: {
    id: Number,
    image: String,
    title: String,
    price: String
  }
}
</script>

<style lang="scss">
@import '../styles.scss';
@import 'ProductsCard.scss';
</style>
