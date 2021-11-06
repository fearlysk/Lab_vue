<template>
  <div>
    <div>
        <products-list />
    </div>
  </div>
</template>

<script>
import ProductsList from '../components/products/ProductsList.vue';

export default {
  name: 'About',
  components: {
    ProductsList
  }
}
</script>
