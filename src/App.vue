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

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Header from './components/header/Header.vue';
import Footer from './components/footer/Footer.vue';

 @Options({
   components: {
     Header,
     Footer
   },
 })

export default class App extends Vue {}
</script>

<style lang="scss">
@import '../public/styles.scss';
@import '../colors.scss';
@import '../fonts.scss';
* {
  margin: 0;
  padding: 0;
}
.app__content {
  min-height: calc(100vh - 120px);
  background: url("https://wallpaperaccess.com/full/1188236.jpg");
}
</style>
