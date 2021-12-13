<template>
  <div class="app__wrapper">
    <div class="app__header">
      <Header />
    </div>
    <div class="app__content">
      <router-view />
    </div>
    <div class="app__footer">
      <Footer />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Header from './components/header/Header.vue';
import Footer from './components/footer/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  mounted() {
    this.fetchProducts();
    this.fetchUsers();
  },
  methods: {
    ...mapActions({
      fetchProducts: 'fetchProducts',
      fetchUsers: 'fetchUsers'
    })
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
.app__wrapper {
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
}
.app__content {
  background: url("https://wallpaperaccess.com/full/1188236.jpg");
}
</style>
