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
.message_modal_wrapper {
    width: 50%;
    height: 300px;
    border: 1px solid black;
    border-radius: 9px;
    box-shadow: 2px 2px 6px black;
    margin: 0 auto;
    font-family: 'Open Sans';
    z-index: 3;
    position: fixed;
    top: 3%;
    left: 15%;
    background-color: snow;
}
@media screen and (max-width: 1150px) {
    .message_modal_wrapper {
        width: 80%;
    }
}
.message_modal {
    border-radius: 9px;
    border: none;
    background-color: snow;
}
.message_modal_header {
    background-color: rgb(75,221,75);
    display: flex;
    justify-content: space-between;
    height: 50px;
    border-top-left-radius: 9px;
    border-top-right-radius: 9px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
}
.message_modal_headline, .message_modal_exit {
    margin: 5px 20px;
}
.message_modal_exit_btn {
    margin-top: 5px;
    padding: 5px 15px;
    background-color: white;
    outline: none;
    border: none;
    border-radius: 3px;
    transition: 0.3s;
    cursor: pointer;
}
.message_modal_exit_btn:hover {
    color: #fff2f2;
    background-color: #df3939;
    transition: 0.3s;
}
.message_modal_body {
    padding: 15px;
    height: 150px;
    background-color: snow;
}
.message_modal_options {
    display: flex;
    justify-content: flex-end;
}
.message_modal_option_accept, .message_modal_option_decline {
    margin: 0 3%;
    padding: 0px;
    height: 20px;
}
.message_modal_option_accept p {
    margin: 0;
}
.message_modal_option_decline p {
    margin: 0;
}
.message_modal_option_accept {
    transition: 0.3s;
    border: 2px solid rgb(75,221,75);
    margin: 0 15px;
    padding: 10px 45px;
    text-align: center;
    box-sizing: content-box;
    border-radius: 4px;
}
.message_modal_option_decline {
    transition: 0.3s;
    border: 2px solid #df3939;
    margin: 0 15px;
    padding: 10px 45px;
    text-align: center;
    box-sizing: content-box;
    border-radius: 4px;
}
@media screen and (max-width: 900px) {
    .message_modal_option_accept {
        padding: 5px 25px;
    }
    .message_modal_option_decline {
        padding: 5px 25px;
    }
}
.message_modal_option_accept:hover {
    cursor: pointer;
    transition: 0.3s;
    background-color: rgb(75,221,75);
    color: #fff2f2;
}
.message_modal_option_decline:hover {
    cursor: pointer;
    transition: 0.3s;
    background-color: #df3939;
    color: #2f2f2f;
}
</style>
