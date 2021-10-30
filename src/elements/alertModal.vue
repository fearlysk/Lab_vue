<template>
  <div class="alert_modal"
    :class="{alert_modal_error: isError,
            alert_modal_info: isInfo,
            alert_modal_success: isSuccess,
            inactive: !isActive}">
    <div><h3>{{ headline }}</h3></div>
     <div class="alert_modal_btns">
        <div @click="closeModal()" class="cancel_btn">Отменить</div>
        <div @click="closeModal()" class="accept_btn">Принять</div>
     </div>
  </div>
</template>

<script>
export default {
  name: 'alertModal',
  data() {
    return {
      headline: '',
      isError: false,
      isInfo: false,
      isSuccess: true,
      isActive: true
    }
  },
  created() {
    this.checkModalType();
  },
  methods: {
    closeModal() {
      this.isActive = false;
    },
    checkModalType() {
      if (this.isError === true && this.isInfo === false && this.isSuccess === false) {
        this.headline = 'Error'
      } else if (this.isError === false && this.isInfo === true && this.isSuccess === false) {
        this.headline = 'Info'
      } else if (this.isError === false && this.isInfo === false && this.isSuccess === true) {
        this.headline = 'Success'
      } else {
        this.headline = 'Unknown'
      }
    }
  }
}
</script>

<style lang="scss">
@import '../styles.scss';
@import 'alertModal.scss';
</style>
