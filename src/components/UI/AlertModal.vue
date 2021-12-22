<template>
<teleport to="#modals-portal">
  <div class="alert-modal" :class="{inactive: isClosed}">
    <div class="alert-modal__headline">
      <div><h1>{{ title }}</h1></div>
      <div><button class="alert-modal__headline-btn" @click="closeModal">x</button></div>
    </div>
    <div class="alert-modal__form">
        <div class="alert-modal__change-data">
          <h2>First name:</h2>
            <Input
             class="alert-modal__change-data--input" 
             v-model="userData.firstName"
             placeholder="First name" />
        </div>
        <div class="alert-modal__change-data">
          <h2>Last name:</h2>
            <Input
             class="alert-modal__change-data--input" 
             v-model="userData.lastName"
             placeholder="Last name" />
        </div>
        <div class="alert-modal__change-data">
          <h2>Password:</h2>
            <Input
             class="alert-modal__change-data--input" 
             v-model="userData.password"
             placeholder="Password" />
        </div>
        <div class="alert-modal__change-data">
          <h2>Email: </h2>
            <Input
             class="alert-modal__change-data--input" 
             v-model="userData.email"
             placeholder="Email" />
        </div>
      <div @click="addData" class="accept__btn"><h3>Confirm</h3></div>
    </div>
  </div>
</teleport>
</template>

<script lang="ts">
import axios from 'axios';
import Input from './Input.vue';
import IUser from '../../interfaces/userInterface';

export default {
  name: 'AlertModal',
  data() {
    return {
      userData: {} as IUser,
      isClosed: false,
    }
  },
  components: {
    Input
  },
  props: {
    title: String,
    subtitle: String,
    changePasswordActive: Boolean,
    dataInfoActive: Boolean
  },
  mounted() {
    const user = this.$store.state.user.loggedUser;
    this.userData = user;
    if (!user) {
      this.$router.push({ name: 'Home' });
    }
  },
  methods: {
    closeModals() {
      this.isClosed = true;
      this.$router.go();
    },
    closeModal() {
      this.$emit('close');
    },
    async addData() {
      const result = await axios.put(`http://localhost:3000/users/${this.userData.id}`, {
        id: this.userData.id,
        role: this.userData.role,
        firstName: this.userData.firstName,
        lastName: this.userData.lastName,
        sex: this.userData.sex,
        address: this.userData.address,
        shippingAddress: this.userData.shippingAddress,
        paymentCard: this.userData.paymentCard,
        email: this.userData.email,
        password: this.userData.password
      });
      console.log(result.status);
      if (result.status === 200) {
        this.$store.commit('saveUserName', result.data);
        this.$store.state.userAuth.isUserLoggedIn = true;
        this.$router.go();
        this.closeModal();
      }
    },
  }
}
</script>

<style lang="scss">
@import '../../assets/styles/colors.scss';

.alert-modal {
  background-color: $darkbg;
  height: auto;
  padding: 10px 0;
  border-radius: 3px;
  color: #fff2f2;
  border: 1px solid green;
  position: fixed;
  max-width: 40%;
  z-index: 4;
  left: 0;
  right: 0;
  top: 25%;
  margin: auto !important;
}
.alert-modal__headline {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0;
  margin: 0 10%;
  border-bottom: 1px solid green;
}
.alert-modal__headline-btn {
  padding: 5px 10px;
}
.alert-modal-btns {
  display: flex;
  justify-content: space-evenly;
  min-width: 50%;
}
.accept__btn {
  background-color: $lightgreen;
  color: #fff2f2;
  transition: 0.4s;
  margin: 0 40px;
  min-width: 50%;
  padding: 6px 12px;
  border-radius: 3px;
  text-align: center;
}
.accept__btn:hover {
  transform: scale(1.1);
  transition: 0.4s;
  cursor: pointer;
}
.inactive {
  display: none !important;
}
.alert-modal__change-data {
  max-width: 70%;
  margin: 15px auto;
}
.alert-modal__change-data--input {
  margin: 10px;
}
</style>
