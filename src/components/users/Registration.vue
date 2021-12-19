<template>
<teleport to="#modals-portal">
  <div class="wrapper">
    <div class="registration__section">
        <div class="form__header">
          <h2>Sign Up</h2>
          <button class="form__header-btn" @click="closeModal">x</button>
        </div>
        <form @submit.prevent="signUp">
         <div class="registration__section-item">
         <label for="firstName">First name:</label>
         <Input
          id="firstName"
          inputType="text"
          v-model:modelValue="userRegData.firstName"
          required="true" 
         />
        </div>
        <div class="registration__section-item">
         <label for="lastName">Last name:</label>
         <Input
          id="lastName"
          inputType="text"
          v-model:modelValue="userRegData.lastName"
          required="true"
         />
        </div>
        <div class="registration__section-item">
          <p>Sex: </p>
           <input type="radio" id="male" value="Male" v-model="userRegData.sex" />
           <label for="one">Male</label>
           <br>
           <input type="radio" id="female" value="Female" v-model="userRegData.sex" />
           <label for="two">Female</label>
           <br>
        </div>
        <div class="registration__section-item">
         <label for="address">Address:</label>
         <Input
          id="address"
          inputType="text"
          v-model:modelValue="userRegData.address"
         />
        </div>
        <div class="registration__section-item">
         <label for="shippingAddress">Shipping Address:</label>
         <Input
          id="shippingAddress"
          inputType="text" 
          v-model:modelValue="userRegData.shippingAddress"
         />
        </div>
        <div class="registration__section-item">
         <label for="paymentCard">Payment Card:</label>
         <Input
          id="paymentCard"
          inputType="number"
          v-model:modelValue="userRegData.paymentCard"
         />
        </div>
        <div class="registration__section-item">
         <label for="email">Email: </label>
         <Input
          id="email"
          inputType="email"
          v-model:modelValue="userRegData.email"
          required="true"
         />
        </div>
        <div class="registration__section-item">
          <label for="password">Password:</label>
          <Input
           id="password"
           v-model="userRegData.password"
           :inputType="this.passwordFieldType"
           required="true"
          />
         <div v-if="isPassword" class="toggle__password-hide" @click="switchVisibility">
           <EyeOpened />
         </div>
         <div v-if="!isPassword" class="toggle__password-show" @click="switchVisibility">
           <EyeClosed />
         </div>
        </div>
        <div class="registration__section-item">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  </div>
</teleport>
</template>

<script lang="ts">
import { mapMutations } from 'vuex';
import axios from 'axios';
import IUser from '../../interfaces/userInterface';
import Input from '../../elements/Input.vue';
import EyeOpened from '../../elements/icons/EyeOpened.vue';
import EyeClosed from '../../elements/icons/EyeClosed.vue';

export default {
  name: 'Registration',
  data() {
    return {
      userRegData: {} as IUser,
      passwordFieldType: 'password'
    }
  },
  components: {
    Input,
    EyeOpened,
    EyeClosed
  },
  computed: {
    isPassword() {
      return this.passwordFieldType === 'password';
    }
  },
  methods: {
    ...mapMutations([
      'showLoadingSpinner'
    ]),
    closeModal() {
      this.$emit('close');
    },
    async signUp() {
      this.showLoadingSpinner(true);
      const userData = {
        firstName: this.userRegData.firstName,
        lastName: this.userRegData.lastName,
        sex: this.userRegData.sex,
        role: 'user',
        address: this.userRegData.address,
        shippingAddress: this.userRegData.shippingAddress,
        paymentCard: this.userRegData.paymentCard,
        email: this.userRegData.email,
        password: this.userRegData.password
      }
      const result = await axios.post('http://localhost:3000/users', userData);
      if (result.status === 201) {
        this.$store.commit('saveUserName', result.data);
        this.$store.state.userAuth.isUserLoggedIn = true;
        this.showLoadingSpinner(false);
        this.$router.go()
      }
    },
    switchVisibility() {
      this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
    }
  },
}
</script>

<style lang="scss" scoped>
.wrapper {
  position: fixed;
  max-width: 30%;
  z-index: 4;
  left: 0;
  right: 0;
  margin: 5% auto;
}
.eyesvg {
  fill: white;
  stroke: white;
}
.hide {
  display: none;
}
pre {
  text-align: left;
}
.preview {
  border: 1px solid white;
  padding: 12px;
  color: white;
}
.form__header {
  display: flex;
  justify-content: space-between;
}
.form__header-btn {
  padding: 5px 10px;
}
.registration__wrapper {
  border: 1px solid white;
  padding: 15px;
  display: flex;
  flex-direction: row;
}
.registration__section {
  display: block;
  border: 1px solid white;
  padding: 10px;
  background-color: rgba(0,0,0, 0.85);
  box-shadow: 0px 0px 18px 9px rgba(16, 122, 24, 0.75);
  margin: 0 30px;
  color: #FFFFFF;
  z-index: 4;
}
.registration__section-item {
  margin: 10px 15px;
}
.registration__section-btn {
  margin-top: 10px;
  padding: 5px 10px;
}
@media screen and (max-width: 763px) {
  .wrapper {
    max-width: 70%
  }
}
</style>
