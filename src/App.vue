<template>
  <div id="app">
    <p class="shop-cart-title">购物车</p>
    <shop-list></shop-list>
    <shop-cart></shop-cart>
    <shop-info></shop-info>
  </div>
</template>

<script>
import shopList from './components/list'
import shopCart from './components/cart'
import shopInfo from './components/info'
export default {
  name: 'App',
  components: {
    shopList,
    shopCart,
    shopInfo
  }
}
</script>

<style scoped lang="less">
  .shop-cart-title {
    text-align: center;
    font-size: 24px;
    line-height: 56px;
  }
</style>
