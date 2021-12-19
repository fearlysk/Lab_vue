<template>
  <div class="profile">
    <div class="profile__content">
      <h1 class="profile__content-welcome">
        Welcome
        <span class="profile__content-welcome__name">
          {{userData.firstName}} {{userData.lastName}}!
        </span>
      </h1>
      <div class="profile__content-user-info">
        <h3>
          Your id:
          <span class="profile__content-user-info__data">{{userData.id}}</span>
        </h3>
        <h3>
          Your role:
          <span class="profile__content-user-info__data">{{userData.role}}</span>
        </h3>
        <h3>
          Your email:
          <span class="profile__content-user-info__data">{{userData.email}}</span>
        </h3>
        <h3>
          Your password:
          <span class="profile__content-user-info__data">{{userData.password}}</span>
        </h3>
        <h3>
          Sex: 
          <span class="profile__content-user-info__data">{{userData.sex}}</span>
        </h3>
        <h3>
          Address: 
          <span class="profile__content-user-info__data">{{userData.address}}</span>
        </h3>
        <h3>
          Shipping address:
          <span class="profile__content-user-info__data">{{userData.shippingAddress}}</span>
        </h3>
        <h3>
          Payment card: 
          <span class="profile__content-user-info__data">{{userData.paymentCard}}</span>
        </h3>
        <div class="user__actions">
          <h3 class="user__actions-headline">User Settings</h3>
          <div class="user__actions-item">
            <button class="user__actions-item--changepassword" 
            @click="showModal">Change user data</button>
          </div>
        </div>
      </div>
      <AlertModal title="Change Password"
      changePasswordActive dataInfoActive="false" 
      v-if="showAlertModal" @close="closeModal"/>
    </div>
  </div>
</template>

<script lang="ts">
import AlertModal from '../../elements/AlertModal.vue';
import IUser from '../../interfaces/userInterface';

export default {
  name: 'Profile',
  components: {
    AlertModal
  },
  data() {
    return {
      userData: {} as IUser,
      showAlertModal: false
    }
  },
  mounted() {
    const user = this.$store.state.user.loggedUser;
    this.userData = user;
    if (!user) {
      this.$router.push({ name: 'Home' });
    }
  },
  methods: {
    closeModal() {
      if (this.showAlertModal) {
        this.showAlertModal = false;
      }
    },
    showModal() {
      if (!this.showAlertModal) {
        this.showAlertModal = true;
      }
    },
  }
}
</script>

<style lang="scss">
body {
  color: white;
}
.modal-tooltip {
  position: absolute;
  top: 25%;
}
.profile {
  background-color: black;
  &__content {
  border: 1px solid lawngreen;
  max-width: 50%;
  margin: 0 auto;
  padding: 10px;
  }
  &__content-welcome {
  text-align: center;
  padding-bottom: 6px;
  margin: 0 auto;
  }
  &__content-welcome__name {
  border-bottom: 2px solid white;
  padding-bottom: 5px;
  }
  &__content-user-info {
  text-align: left;
  margin: 15px auto;
  max-width: 40%;
  }
  &__content-user-info__data {
  border-bottom: 2px solid lawngreen;
  padding-bottom: 1px;
  }
  &__content-user-info--about {
  margin-top: 15px;
  }
  &__content-user-info-textinp {
  resize: none;
  max-width: 100%;
  padding: 4px;
  }
  &__content-user-info-submit {
  padding: 5px 15px;
  }
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
</style>
