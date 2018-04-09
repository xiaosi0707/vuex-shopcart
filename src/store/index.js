import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    cartData: []
  },
  mutations: {
    // 加入购物车
    addShopCart (state, product) {
      let flag = true
      state.cartData.map((item) => {
        if (item.id === product.id) {
          flag = false
        }
      })
      if (flag) {
        state.cartData.push(product)
      }
    }
  }
})

export default store
