<template>
  <div class="input_text">
    <h3>Enter Your Name:</h3>
      <div v-bind:class="{ invalid_msg_input: isValid}" class="valid_msg_input">
        <h6>Имя</h6>
          <div style="display: flex">
          <input type="text" @onchange="validatename" v-model="name"
           placeholder="Ваше имя" name="name" required>
          <button @click="removetext()" v-if="name != ''" class="remove_text">x</button>
          </div>
        </div>
       <p v-bind:class="{invalid_msg: isValid}" class="valid_msg" v-if="msg.name">{{msg.name}}</p>
       <p class="invalid_msg" v-else>Enter a name</p>
  </div>
</template>

<script>
export default {
  name: 'inputText',
  data() {
    return {
      name: '',
      msg: [],
      isValid: true
    }
  },
  watch: {
    name(value) {
      this.name = value;
      this.validateName(value);
    }
  },
  methods: {
    validateName(value) {
      const difference = 8 - value.length;
      const overdifference = value.length - 8;
      if (value.length < 8) {
        this.msg.name = `Must be 8 characters! ${difference} characters left`;
        this.isValid = true;
      } else if (value.length === 8) {
        this.msg.name = 'OK';
        this.isValid = false;
      } else {
        this.msg.name = `More than 8! ${overdifference} more than needed`;
      }
    },
    removetext() {
      this.name = '';
    }
  }
}
</script>

<style lang="scss">
@import '../styles.scss';
@import 'inputText.scss';
</style>
