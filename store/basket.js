export const state = () => ({
  data: [],
})

export const mutations = {
  setData(state, value) {
    state.data = value
  },
  addItem(state, value) {
    for (let i = 0; i < state.data.length; i++) {
      if (state.data[i].productId == value.productId) {
        state.data.splice(i, 1)
      }
    }
    state.data.push(value)
  },
  setAmount(state, value) {
    for (let i = 0; i < state.data.length; i++) {
      if (state.data[i].productId == value.productId) {
        state.data[i].amount = +value.amount
        if (state.data[i].amount === 0 || !state.data[i].amount) {
          state.data.splice(i, 1)
        }
      }
    }
  },
  removeItem(state, value) {
    for (let i = 0; i < state.data.length; i++) {
      if (state.data[i].productId == value.productId) {
        state.data[i].amount -= 1
        if (state.data[i].amount === 0) {
          state.data.splice(i, 1)
        }
      }
    }
  },
}

export const actions = {
  async getAllInit(vuexContext, context) {
    if (localStorage.getItem('basket')) {
      vuexContext.commit('setData', JSON.parse(localStorage.getItem('basket')))
    } else {
      vuexContext.commit('setData', [])
    }
  },
  async addItem(vuexContext, value) {
    vuexContext.commit('addItem', value)
  },
  async setAmount(vuexContext, value) {
    vuexContext.commit('setAmount', value)
  },
  async removeItem(vuexContext, value) {
    vuexContext.commit('removeItem', value)
  },
}

export const getters = {
  allData(state) {
    return state.data
  },
  getAmountById: (state) => (id) => {
    let result = state.data.find((item) => {
      return item.productId === id
    })

    if (result) {
      return result.amount
    }
  }
}
