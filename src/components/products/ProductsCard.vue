<template>
  <teleport to="#modals-portal">
    <Login v-if="showLogModal" @close="closeModal" />
    <Registration v-if="showRegModal" @close="closeModal" />
  </teleport>
  <RequireAuth v-if="showAuth"/>
  <div class="product__card-wrapper">
    <div class="product__card">
      <div class="front">
        <img class="product__card-img" :src="product.image" alt="Image Not Found" />
        <hr>
        <div class="product__platforms">
          <div v-if="product.pc" class="product__platforms-item">PC</div>
          <div v-if="product.xbox" class="product__platforms-item">Xbox</div>
          <div v-if="product.playstation" class="product__platforms-item">PS</div>
        </div>
        <p>Title: {{ product.title }}</p>
        <p>Price: {{ product.price }}</p>
        <p>Genre: {{ product.genre }}</p>
        <p>Rating: {{ product.rating }}</p>
      </div>
      <div class="back">
        <p>{{product.description}}</p>
        <Rating />
        <router-link :to="`/products/${product.id}`">
          <h3 class="product__card-pagelink">Open product page</h3>
        </router-link>
        <button @click="addToCart(product)" class="cart-btn">Add to cart</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Rating from '../../elements/rating.vue';
import RequireAuth from './RequireAuth.vue';

export default {
  name: 'ProductsCard',
  components: {
    Rating,
    RequireAuth
  },
  data() {
    return {
      showRegModal: false,
      showLogModal: false,
      showAuth: false
    }
  },
  props: {
    product: {
      type: Object
    }
  },
  computed: {
    ...mapState({
      cartItems: (state) => state.cartItems
    }),
  },
  methods: {
    addToCart(item) {
      if (!this.$store.state.userAuth.isUserLoggedIn) {
        this.showAuth = true;
      }
      if (this.$store.state.userAuth.isUserLoggedIn) {
        item = { ...item, quantity: 1 };
        const temp = this.cartItems.some((i) => i.id === item.id);
        if (temp) {
          const itemIndex = this.cartItems.findIndex((el) => el.id === item.id);
          this.cartItems[itemIndex].quantity += 1;
        } else {
          this.cartItems.push(item);
        }
        this.$store.state.cartItemCount += 1;
      }
    },
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/colors.scss';

.product__card-wrapper {
  margin: 25px 25px;
  z-index: 2;
  box-shadow: 0px 0px 18px 9px rgba(16, 122, 24, 0.75);
  border-radius: 4px;
  background-color: $darkbg;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.product__card {
  background-color: $darkbg;
  min-width: 252px;
  min-height: 460px;
  color: $white;
  border: 1px solid black;
  padding: 60px 0;
  text-align: center;
  transform: translate(-50%, -50%);
  position: relative;
  top: 50%;
  left: 50%;
  border-radius: 4px;
}
.product__platforms {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.product__platforms-item {
  border: 1px solid lawngreen;
  margin: 5px;
  padding: 3px 6px;
  border-radius: 4px;
  background-color: black;
}
.product__card-img {
  width: 100%;
  height: auto;
  border-radius: 4px;
}
.front{
  transform: perspective(600px) rotateY(0deg);
  background-color: $darkbg;
}
.back{
  transform: perspective(600px) rotateY(180deg);
  background-color: #454545;
  padding: 30px 0;
}
.product__card:hover > .front{
  transform: perspective(600px) rotateY(-180deg);
}
.product__card:hover > .back{
  transform: perspective(600px) rotateY(0deg);
}
.front,
.back{
  position: absolute;
  overflow: hidden;
  backface-visibility: hidden;
  transition: transform .6s linear;
  top: 0;
  border-radius: 4px;
  width: 100%;
}
.product__card-pagelink {
  color: $white;
  text-decoration: none;
  border: 1px solid white;
  border-radius: 9px;
  padding: 5px 10px;
  margin-top: 10px;
  transition: 0.3s;
}
.product__card-pagelink:hover {
  color: rgb(75, 221, 75);
  border: 1px solid rgb(75, 221, 75);
  transition: 0.3s;
}
.cart-btn {
  padding: 5px 15px;
  margin-top: 10px;
}
</style>
