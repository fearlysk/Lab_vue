<template>
  <div class="wrapper">
    <div class="content">
      <Header />
      <router-view />
    </div>
      <Footer />
  </div>
</template>

<script>
import Header from './components/header/Header.vue';
import Footer from './components/footer/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
}
</script>

<style lang="scss">
@import '../styles.scss';
* {
  margin: 0;
  padding: 0;
}
.content {
  min-height: calc(100vh - 100px);
}
</style>
