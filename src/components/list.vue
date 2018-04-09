<template>
  <div class="shop-list">
    <h4>商品信息</h4>
    <table class="table table-hover table-bordered table-shop">
      <thead>
      <tr>
        <th>id</th>
        <th>名称</th>
        <th>价格</th>
        <th>数量</th>
        <th>操作</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item, index) in shopList" :key="index">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.price }}</td>
        <td>{{ item.count }}</td>
        <td>
          <div class="btn btn-info" @click="addShopCart(item)">加入购物车</div>
          <!--<div class="btn btn-warning">-</div>-->
        </td>
      </tr>

      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      shopList: [{
        id: 1,
        name: '鱼香肉丝',
        price: 12
      }, {
        id: 2,
        name: '宫保鸡丁',
        price: 14
      }, {
        id: 3,
        name: '土豆丝',
        price: 10
      }, {
        id: 4,
        name: '米饭',
        price: 2
      }]
    }
  // },
  // computed: {
  //   goodsNum () {
  //     return this.$store.state.goodsCount
  //   }
  },
  methods: {
    // 加入购物车
    addShopCart (product) {
      this.$store.commit('addShopCart', product)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
  .shop-list {

  }
  .table-shop{
    text-align: center;
  }
</style>
