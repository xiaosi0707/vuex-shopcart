import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    cartData: [] // 购物车数据状态
  },
  getters: {
    totalCount (state) { // 商品总数
      let totalC = 0
      state.cartData.map((item) => {
        totalC += item.count
      })
      return totalC
    },
    totalPrice (state) {
      let totalP = 0
      state.cartData.filter((item) => {
        totalP += item.count * item.price
      })
      return totalP
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
    },
    // 减减
    delShopCart (state, product) {
      state.cartData.map((item) => {
        if (product.id === item.id && item.count > 1) {
          item.count--
        }
      })
    }
  }
})

export default store
