<template>
    <div class="header">
        <div><h1>Game Store</h1></div>
            <div class="header_nav">
                <div class="header_nav_item">
                    <a href="/">Home</a>
                </div>

                <div class="header_nav_item" id="header_nav_item_products">
                    <div class="products_link">
                        <a class="header_nav_item_products" href="/products">Products</a>
                    </div>
                     <div class="products_dropdown_wrapper">
                        <ul class="products_dropdown">
                            <li class="products_dropdown_item">
                                <a href="/products/1">Battlefield 1</a>
                            </li>
                            <li class="products_dropdown_item">
                                <a href="/products/2">Grand Theft Auto V</a>
                            </li>
                            <li class="products_dropdown_item">
                                <a href="/products/3">Counter-Strike: Global Offensive</a>
                            </li>
                            <li class="products_dropdown_item">
                                <a href="/products/4">PLAYERUNKNOWN'S BATTLEGROUNDS</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="header_nav_item">
                    <a href="/about">About</a>
                </div>
                <div class="header_nav_item">
                    <a href="/signin">Sign In</a>
                </div>
                <div class="header_nav_item">
                    <a href="/signup ">Sign Up</a>
                </div>
            </div>
    </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss">
@import '../styles.scss';
@import 'header.scss';
</style>
