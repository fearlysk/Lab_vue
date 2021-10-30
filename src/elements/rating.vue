<template>
    <div class="rating_wrapper">
        <form action="#">
            <div class="form_item">
                <div class="form_label">Rate us:</div>
                <div class="rating">
                    <div class="rating_items">
                        <input id="rating_5" type="radio" class="rating_item"
                        name="rating" value="5">
                        <label for="rating_5" class="rating_label"></label>

                        <input id="rating_4" type="radio" class="rating_item"
                        name="rating" checked value="4">
                        <label for="rating_4" class="rating_label"></label>

                        <input id="rating_3" type="radio" class="rating_item"
                        name="rating" value="3">
                        <label for="rating_3" class="rating_label"></label>

                        <input id="rating_2" type="radio" class="rating_item"
                        name="rating" value="2">
                        <label for="rating_2" class="rating_label"></label>

                        <input id="rating_1" type="radio" class="rating_item"
                        name="rating" value="1">
                        <label for="rating_1" class="rating_label"></label>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
export default {
  name: 'Rating'
}
</script>

<style lang="scss">
@import '../styles.scss';
@import 'rating.scss';
</style>
