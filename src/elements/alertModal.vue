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
.alert_modal {
    background-color: #393838;
    height: 70px;
    width: 70%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 3px;
    color: #fff2f2;
    z-index: 4;
    position: relative;
}
.alert_modal > div {
    margin-left: 30px;
}
.alert_modal_btns {
    display: flex;
    justify-content: space-evenly;
}
.alert_modal_btns > div {
    margin: 0 25px;
    padding: 6px 12px;
    border-radius: 3px;
}
.cancel_btn {
    background-color: crimson;
    color: #fff2f2;
    transition: 0.4s;
}
.cancel_btn:hover {
    transform: scale(1.1);
    transition: 0.4s;
    cursor: pointer;
}
.accept_btn {
    background-color: rgb(75,221,75);
    color: #fff2f2;
    transition: 0.4s;
}
.accept_btn:hover {
    transform: scale(1.1);
    transition: 0.4s;
    cursor: pointer;
}
.alert_modal_error {
    background-color: #df3939;
}
.alert_modal_info {
    background-color: #f7e13e;
}
.alert_modal_success {
    background-color: lawngreen;
}
.inactive {
    display: none;
}
</style>
