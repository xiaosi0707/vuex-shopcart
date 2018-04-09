import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    cartData: [] // 购物车数据状态
  },
  getters: {
    totalCount (state) {
      let total = 0
      state.cartData.map((item) => {
        total += item.count
      })
      return total
    }
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
        Vue.set(product, 'count', 1) // product：传递过来“鱼香肉丝”
        state.cartData.push(product)
      }
    }
  }
})

export default store
