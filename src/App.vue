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
import * as userInfo from './constants/user';
import Header from './components/header/Header.vue';
import Footer from './components/footer/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  mounted() {
    if (localStorage.getItem(userInfo) !== null) {
      const user = localStorage.getItem(userInfo);
      const userparsed = JSON.parse(user);
      console.log(userparsed);
      this.$store.commit('saveUserName', userparsed);
    }
  }
}
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
