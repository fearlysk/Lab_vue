<template>
  <div class="users__list" v-for="user in users" :key="user.id">
    <p>{{ user.id }}</p>
    <p>{{ user.name }}</p>
  </div>
</template>

<script>
export default {
  name: 'AdminUserList',
  data() {
    return {
      users: {}
    }
  },
  mounted() {
    fetch('http://localhost:3000/users')
      .then((res) => res.json())
      .then((data) => { this.users = data })
      .catch((err) => console.log(err.message))
  },
}
</script>

<style lang="scss">
.users__list {
    color: white;
}
</style>
