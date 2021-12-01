<template>
    <div class="alertmessage__wrapper">
        <div class="alertmessage">
            <div class="alertmessage__header">
                <div class="alertmessage__headline">
                    <h2>Error</h2>
                </div>
                <div class="alertmessage__exit">
                    <button @click="closeMessage" id="alertmessage__closebtn"
                    class="alertmessage__exitbtn">x</button>
                </div>
            </div>
            <div class="alertmessage__body">
                <p>{{message}}</p>
            </div>
            <div class="alertmessage__options">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'alertMessage',
  props: {
    message: {
      type: String,
      default: null
    }
  },
  methods: {
    closeMessage() {
      this.isMessageVisible = false;
    }
  }
}
</script>

<style lang="scss">
.alertmessage__wrapper {
    width: 580px;
    height: 250px;
    margin: 0 auto;
    border: 1px solid #393838;
    box-shadow: 2px 2px 6px black;
    border-radius: 9px;
    font-family: 'Open Sans';
    background-color: #222222;
    z-index: 4;
    position: absolute;
    top: 25%;
    left: 33%;
}
.alertmessage__header {
    background-color: rgb(75,221,75);
    display: flex;
    justify-content: space-between;
    height: 50px;
    border-top-left-radius: 9px;
    border-top-right-radius: 9px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
}
.alertmessage__headline, .alertmessage__exit {
    margin: 5px 20px;
}
.alertmessage__exitbtn {
    margin-top: 5px;
    padding: 5px 15px;
    background-color: white;
    outline: none;
    border: none;
    border-radius: 3px;
    transition: 0.3s;
    cursor: pointer;
}
.alertmessage__exitbtn:hover {
    color: #fff2f2;
    background-color: #df3939;
    transition: 0.3s;
}
.alertmessage__body {
    padding: 15px;
    height: 120px;
    background-color: #222222;
}
.alertmessage__options {
    display: flex;
    justify-content: flex-end;
}
.alertmessage__option-accept {
    margin: 0 3%;
    padding: 0px;
    height: 20px;
}
.alertmessage__option-accept--text {
    margin: 0;
}
.alertmessage__option-accept {
    transition: 0.3s;
    border: 2px solid rgb(75,221,75);
    margin: 0 15px;
    padding: 10px 45px;
    text-align: center;
    box-sizing: content-box;
    border-radius: 4px;
}
.alertmessage__option-accept:hover {
    cursor: pointer;
    transition: 0.3s;
    background-color: rgb(75,221,75);
    color: #fff2f2;
}
@media screen and (max-width: 900px) {
    .alertmessage__option-accept {
        padding: 5px 25px;
    }
}
</style>
