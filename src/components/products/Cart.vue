<template>
  <div class="cart__wrapper">
    <div v-if="totalPrice" class="cart">
      <h1 class="cart__headline">Cart</h1>
      <h2>Summary: </h2>
      <Summary 
       :totalPrice="totalPrice"
       />
         <ul class="cart__items">
           <li 
             v-for="item in searchHandler" 
             :key="item.id">
             <div class="order-item">
               <div class="order-item__title">
                <h3 class="item-title">{{item.title}}</h3>
               </div>
               <div class="order-item__price">
                <h3>Price: {{item.price}}</h3>
               </div>
               <div class="order-item__quantity">
                <button class="quantity-btn" @click="addToCart(item)">+</button>
                <h3>Qty: {{item.quantity}}</h3>
                <button class="quantity-btn" @click="removeFromCart(item)">-</button>
               </div>
             </div>
            </li>
         </ul>
         <router-link to="/order"><button class="checkout-btn">Checkout</button></router-link>
         <h2>Search:</h2>
          <Input
           inputType="search"
           v-model="search"
           class="search__input-field"
          />
       </div>
      <CartEmpty v-else />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Summary from './Summary.vue';
import CartEmpty from './CartEmpty.vue';
import Input from '../../elements/Input.vue'

export default {
  name: 'Cart',
  components: {
    Summary,
    CartEmpty,
    Input
  },
  data() {
    return {
      search: ''
    }
  },
  computed: {
    ...mapState({
      cartItems: (state) => state.cartItems
    }),
    searchHandler() {
      return this.cartItems.filter((item) => item.title.toLowerCase()
        .includes(this.search.toLowerCase()));
    },
    totalPrice() {
      return this.cartItems.reduce((sum, el) => {
        return sum + el.price * el.quantity;
      }, 0);
    },
    ...mapState({
      cartItems: (state) => state.cartItems
    })
  },
  methods: {
    addToCart(item) {
      item = { ...item, quantity: 1 };
      const isItemsInCart = this.cartItems.some((i) => i.id === item.id);
      if (isItemsInCart) {
        const itemIndex = this.cartItems.findIndex((el) => el.id === item.id);
        this.cartItems[itemIndex].quantity += 1;
      } else {
        this.cartItems.push(item);
      }
      this.$store.state.cartItemCount += 1;
    },
    removeFromCart(item) {
      const isItemsInCart = this.cartItems.some((i) => i.id === item.id);
      if (isItemsInCart) {
        const itemIndex = this.cartItems.findIndex((el) => el.id === item.id);
        if (this.cartItems[itemIndex].quantity) {
          this.cartItems[itemIndex].quantity -= 1;
          this.$store.state.cartItemCount -= 1;
        }
        if (!this.cartItems[itemIndex].quantity) {
          this.cartItems.splice(itemIndex, 1);
        }
      }
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/colors.scss';

.cart__headline {
  text-align: center;
}
.cart {
  border: 1px solid $lightgreen;
  max-width: 60%;
  margin: 0 auto;
}
.cart__items {
  list-style-type: none;
}
.order-item {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid green;
  padding: 10px 0;
}
.order-item__title {
  width: 33.3%
}
.order-item__quantity {
  display: flex;
  flex-direction: row;
}
.quantity-btn {
  padding: 10px;
  margin: 0 10px;
}
.checkout-btn {
  padding: 10px 15px;
}
.item-title {
  margin: 0 5px;
}
</style>
