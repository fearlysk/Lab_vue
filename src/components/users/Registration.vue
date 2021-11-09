<template>
    <div class="registration__form-wrapper">
        <form>
          <div class="form__header">
            <h2>Sign In</h2>
            <button class="form__header-btn" @click="$emit('close')">x</button>
          </div>
          <input-text />
          <input-password />
          <input type="submit" class="registration__form-submit" value="Submit" />
        </form>
    </div>
</template>

<script>
import inputText from '../../elements/inputText.vue';
import inputPassword from '../../elements/inputPassword.vue';

export default {
  name: 'Registration',
  components: {
    inputText,
    inputPassword
  }
}
</script>

<style lang="scss" scoped>
.registration__form-wrapper {
    display: flex;
    justify-content: center;
    margin: 0 auto;
    width: 360px;
    border: 2px solid rgb(75,221,75);
    padding: 10px;
    border-radius: 4px;
    background-color: #FFFFFF;
}
.registration__form-submit {
    width: 100%;
}
.form__header {
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
}
.form__header-btn {
    padding: 5px 15px;
}
</style>
