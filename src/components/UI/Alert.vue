<template>
  <div v-if="isVisible" class="alert">
   <div>{{message}}</div>
   <div><button @click="closeAlert" class="alert__close-btn">x</button></div>   
  </div>
</template>

<script>
export default {
  name: 'Alert',
  data() {
    return {
      isVisible: true
    }
  },
  props: {
    message: {
      type: String,
      default: null
    }
  },
  methods: {
    closeAlert() {
      this.$emit('close');
    }
  }
}
</script>

<style lang="scss" scoped>
.alert {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: auto;
  margin: 20px 0;
}
.alert__close-btn {
  padding: 5px 10px;
}
</style>
