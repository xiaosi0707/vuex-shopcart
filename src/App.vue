<template>
  <div id="app">
    <p class="shop-cart-title">购物车</p>
    <shop-list></shop-list>
    <shop-cart></shop-cart>
  </div>
</template>

<script>
import shopList from './components/list'
import shopCart from './components/cart'
export default {
  name: 'App',
  components: {
    shopList,
    shopCart
  }
}
</script>

<style scoped lang="less">
  .shop-cart-title {
    text-align: center;
    font-size: 24px;
  }
</style>
