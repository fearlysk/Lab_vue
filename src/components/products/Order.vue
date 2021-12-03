<template>
<alertMessage 
 v-if="dataLoadingError"
 :message="'Failed to load data!'"
 >
<button @click="this.dataLoadingError = false" class="alertmessage__option-accept">
  <p class="alertmessage__option-accept--text">Accept</p>
</button>
</alertMessage>
  <div class="products-order">
    <Summary 
    :totalPrice="totalPrice"
    />
    <ul class="cart-items">
      <li 
      v-for="item in cartItems" 
      :key="item.id">
      <div class="order-item">
      <div class="order-item__title">
       <h3 class="item-title">{{item.title}}</h3>
      </div>
      <div class="order-item__price">
       <h3>Price: {{item.price}}</h3>
      </div>
      <div class="order-item__quantity">
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
        class="user-input"
      />
      <p v-if="this.firstname.toLowerCase() !== this.loggedUser.firstname.toLowerCase()"
      class="invalid">! Name must be equal to your account name</p>
      <p v-if="this.firstname.toLowerCase() === this.loggedUser.firstname.toLowerCase()"
      class="valid">! OK</p>
      </div>
      <div class="order__checkout-form--item">
      <label for="lastname">Last name:</label>
      <Input 
        inputType="text"
        v-model="lastname"
        class="user-input"
      />
      <p v-if="this.lastname.toLowerCase() !== this.loggedUser.lastname.toLowerCase()"
      class="invalid">! Surname must be equal to your account surname</p>
      <p v-if="this.lastname.toLowerCase() === this.loggedUser.lastname.toLowerCase()"
      class="valid">! OK</p>
      </div>
      <div class="order__checkout-form--item">
      <label for="deliveryaddress">Delivery address:</label>
      <Input 
        inputType="text"
        v-model="deliveryaddress"
        class="user-input"
      />
      </div>
      <div class="order__checkout-form--item">
      <label for="phonenumber">Phone number:</label>
      <Input 
        inputType="text"
        v-model="phonenumber"
        class="user-input"
        :mask="'+375(##)#######'"
      />
      <p>{{phonenumber}}</p>
      <p v-if="this.phonenumber.length < this.maxCharLength"
      class="invalid">! Invalid number</p>
      <p v-if="this.phonenumber.length === this.maxCharLength" class="valid">! OK</p>
      </div>
      <div class="order__checkout-form--item">
      <label for="deliveryday">Delivery day:</label>
      <Input 
        inputType="date"
        v-model="deliveryday"
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
import alertMessage from '../../elements/alertMessage.vue';

export default {
  name: 'Order',
  components: {
    Input,
    Summary,
    alertMessage
  },
  data() {
    return {
      orderCode: '',
      firstname: '',
      lastname: '',
      deliveryaddress: '',
      deliveryday: '',
      phonenumber: '',
      total: this.totalPrice,
      dataLoadingError: false,
      maxCharLength: 15
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
      if (this.firstname === this.loggedUser.firstname
      && this.lastname === this.loggedUser.lastname
      && this.phonenumber.length === this.maxCharLength) {
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
        ordereditems: this.cartItems,
        total: this.totalPrice
      });
      if (result.status === 201) {
        this.$store.state.cartItems = [];
        this.$store.state.cartItemCount = 0;
        this.$router.push({ name: 'ThankYou', params: { id: this.orderCode } });
      } else {
        this.dataLoadingError = true;
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
.order-item__title {
  width: 33.3%
}
.order-item__quantity {
  display: flex;
  flex-direction: row;
}
.invalid {
  color: red;
}
.valid {
  color: lawngreen;
}
</style>
