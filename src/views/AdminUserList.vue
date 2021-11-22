<template>
  <div class="users__list" v-for="user in users" :key="user.id">
    <p>{{ user.id }}</p>
    <p>{{ user.name }}</p>
  </div>
</template>

<script>
export default {
  name: 'AdminUserList',
  computed: {
    users() {
      return this.$store.state.users;
    }
  }
}
</script>

<style lang="scss">
.users__list {
    color: white;
}
</style>
