<template>
    <div class="registration_form_wrapper">
        <form action="#" method="POST">
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
@import '../styles.scss';
@import 'users.scss';
</style>
