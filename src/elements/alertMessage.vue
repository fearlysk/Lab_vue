<template>
    <div class="alert_message_wrapper">
        <div class="alert_message">
            <div class="alert_message_header" id="alert_header">
                <div class="alert_message_headline">
                    <h2>{{ headline }}</h2>
                </div>
                <div class="alert_message_exit">
                    <button id="alert_message_close_btn"
                    class="alert_message_exit_btn">x</button> <!-- Later change to SVG -->
                </div>
             </div>
            <div class="alert_message_body">
                    <p>{{message}}</p>
                </div>
                 <div class="alert_message_options">
                    <div class="alert_message_option_accept"><p>Accept</p></div>
                    <div class="alert_message_option_decline"><p>Decline</p></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'alertMessage',
  data() {
    return {
      headline: Math.floor(Math.random() * 2) === 1 ? 'Error' : 'Info',
      message: 'Some message'
    }
  },
  methods: {}
}
</script>

<style lang="scss">
@import '../styles.scss';
@import 'alertMessage.scss';
</style>
