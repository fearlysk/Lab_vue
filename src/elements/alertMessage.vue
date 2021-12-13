<template>
    <div class="alert-message__wrapper">
        <div class="alert-message">
            <div :class="{'alert-message__header--error': isError,
            'alert-message__header': !isError}">
                <div class="alert-message__headline">
                    <h2>{{headline}}</h2>
                </div>
            </div>
            <div class="alert-message__body">
                <p>{{message}}</p>
            </div>
            <div class="alert-message__options">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'AlertMessage',
  props: {
    headline: {
      type: String,
      default: null
    },
    message: {
      type: String,
      default: null
    },
    isError: {
      type: Boolean,
      default: false
    }
  },
}
</script>

<style lang="scss">
@import '../assets/styles/colors.scss';

.alert-message__wrapper {
  width: 40%;
  height: auto;
  margin: 0 auto;
  border: 1px solid $graybg;
  box-shadow: 2px 2px 6px black;
  border-radius: 9px;
  font-family: 'Open Sans';
  background-color: $darkbg;
  z-index: 6;
  position: fixed;
  top: 25%;
  left: 33%;
}
.alert-message__header {
  background-color: $lightgreen;
  display: flex;
  justify-content: space-between;
  height: auto;
  padding: 5px;
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
}
.alert-message__header--error {
  background-color: $crimson;
  display: flex;
  justify-content: space-between;
  height: auto;
  padding: 5px;
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
}
.alert-message__headline, .alert-message__exit {
  margin: 5px 20px;
}
.alert-message__exit-btn {
  margin-top: 5px;
  padding: 5px 15px;
  background-color: white;
  outline: none;
  border: none;
  border-radius: 3px;
  transition: 0.3s;
  cursor: pointer;
}
.alert-message__exit-btn:hover {
  color: $white;
  background-color: $crimson;
  transition: 0.3s;
}
.alert-message__body {
  padding: 25px;
  height: auto;
  background-color: $graybg;
}
.alert-message__options {
  display: flex;
  justify-content: flex-end;
  margin: 15px 0;
}
.alert-message__accept {
  margin: 0 3%;
  height: auto;
  margin-top: 10px;
}
.alert-message__accept-text {
  margin: 0;
}
.alert-message__accept {
  transition: 0.3s;
  border: 2px solid $graybg;
  margin: 0 15px;
  padding: 10px 45px;
  text-align: center;
  box-sizing: content-box;
  border-radius: 4px;
}
.alert-message__accept:hover {
  cursor: pointer;
  transition: 0.3s;
  background-color: $graybg;
  color: #fff2f2;
}
@media screen and (max-width: 900px) {
  .alert-message__accept {
      padding: 5px 25px;
  }
}
</style>
