<template>
  <div>
    <div class="sep"><h1>Elements</h1></div>
      <button-submit><p>Submit</p></button-submit>
        <br>
      <alert-modal />
        <br>
      <input-text />
           <br>
      <input-password />
          <br>
        <rating />
          <br>
          <hr>
     <div class="sep"><h1>Registration</h1></div>
       <registration />
          <br>
        <message-modal />
          <br>
        <alert-message />
          <br>
  </div>
</template>

<script>
import buttonSubmit from '../elements/buttonSubmit.vue';
import alertModal from '../elements/alertModal.vue';
import inputText from '../elements/inputText.vue';
import inputPassword from '../elements/inputPassword.vue';
import rating from '../elements/rating.vue';
import Registration from '../components/users/Registration.vue';
import messageModal from '../elements/messageModal.vue';
import alertMessage from '../elements/alertMessage.vue';

export default {
  name: 'Home',
  components: {
    buttonSubmit,
    alertModal,
    inputText,
    inputPassword,
    rating,
    Registration,
    messageModal,
    alertMessage
  }
}
</script>

<style lang="scss">
.sep {
  margin: 10px 0;
  text-align: center;
}
</style>
