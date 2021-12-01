<template>
  <div class="products-order">
    <Summary 
    :totalPrice="totalPrice"
    />
    <ul class="cart-items">
      <li 
      v-for="item in cartItems" 
      :key="item.id">
        <div class="order-item">
        <div class="order-item--title">
         <h3 class="item-title">{{item.title}}</h3>
        </div>
        <div class="order-item--price">
         <h3>Price: {{item.price}}</h3>
        </div>
        <div class="order-item--quantity">
         <h3>Qty: {{item.quantity}}</h3>
        </div>
        </div>
      </li>
    </ul>
    <h2 class="order-code">Your order code: {{orderCode}}</h2>
    <br>
  </div>
  <div class="order__checkout">
    <h1>Checkout</h1>
    <form @submit.prevent="validateForm" class="order__checkout-form">
      <div class="order__checkout-form--item">
      <label for="firstname">First name:</label>
      <Input 
        inputType="text"
        v-model="firstname"
        @input="$emit('update:modelValue', $event.target.value)"
        @change="$emit('update:modelValue', $event.target.value)"
        class="user-input"
      />
      <p v-if="invalidName" class="invalid">! Name must be equal to account name</p>
      </div>
      <div class="order__checkout-form--item">
      <label for="lastname">Last name:</label>
      <Input 
        inputType="text"
        v-model="lastname"
        @input="$emit('update:modelValue', $event.target.value)"
        @change="$emit('update:modelValue', $event.target.value)"
        class="user-input"
      />
      <p v-if="invalidSurname" class="invalid">! Surname must be equal to account surname</p>
      </div>
      <div class="order__checkout-form--item">
      <label for="deliveryaddress">Delivery address:</label>
      <Input 
        inputType="text"
        v-model="deliveryaddress"
        @input="$emit('update:modelValue', $event.target.value)"
        @change="$emit('update:modelValue', $event.target.value)"
        class="user-input"
      />
      </div>
      <div class="order__checkout-form--item">
      <label for="phonenumber">Phone number:</label>
      <Input 
        inputType="text"
        v-model="phonenumber"
        @input="$emit('update:modelValue', $event.target.value)"
        @change="$emit('update:modelValue', $event.target.value)"
        class="user-input"
        :mask="'+375(##)#######'"
      />
      <p>{{phonenumber}}</p>
      <p v-if="invalidPhonenumber" class="invalid">! Phonenumber must be 12 numbers length</p>
      </div>
      <div class="order__checkout-form--item">
      <label for="deliveryday">Delivery day:</label>
      <Input 
        inputType="date"
        v-model="deliveryday"
        @input="$emit('update:modelValue', $event.target.value)"
        @change="$emit('update:modelValue', $event.target.value)"
        class="user-input"
      />
      </div>  
      <div class="order__checkout-form--item">
      <Input 
        inputType="Submit"
        :modelValue="'Confirm order'"
      />
      </div>           
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import { mapState } from 'vuex';
import Input from '../../elements/Input.vue';
import Summary from './Summary.vue';

export default {
  name: 'Order',
  components: {
    Input,
    Summary
  },
  data() {
    return {
      orderCode: '',
      firstname: '',
      lastname: '',
      deliveryaddress: '',
      deliveryday: '',
      phonenumber: '',
      invalidName: false,
      invalidSurname: false,
      invalidPhonenumber: false
    }
  },
  computed: {
    ...mapState({
      cartItems: (state) => state.cartItems,
      loggedUser: (state) => state.user.loggedUser
    }),
    totalPrice() {
      return this.cartItems.reduce((sum, el) => {
        return sum + el.price * el.quantity;
      }, 0);
    }
  },
  mounted() {
    this.generateCode();
  },
  methods: {
    generateCode() {
      const length = 10;
      const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
      let retVal = '';
      for (let i = 0, n = charset.length; i < length; i += 1) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
      }
      this.orderCode = retVal;
      this.loggedUser.orderCode = this.orderCode;
    },
    validateForm() {
      if (this.firstname.length === 0) {
        this.invalidName = true;
      } 
      if (this.lastname.length === 0) {
        this.invalidSurname = true;
      } 
      if (this.phonenumber.length !== 15) {
        this.invalidPhonenumber = true;
      } else if (this.firstname === this.loggedUser.firstname
      && this.lastname === this.loggedUser.lastname
      && this.phonenumber.length === 15) {
        this.invalidName = false;
        this.invalidSurname = false;
        this.invalidPhonenumber = false;
        this.saveOrder();
      }
    },
    async saveOrder() {
      const result = await axios.post('http://localhost:3000/orders', {
        id: this.orderCode,
        userId: this.loggedUser.id,
        firstname: this.firstname,
        lastname: this.lastname,
        deliveryaddress: this.deliveryaddress,
        deliveryday: this.deliveryday,
        phonenumber: this.phonenumber,
        ordereditems: this.cartItems
      });
      if (result.status === 201) {
        this.$store.state.cartItems = [];
        this.$store.state.cartItemCount = 0;
        this.$router.push('products');
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.products-order {
  max-width: 50%;
  margin: 0 auto;
}
.order__checkout {
  text-align: center;
  max-width: 20%;
  margin: 0 auto;
}
.order__checkout-form {
  text-align: left;
}
.order__checkout-form--item {
  margin-top: 10px;
}
.cart-items {
  list-style-type: none;
}
.order-code {
  text-align: center;
  padding: 10px 0;
  border-bottom: 1px solid green;
  max-width: 50%;
  margin: 0 auto;
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
.order-item--title {
  width: 33.3%
}
.order-item--quantity {
  display: flex;
  flex-direction: row;
}
.invalid {
  color: red;
}
</style>
