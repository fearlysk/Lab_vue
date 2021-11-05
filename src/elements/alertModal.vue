<template>
  <div class="alert__modal"
    :class="alertModalType">
    <div class="alert__modal-headline"><h3>{{ headline }}</h3></div>
     <div class="alert__modal-btns">
        <div @click="closeModal()" class="cancel__btn">Отменить</div>
        <div @click="closeModal()" class="accept__btn">Принять</div>
     </div>
  </div>
</template>

<script>
export default {
  name: 'alertModal',
  data() {
    return {
      headline: '',
      alertModalType: {
        isError: false,
        isInfo: false,
        isSuccess: true,
        isClosed: false
      }
    }
  },
  created() {
    this.setHeadline();
  },
  methods: {
    closeModal() {
      this.alertModalType.isClosed = true;
    },
  }
}
</script>

<style lang="scss">
.alert__modal {
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
    &.isError {
      background-color: #df3939;
    }
    &.isError::before {
      content: 'Error';
      margin-left: 6%;
      font-size: 1.5rem;
    }
    &.isInfo {
      background-color: #f7e13e;
    }
    &.isInfo::before {
      content: 'Info';
      margin-left: 6%;
      font-size: 1.5rem;
    }
    &.isSuccess {
      background-color: rgb(75,221,75);
    }
    &.isSuccess::before {
      content: 'Success';
      margin-left: 6%;
      font-size: 1.5rem;
    }
    &.isClosed {
      display: none;
    }
}
.alert__modal-headline {
    margin-left: 30px;
}
.alert__modal-btns {
    display: flex;
    justify-content: space-evenly;
}
.cancel__btn {
    background-color: crimson;
    color: #fff2f2;
    transition: 0.4s;
    margin: 0 25px;
    padding: 6px 12px;
    border-radius: 3px;
}
.cancel__btn:hover {
    transform: scale(1.1);
    transition: 0.4s;
    cursor: pointer;
}
.accept__btn {
    background-color: rgb(75,221,75);
    color: #fff2f2;
    transition: 0.4s;
    margin: 0 25px;
    padding: 6px 12px;
    border-radius: 3px;
}
.accept__btn:hover {
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
