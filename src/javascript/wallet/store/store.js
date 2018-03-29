import Vue from 'vue'
import Vuex from 'vuex'
import {mutations} from "./mutations"
import {state} from "./state"
Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  mutations: {
    increment (state) {
      state.count++
    },
    setFuncation(state, funcationName){
      state.funcationName = funcationName
    },
    updateAccount(){
      state.account = store.state.web3.eth.accounts[0]
    },
    updateContract(state, contract){
      state.currentContract = contract
    }
  }
})

export {store}
