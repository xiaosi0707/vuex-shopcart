import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    cartData: []
  },
  mutations: {
    addShopCart (state, product) {
      state.cartData.push(product)
    }
  }
})

export default store
