<template>
  <div class="product_page-wrapper">
    <div class="product_page-title">
       <h1 class="product_page-title-headline">Game: {{ title }}</h1>
    </div>
    <div class="product_page-description">
      <h3>Description: {{ description }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductsCardPage',
  props: {
    title: String,
    description: String,
    image: String,
  }
}
</script>

<style lang="scss">
.product_page-wrapper {
  background: #a4a4a4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.product_page-title {
  text-align: center;
  width: 70%;
}
.product_page-title-headline {
  border-bottom: 2px solid black;
  padding-bottom: 5px;
}
.product_page-description {
  width: 60%;
  background-color: white;
  margin: 10px 0px;
  padding: 10px;
  border-radius: 12px;
}
</style>
