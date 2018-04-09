<template>
  <div id="app">
    <p class="shop-cart-title">购物车</p>
    <shop-list></shop-list>
  </div>
</template>

<script>
import shopList from './components/list'
export default {
  name: 'App',
  components: {
    shopList
  }
}
</script>

<style scoped lang="less">
  .shop-cart-title {
    text-align: center;
    font-size: 24px;
  }
</style>
