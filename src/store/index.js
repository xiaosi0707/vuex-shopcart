import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
let data = JSON.parse(localStorage.getItem('shopCart')) || [] // 初始化数据
const store = new Vuex.Store({
  state: {
    cartData: data // 购物车数据状态
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
      localStorage.setItem('shopCart', JSON.stringify(state.cartData)) // 更新本地存储的数据
    },
    // 减减
    delShopCart (state, product) {
      state.cartData.map((item) => {
        if (product.id === item.id && product.count > 1) {
          product.count--
          localStorage.setItem('shopCart', JSON.stringify(state.cartData))// 更新本地存储的数据
        }
      })
    },
    // 删除
    reShopCart (state, product) {
      state.cartData.map((item, index) => {
        if (product.id === item.id) {
          console.log(index)
          state.cartData.splice(index, 1)
          localStorage.setItem('shopCart', JSON.stringify(state.cartData))// 更新本地存储的数据
        }
      })
    }
  }
})

export default store
