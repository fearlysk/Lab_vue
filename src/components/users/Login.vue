<template>
<teleport to="#modals-portal">
<AlertMessage 
 v-if="dataLoadingError"
 :headline="'Error'"
 :message="'Wrong user data!'"
 :isError="true"
 >
<button @click="hideErrorModal" class="alert-message__accept">
  <p class="alert-message__accept-text">Accept</p>
</button>
</AlertMessage>
  <div class="wrapper">
    <div class="login__section">
      <div class="form__header">
        <h2>Sign In</h2>
        <button class="form__header-btn" @click="closeModal">x</button>
      </div>
      <form @submit.prevent="login">
        <div class="login__section-item">
          <p>Email: </p>
          <Input
           v-model="email"
           inputType="email"
           required="true"
           />
         </div>
         <div class="login__section-item">
          <p>Password: </p>
          <Input
           v-model="password"
           :inputType="passwordFieldType"
           required="true"
          />
          <div v-if="isPassword"
          class="toggle__password-hide" @click="switchVisibility">
           <EyeOpened />
          </div>
          <div v-if="!isPassword"
          class="toggle__password-show" @click="switchVisibility" required>
           <EyeClosed />
          </div>
        </div>
        <div class="login__section-item">
          <Input
           inputType="submit"
           class="login__section-btn"
           modelValue="Submit"
          />
        </div>
      </form>
    </div>
  </div>
</teleport>
</template>

<script>
import { mapMutations } from 'vuex';
import axios from 'axios';
import Input from '../../elements/Input.vue';
import EyeOpened from '../../elements/icons/EyeOpened.vue';
import EyeClosed from '../../elements/icons/EyeClosed.vue';
import AlertMessage from '../../elements/AlertMessage.vue';

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
      passwordFieldType: 'password',
      dataLoadingError: false
    }
  },
  components: {
    Input,
    EyeOpened,
    EyeClosed,
    AlertMessage
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
    async login() {
      this.showLoadingSpinner(true);
      const result = await axios.get(
        `http://localhost:3000/users?email=${this.email}&password=${this.password}`
      )
      if (result.status === 200 && result.data.length > 0) {
        this.$store.commit('saveUserName', result.data[0]);
        this.$store.state.userAuth.isUserLoggedIn = true;
        this.showLoadingSpinner(false);
        this.$router.go()
      } else {
        this.showLoadingSpinner(false);
        this.dataLoadingError = true;
      }
    },
    switchVisibility() {
      this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
    },
    hideErrorModal() {
      this.dataLoadingError = false;
    }
  }
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
.login__wrapper {
  color: white;
  border: 1px solid white;
  padding: 15px;
  display: flex;
  flex-direction: row;
}
.login__section {
  display: block;
  border: 1px solid white;
  padding: 10px;
  margin: 0 10px;
  box-shadow: 0px 0px 18px 9px rgba(16, 122, 24, 0.75);
  margin: 0 30px;
  color: #FFFFFF;
  background-color: rgba(0,0,0, 0.85);
}
.login__section-item {
  margin: 10px 15px;
}
.login__section-btn {
  margin-top: 10px;
  padding: 5px 10px;
}
@media screen and (max-width: 763px) {
  .wrapper {
    max-width: 70%
  }
}
</style>
