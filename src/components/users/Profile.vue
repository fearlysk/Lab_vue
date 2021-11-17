<template>
  <div>
    <h1>Welcome! {{userData.name}}</h1>
  </div>
</template>

<script>
import * as userInfo from '../../constants/user';

export default {
  name: 'Profile',
  data() {
    return {
      userData: {
        name: '',
        email: '',
        password: ''
      }
    }
  },
  mounted() {
    const user = localStorage.getItem(userInfo);
    const userparsed = JSON.parse(user);
    this.userData = { ...this.userData, ...userparsed }
    this.$store.dispatch('saveUserName', this.userData);
    if (!user) {
      this.$router.push({ name: 'Home' });
    }
  }
}
</script>

<style lang="scss">
body {
    color: white;
}
</style>
