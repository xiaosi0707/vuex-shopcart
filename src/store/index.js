import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    cartData: [],
    goodsCount: 1
  },
  mutations: {
    // 加入购物车
    addShopCart (state, product) {
      let flag = true
      state.cartData.map((item) => {
        if (item.id === product.id) {
          product.count++
          flag = false
        }
      })
      if (flag) {
        Vue.set(product, 'count', 1)
        state.cartData.push(product)
      }
    }
  }
})

export default store
