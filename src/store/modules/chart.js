const state = {
    purchased: null,
    checkAll: null,
    finalPrice: null
}

const getters = {
    purchased: function (state) {
        return state.purchased
    },
    checkAll: function (state) {
        return state.checkAll
    },
    finalPrice: function (state) {
        return state.finalPrice
    }
}

const mutations = {
    updataPurchased(state, payload) {
        state.purchased = payload.data
    },
    updataCheckAll(state, payload) {
        state.checkAll = payload.data
    },
    updataFinalPrice(state, payload) {
        state.finalPrice = payload.data
    }
}

const actions = {

}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}