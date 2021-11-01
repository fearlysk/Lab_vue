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
.alert_message_wrapper {
    width: 580px;
    height: 250px;
    margin: 0 auto;
    border: 1px solid #393838;
    box-shadow: 2px 2px 6px black;
    border-radius: 9px;
    font-family: 'Open Sans';
}
.alert_message_header {
    background-color: rgb(75,221,75);
    display: flex;
    justify-content: space-between;
    height: 50px;
    border-top-left-radius: 9px;
    border-top-right-radius: 9px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
}
.alert_message_headline, .alert_message_exit {
    margin: 5px 20px;
}
.alert_message_exit_btn {
    margin-top: 5px;
    padding: 5px 15px;
    background-color: white;
    outline: none;
    border: none;
    border-radius: 3px;
    transition: 0.3s;
    cursor: pointer;
}
.alert_message_exit_btn:hover {
    color: #fff2f2;
    background-color: #df3939;
    transition: 0.3s;
}
.alert_message_body {
    padding: 15px;
    height: 120px;
    background-color: snow;
}
.alert_message_options {
    display: flex;
    justify-content: flex-end;
}
.alert_message_option_accept, .alert_message_option_decline {
    margin: 0 3%;
    padding: 0px;
    height: 20px;
}
.alert_message_option_accept p {
    margin: 0;
}
.alert_message_option_decline p {
    margin: 0;
}
.alert_message_option_accept {
    transition: 0.3s;
    border: 2px solid rgb(75,221,75);
    margin: 0 15px;
    padding: 10px 45px;
    text-align: center;
    box-sizing: content-box;
    border-radius: 4px;
}
.alert_message_option_decline {
    transition: 0.3s;
    border: 2px solid #df3939;
    margin: 0 15px;
    padding: 10px 45px;
    text-align: center;
    box-sizing: content-box;
    border-radius: 4px;
}
.alert_message_option_accept:hover {
    cursor: pointer;
    transition: 0.3s;
    background-color: rgb(75,221,75);
    color: #fff2f2;
}
.alert_message_option_decline:hover {
    cursor: pointer;
    transition: 0.3s;
    background-color: #df3939;
    color: #fff2f2;
}
@media screen and (max-width: 900px) {
    .alert_message_option_accept {
        padding: 5px 25px;
    }
    .alert_message_option_decline {
        padding: 5px 25px;
    }
}
</style>
