<template>
  <div class="cart-info">
    <div style="text-align: center; line-height: 56px" v-if="!goodsTotalCount">
      购物车是空的
    </div>
    <div>
      <div class='item'>总数：<strong>{{ goodsTotalCount }}</strong></div>
      <div class='item'>总价：<strong>{{ goodsTotalPrice }}</strong></div>
      <div class="item pull-right btn btn-danger" @click="clearShopCartHandle">清空购物车</div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    goodsTotalCount () {
      return this.$store.getters.totalCount
    },
    goodsTotalPrice () {
      return this.$store.getters.totalPrice
    }
  },
  methods: {
    // 清空购物车
    clearShopCartHandle () {
      this.$store.commit('clearShopCart')
    }
  }
}
</script>

<style scoped lang='less'>
  .cart-info {
    font-size: 20px;
    text-align: left;
    .item {
      display: inline-block;
      margin-right: 20px;
    }
  }
</style>
