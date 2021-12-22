<template>
<AlertMessage 
 v-if="dataLoadingError"
 :headline="'Error'"
 :message="'Failed to load data!'"
 > 
<button @click="closeErrorModal" class="alert-message__accept">
  <p class="alert-message__accept-text">Accept</p>
</button>
</AlertMessage>
  <div class="products-order">
    <Summary 
     :totalPrice="totalPrice"
    />
    <ul class="cart-items">
      <li 
       v-for="item in cartItems" 
       :key="item.id">
        <div class="order__item">
        <div class="order__item-title">
         <h3 class="item-title">{{item.title}}</h3>
        </div>
        <div class="order__item-price">
         <h3>Price: {{item.price}}</h3>
        </div>
        <div class="order__item-quantity">
         <h3>Qty: {{item.quantity}}</h3>
        </div>
        </div>
      </li>
    </ul>
  <h2 class="order__code">Your order code: {{orderCode}}</h2>
  <br>
  </div>
  <div class="order__checkout">
    <h1>Checkout</h1>
    <form @submit.prevent="validateForm" class="order__checkout-form">
      <div class="order__item">
      <label for="firstname">First name:</label>
      <Input 
        inputType="text"
        v-model="firstName"
      />
      <p v-if="this.invalidName"
      class="invalid">! Name must be equal to your account name</p>
      <p v-if="this.invalidName === false" class="valid">! OK</p>
      </div>
      <div class="order__item">
      <label for="lastname">Last name:</label>
      <Input 
        inputType="text"
        v-model="lastName"
      />
      <p v-if="this.invalidSurname"
      class="invalid">! Surname must be equal to your account surname</p>
      <p v-if="this.invalidSurname === false" class="valid">! OK</p>
      </div>
      <div class="order__item">
      <label for="delivery-address">Delivery address:</label>
      <Input 
        inputType="text"
        v-model="deliveryAddress"
      />
      </div>
      <div class="order__item">
      <label for="phone-number">Phone number:</label>
      <Input 
        inputType="text"
        v-model="phoneNumber"
        :mask="'+375(##)#######'"
      />
      <p>{{phonenumber}}</p>
      <p v-if="this.invalidPhonenumber"
      class="invalid">! Invalid number</p>
      <p v-if="this.invalidPhonenumber === false" class="valid">! OK</p>
      </div>
      <div class="order__item">
      <label for="delivery-day">Delivery day:</label>
      <Input 
        inputType="date"
        v-model="deliveryDay"
      />
      </div>  
      <button class="order__item-btn" type="submit">Submit</button>         
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import { mapState } from 'vuex';
import Input from '../../UI/Input.vue';
import Summary from './Summary.vue';
import AlertMessage from '../../UI/AlertMessage.vue';

export default {
  name: 'Order',
  components: {
    Input,
    Summary,
    AlertMessage
  },
  data() {
    return {
      orderCode: '',
      firstName: '',
      lastName: '',
      deliveryAddress: '',
      deliveryDay: '',
      phoneNumber: '',
      invalidName: null,
      invalidSurname: null,
      invalidPhonenumber: null,
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
    closeErrorModal() {
      this.dataLoadingError = false
    },
    validateForm() {
      if (this.firstName.toLowerCase() !== this.loggedUser.firstName.toLowerCase()) {
        this.invalidName = true;
      }
      if (this.lastName.toLowerCase() !== this.loggedUser.lastName.toLowerCase()) {
        this.invalidSurname = true;
      }
      if (this.phoneNumber.length < this.maxCharLength) {
        this.invalidPhonenumber = true;
      }
      if (this.firstName.toLowerCase() === this.loggedUser.firstName.toLowerCase()
      && this.lastName.toLowerCase() === this.loggedUser.lastName.toLowerCase()
      && this.phoneNumber.length === this.maxCharLength) {
        this.invalidName = false;
        this.invalidSurname = false;
        this.invalidPhonenumber = false;
        this.saveOrder();
      }
    },
    async saveOrder() {
      const orderData = {
        id: this.orderCode,
        userId: this.loggedUser.id,
        firstName: this.firstName,
        lastName: this.lastName,
        deliveryAddress: this.deliveryAddress,
        deliveryDay: this.deliveryDay,
        phoneNumber: this.phoneNumber,
        orderedItems: this.cartItems,
        total: this.totalPrice
      }
      const result = await axios.post('http://localhost:3000/orders', orderData);
      if (result.status === 201) {
        this.$store.state.cartItems = [];
        this.$store.state.cartItemCount = 0;
        this.$router.push({ name: 'Thanks', params: { id: this.orderCode } });
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
  margin: auto;
}
.order__checkout-form {
  text-align: left;
}
.order__checkout-form__item {
  margin-top: 10px;
}
.cart-items {
  list-style-type: none;
}
.order__code {
  text-align: center;
  padding: 10px 0;
  border-bottom: 1px solid green;
  max-width: 50%;
  margin: 0 auto;
}
.order__item {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid green;
  padding: 10px 0;
}
.order__item-btn {
  margin: 10px auto;
  width: 100%;
}
.order__item-title {
  width: 33.3%
}
.order__item-quantity {
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
