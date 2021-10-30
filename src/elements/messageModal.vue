<template>
    <div class="message_modal_wrapper" id="modal">
        <div class="message_modal">
            <div class="message_modal_header">
                <div class="message_modal_headline">
                    <h2>Headline</h2>
                </div>
                <div class="message_modal_exit">
                    <button id="close_modal_btn" @click="close_message()"
                    class="message_modal_exit_btn">x</button> <!-- Later change to SVG -->
                </div>
            </div>
              <div class="message_modal_body">
                    <p>{{message}}</p>
                </div>
                <div class="message_modal_options">
                    <div class="message_modal_option_accept" @click="close_message()">
                      <p>Accept</p>
                    </div>
                    <div class="message_modal_option_decline" @click="close_message()">
                      <p>Decline</p>
                    </div>
                </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'messageModal',
  data() {
    return {
      message: 'Some message will be displayed here.'
    }
  },
  methods: {
    remove() {
      const modal = document.getElementById('modal');
      modal.style.display = 'none';
    },
    close_message() {
      const modal = document.getElementById('modal');
      modal.style.opacity = 0;
      modal.style.transition = `${0.9}s`;
      modal.addEventListener('transitionend', () => { this.remove(); });
    }
  }
}
</script>

<style lang="scss">
@import '../styles.scss';
@import 'messageModal.scss';
</style>
