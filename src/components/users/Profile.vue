<template>
  <div>
    <h1>Welcome! {{name}}</h1>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  data() {
    return {
      name: ''
    }
  },
  mounted() {
    const user = localStorage.getItem('user-info');
    const userparsed = JSON.parse(user);
    this.name = userparsed.name;
    if (!user) {
      this.$router.push({ name: 'Home' });
    }
  },
}
</script>

<style lang="scss">
body {
    color: white;
}
</style>
