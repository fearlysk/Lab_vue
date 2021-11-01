<template>
    <div class="registration_form_wrapper">
        <form>
            <input-text />
            <input-password />
        <input type="submit" class="registration_form_submit" value="Submit" />
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

<style lang="scss">
.registration_form_wrapper {
    display: flex;
    justify-content: center;
    margin: 0 auto;
    width: 360px;
    border: 2px solid rgb(75,221,75);
    padding: 10px;
    border-radius: 4px;
}
.registration_form_submit {
    width: 100%;
}
</style>
