<template>
  <div class="product__page-wrapper">
    <div class="product__page-title">
       <h1 class="product__page-title--headline">Game: {{ title }}</h1>
    </div>
    <div class="product__page-description">
      <h3>Description: {{ description }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductsCardPage',
  props: {
    title: String,
    description: String
  }
}
</script>

<style lang="scss">
.product__page-wrapper {
  background: #a4a4a4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  background-color: white;
  margin: 10px 0px;
  padding: 10px;
  border-radius: 12px;
}
</style>
