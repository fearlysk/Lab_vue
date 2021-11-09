<template>
    <Header />
    <div class="content">
      <router-view />
    </div>
      <Footer />
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
export default class App extends Vue {
  product: any = null;

  async mounted(): Promise<void> {
    const resp = await fetch('http://localhost:3000/products/1').then((response) => response.json());
    this.product = resp || null;
  }

  get productFullName() {
    return this.product
      ? `Default user: ${this.product.title} ${this.product.price}`
      : ''
  }
}
</script>

<style lang="scss">
@import '../styles.scss';
@import '../colors.scss';
@import '../fonts.scss';
* {
  margin: 0;
  padding: 0;
}
body {
    display: flex;
    flex-direction: column;
    height: 100%;
}
.content {
  min-height: calc(100vh - 120px);
  background: url("https://wallpaperaccess.com/full/1188236.jpg");
}
</style>
