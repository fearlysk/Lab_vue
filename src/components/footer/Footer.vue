<template>
  <div class="footer">
    <div class="footer__headline"><h2>Incredible convinient</h2></div>
    <div class="footer__companies">
      <div><a href="https://www.rockstargames.com/" target="_blank"><img class="footer__companies-image"
      src="../../assets/images/Rockstar.png" alt="Image not found" /></a></div>
      <div><a href="https://insomniac.games/" target="_blank"><img class="footer__companies-image"
      src="../../assets/images/Insomniac.jpg" alt="Image not found" /></a></div>
      <div><a href="https://valvesoftware.com/" target="_blank"><img class="footer__companies-image"
      src="../../assets/images/Valve.png" alt="Image not found" /></a></div>
      <div><a href="https://valvesoftware.com/" target="_blank"><img class="footer__companies-image"
      src="../../assets/images/EA.png" alt="Image not found" /></a></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/colors.scss';

.footer {
  background-color: $darkgray;
  text-align: center;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  &__headline {
  margin-top: 15px;
  }
  &__companies {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin: 20px 0;
  }
  &__companies-image {
  max-width: 80px;
  max-height: 80px;
  }
}
</style>
