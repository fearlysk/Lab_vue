<template>
  <div>
    <h2 class="platforms__headline">Platform:
      <span class="platforms__headline-span">{{$route.params.platform.toUpperCase()}}</span>
    </h2>
    <div v-if="$route.params.platform === 'pc'" class="products__list-wrapper">
      <h2 class="products__list-headline">Products</h2>
      <div class="products__list">
        <ProductsCard v-for="product in filteredProductsPC" :key="product.id"
        :product="product" />
      </div>
    </div>
    <div v-if="$route.params.platform === 'xbox'" class="products__list-wrapper">
      <h2 class="products__list-headline">Products</h2>
      <div class="products__list">
        <ProductsCard v-for="product in filteredProductsXbox" :key="product.id"
        :product="product" />
      </div>
    </div>
    <div v-if="$route.params.platform === 'playstation'" class="products__list-wrapper">
      <h2 class="products__list-headline">Products</h2>
      <div class="products__list">
        <ProductsCard v-for="product in filteredProductsPS" :key="product.id"
        :product="product" />
      </div>
    </div>
  </div>
</template>

<script>
import ProductsCard from '../ProductsCard.vue';

export default {
  name: 'GamePlatforms',
  components: {
    ProductsCard
  },
  data() {
    return {
      products: []
    }
  },
  computed: {
    filteredProductsPC() {
      return this.products.filter((item) => item.pc);
    },
    filteredProductsXbox() {
      return this.products.filter((item) => item.xbox);
    },
    filteredProductsPS() {
      return this.products.filter((item) => item.playstation);
    }
  },
  mounted() {
    fetch('http://localhost:3000/products')
      .then((res) => res.json())
      .then((data) => { this.products = data })
      .catch((err) => console.log(err.message))
  }
}
</script>

<style lang="scss" scoped>
.platforms__headline {
  text-align: center;
  margin: 15px 0;
}
.platforms__headline-span {
  padding: 5px 0;
  border-bottom: 3px solid green;
}
.products__list-headline {
  margin: 15px 20px 0 20px;
  padding: 0 0 10px 0;
  border-bottom: 1px solid white;
}
.products__list-wrapper {
  display: flex;
  flex-direction: column;
  width: 90%;
  border: 1px solid green;
  border-radius: 10px;
  background-color: rgba(120,120,120,0.16);
  margin: 20px auto;
}
.products__list {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: 0 0 25px 0;
}
</style>
