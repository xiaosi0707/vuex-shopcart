<template>
  <div class="shop-list">
    <h4>购物车信息</h4>
    <table class="table table-hover table-shop table-bordered">
      <thead>
      <tr>
        <th>id</th>
        <th>名称</th>
        <th>价格</th>
        <th>数量</th>
        <th>总价</th>
        <th>Actions</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item,  index) in cartDataList" :key="index">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.price }}</td>
        <td>1</td>
        <td>¥{{ item.price * 2 }}</td>
        <td>
          <div  class="btn btn-info">+</div>
          <div  class="btn btn-warning">-</div>
          <div  class="btn btn-danger" title='删除'>x</div>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  computed: {
    cartDataList () {
      return this.$store.state.cartData
    }
  }
}
</script>

<style scoped>
  .table-shop {
    text-align: center;
  }
</style>
