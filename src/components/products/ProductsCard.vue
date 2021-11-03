<template>
  <div class="product__card-wrapper">
        <div class="product__card">
            <img height="240" width="248" :src="image" alt="Image Not Found" />
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
</style>
