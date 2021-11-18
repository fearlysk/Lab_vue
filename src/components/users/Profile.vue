<template>
  <div class="profile__wrapper">
    <div class="profile__content">
      <h1 class="profile__content-welcome">Welcome
        <span class="profile__content-welcome--name">
        {{userData.firstname}} {{userData.lastname}}!</span></h1>
          <div class="profile__content-userinfo">
            <h3>About: {{userData.aboutUser}}</h3>
            <h3>Your id: <span class="profile__content-userinfo--data">
            {{userData.id}}</span></h3>
            <h3>Your email: <span class="profile__content-userinfo--data">
            {{userData.email}}</span></h3>
            <h3>Your password: <span class="profile__content-userinfo--data">
            {{userData.password}}</span></h3>
            <h3>Sex: <span class="profile__content-userinfo--data">
            {{userData.sex}}</span></h3>
            <h3>Address: <span class="profile__content-userinfo--data">
            {{userData.address}}</span></h3>
            <h3>Shipping address: <span class="profile__content-userinfo--data">
            {{userData.shippingaddress}}</span></h3>
            <h3>Payment card: <span class="profile__content-userinfo--data">
            {{userData.paymentcard}}</span></h3>
            <form @submit.prevent="addData">
              <h2 class="profile__content-userinfo--about">Tell about yourself:</h2>
              <input v-model="userData.aboutUser" class="profile__content-userinfo-textinp">
              <br>
              <input class="profile__content-userinfo-submit" 
              type="submit" value="Submit"/>
            </form>
            <div class="user__actions">
              <h3 class="user__actions-headline">User Settings</h3>
              <div class="user__actions-item">
                <button class="user__actions-item--changepassword" 
                @click="changePassword">Change Password</button>
                <alertModal title="Change Password"
                changePasswordActive dataInfoActive="false" 
                class="modpw" :class="{hiddenpw: hideModalpw}"/>
              </div>
            </div>
          </div>
        <alertModal title="Data successfully updated!"
        class="mod" :class="{hidden: hideModal}"/>
    </div>
  </div>
</template>

<script lang="ts">
import axios from 'axios';
import * as userInfo from '../../constants/user';
import alertModal from '../../elements/alertModal.vue';
import IUser from '../../interfaces/userInterface';

export default {
  name: 'Profile',
  components: {
    alertModal
  },
  data() {
    return {
      userData: {} as IUser,
      hideModal: true,
      hideModalpw: true
    }
  },
  mounted() {
    const user = localStorage.getItem(userInfo as any);
    const userparsed = JSON.parse(user as any);
    this.userData = { ...this.userData, ...userparsed }
    this.$store.dispatch('saveUserName', this.userData);
    if (!user) {
      this.$router.push({ name: 'Home' });
    }
  },
  methods: {
    async addData() {
      const result = await axios.put(`http://localhost:3000/users/${this.userData.id}`, {
        id: this.userData.id,
        firstname: this.userData.firstname,
        lastname: this.userData.lastname,
        sex: this.userData.sex,
        address: this.userData.address,
        shippingaddress: this.userData.shippingaddress,
        paymentcard: this.userData.paymentcard,
        email: this.userData.email,
        password: this.userData.password,
        aboutUser: this.userData.aboutUser
      });
      if (result.status === 200) {
        localStorage.setItem(userInfo as any, JSON.stringify(result.data));
        this.hideModal = false;
      }
    },
    changePassword() {
      this.hideModalpw = false;
    }
  }
}
</script>

<style lang="scss">
body {
    color: white;
}
.mod {
  position: absolute;
  top: 25%;
}
.modpw {
  position: absolute;
  top: 45%;
  left: 20%;
}
.profile__wrapper {
  background-color: #000000;
}
.profile__content {
  border: 1px solid lawngreen;
  max-width: 60%;
  margin: 0 auto;
  padding: 10px;
}
.profile__content-welcome {
  text-align: center;
  padding-bottom: 6px;
  margin: 0 auto;
}
.profile__content-welcome--name {
  border-bottom: 2px solid white;
  padding-bottom: 5px;
}
.profile__content-userinfo {
  text-align: left;
  margin: 15px auto;
  max-width: 40%;
}
.profile__content-userinfo--data {
  border-bottom: 2px solid lawngreen;
  padding-bottom: 1px;
}
.profile__content-userinfo--about {
  margin-top: 15px;
}
.profile__content-userinfo-textinp {
  resize: none;
  max-width: 100%;
  padding: 4px;
}
.profile__content-userinfo-submit {
  padding: 5px 15px;
}
.user__actions {
  border: 1px solid lawngreen;
  margin-top: 10px;
}
.user__actions-headline {
  padding: 5px;
  text-align: center;
}
.user__actions-item {
  border: 1px solid green;
  padding: 6px;
}
.user__actions-item--changepassword {
  padding: 5px 15px;
}
.hidden {
  display: none !important;
}
.hiddenpw {
  display: none !important;
}
</style>
