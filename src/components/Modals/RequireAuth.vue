<template>
  <teleport to="#modals-portal">
    <Login v-if="showLogModal" @close="closeModal" />
    <Registration v-if="showRegModal" @close="closeModal" />
  </teleport>
  <div class="auth">
    <div class="auth__header">
      <div><h2>To order, please sign in or register:</h2></div>
      <div><button @click="closeModal" class="auth__header-btn">x</button></div>
    </div>
    <div class="auth__nav-item">
     <button class="auth__nav-btn"
     @click="showLoginModal">Sign In</button>
    </div>
    <div class="auth__nav-item">
     <button class="auth__nav-btn"
     @click="showRegistrationModal">Sign Up</button>
    </div>
  </div>
</template>

<script>
import Login from './Login.vue';
import Registration from './Registration.vue';

export default {
  name: 'RequireAuth',
  data() {
    return {
      showRegModal: false,
      showLogModal: false,
      showModal: false
    }
  },
  components: {
    Login, 
    Registration,
  },
  methods: {
    showLoginModal() {
      if (!this.showLogModal) {
        this.showLogModal = true;
        this.showRegModal = false
      }
    },
    showRegistrationModal() {
      if (!this.showRegModal) {
        this.showRegModal = true;
        this.showLogModal = false;
      }
    },
    closeModal() {
      this.$emit('close');
    },
  }
}
</script>

<style lang="scss" scoped>
.auth {
  position: fixed;
  max-width: 40%;
  z-index: 3;
  background-color: rgba(0, 0, 0, 0.85);
  border: 1px solid green;
  padding: 10px;
  left: 0;
  right: 0;
  margin: 15% auto;
}
.auth__header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.auth__header-btn {
  padding: 5px 10px;
}
.auth__nav-item {
  width: 100%;
  padding: 0;
  margin: 10px 0;
}
.auth__nav-btn {
  width: 100%;
  padding: 10px;
  cursor: pointer;
  background: white;
  border: 3px solid black;
}
.auth__nav-btn:hover{
  border: 3px solid green;
}
</style>
