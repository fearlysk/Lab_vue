<template>
  <RequireAuth v-if="this.showModal" @close="closeModal" />
  <div v-if="this.$store.state.showAlert" class="alert-modal">
    <Alert @close="closeAlert" :message="alertMessage" />
  </div>
  <div class="product__page-wrapper">
    <div class="product__page-title">
       <h1 class="product__page-title--headline">Game: {{ product[id].title }}</h1>
        <img :src="product[id].image" class="product__page-image">
       <h1>Genre: {{product[id].genre}}</h1>
    </div>
    <div class="product__page-description">
      <h3>Developer: {{ product[id].developer}}</h3>
      <hr>
      <h3>Description: {{ product[id].description }}</h3>
      <div class="product__page-description--cart">
        <button @click="goToCart" class="cart-btn">Go to cart</button>
        <button @click="addToCart(this.product[id])"
        class="cart-btn">
        Add to cart: {{this.itemQuantity}}</button>
        <button @click="removeFromCart(this.product[id])" class="cart-btn">Remove from cart</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import RequireAuth from '../Modals/RequireAuth.vue';
import Alert from '../UI/Alert.vue';

export default {
  name: 'ProductsCardPage',
  components: {
    RequireAuth,
    Alert
  },
  data() {
    return {
      product: {},
      showRegModal: false,
      showLogModal: false,
      showModal: false,
      alertMessage: null,
      itemQuantity: 0
    }
  },
  props: {
    id: Number
  },
  computed: {
    ...mapState({
      cartItems: (state) => state.cartItems,
      loggedUser: (state) => state.user.loggedUser
    }),
  },
  async mounted() {
    await fetch('http://localhost:3000/products')
      .then((res) => res.json())
      .then((data) => { this.product = data })
      .catch((err) => console.log(err.message))
    await this.getItemQuantity(this.product[this.id])
  },
  methods: {
    getItemQuantity(item) {
      if (this.$store.state.userAuth.isUserLoggedIn) {
        item = { ...item };
        const temp = this.cartItems.some((i) => i.id === item.id);
        if (temp) {
          const itemIndex = this.cartItems.findIndex((el) => el.id === item.id);
          this.itemQuantity = this.cartItems[itemIndex].quantity;
        }
      }
    },
    goToCart() {
      this.$router.push('/cart');
    },
    addToCart(item) {
      if (!this.$store.state.userAuth.isUserLoggedIn) {
        this.showModal = true;
      }
      if (this.$store.state.userAuth.isUserLoggedIn) {
        item = { ...item, quantity: 1 };
        const temp = this.cartItems.some((i) => i.id === item.id);
        if (temp) {
          const itemIndex = this.cartItems.findIndex((el) => el.id === item.id);
          this.cartItems[itemIndex].quantity += 1;
          this.itemQuantity = this.cartItems[itemIndex].quantity;
        } else {
          this.cartItems.push(item);
          this.itemQuantity = 1;
        }
        this.$store.state.cartItemCount += 1;
        this.alertMessage = 'Added to cart!';
        this.$store.state.showAlert = true;
        setTimeout(() => this.$store.dispatch('hideAlert'), 1500);
      }
    },
    removeFromCart(item) {
      const temp = this.cartItems.some((i) => i.id === item.id);
      if (temp) {
        const itemIndex = this.cartItems.findIndex((el) => el.id === item.id);
        if (this.cartItems[itemIndex].quantity) {
          this.cartItems[itemIndex].quantity -= 1;
          this.itemQuantity = this.cartItems[itemIndex].quantity;
          this.$store.state.cartItemCount -= 1;
          this.alertMessage = 'Removed from cart!';
          this.$store.state.showAlert = true;
          setTimeout(() => this.$store.dispatch('hideAlert'), 1500);
        }
        if (!this.cartItems[itemIndex].quantity) {
          this.cartItems.splice(itemIndex, 1);
          this.cartItems = null;
        }
      }
    },
    closeModal() {
      if (this.showLogModal) {
        this.showLogModal = false;
      }
      if (this.showRegModal) {
        this.showRegModal = false;
      }
      if (this.showModal) {
        this.showModal = false;
      }
    },
    closeAlert() {
      this.$store.state.showAlert = false;
    }
  }
}
</script>

<style lang="scss" scoped>
.alert-modal {
  position: fixed;
  top: 10%;
  left: 0;
  z-index: 6;
  background-color: rgba(0, 128, 0, 0.75);
  width: 100%;
  height: auto;
  padding: 10px;
}
.product__page-wrapper {
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 18px 9px rgba(25, 214, 39, 0.33);
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
  background-color: rgb(68, 66, 66);
  margin: 10px 0px;
  padding: 10px;
  border-radius: 12px;
}
.product__page-image {
  width: 25%;
  margin-top: 15px;
  border: 1px solid black;
  box-shadow: 0px 0px 18px 9px rgba(25, 214, 39, 0.33);
}
.product__page-description--cart {
  width: 40%;
  margin: 10px auto;
  border-radius: 7px;
  box-shadow: 0px 0px 18px 3px rgba(25, 214, 39, 0.33);
}
.auth__nav-item {
  width: 100%;
  padding: 0;
  margin: 10px 0;
}
.auth__nav-item--btn {
  width: 100%;
  padding: 10px;
  cursor: pointer;
  background: white;
  border: 3px solid black;
}
.auth__nav-item--btn:hover{
  border: 3px solid green;
}
.cart-btn {
  width: 100%;
  height: 100%;
  padding: 5px 10px;
  border-radius: 7px;
  background: green;
  color: #FFFFFF;
  font-size: 1rem;
}
</style>
