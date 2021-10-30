<template>
  <div class="submit_btn" @click="clicked()">
      <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'buttonSubmit',
  methods: {
    clicked() {
      alert('Click on the button');
    }
  }
}
</script>

<style lang="scss">
@import '../styles.scss';
@import 'buttonSubmit.scss';
</style>
