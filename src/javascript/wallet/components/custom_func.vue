<template>
  <div class="container-fluid">
    <!-- {{count}} -->
    <div class="row">
      <div class="col">
        <el-select
          v-model="selectedItem"
          placeholder="Select a function"
          :change="selectedFunction()"
          class="input-field">
          <el-option
            v-for="item in msg"
            :key="item.name"
            :label="item.name"
            :value="item.name">
          </el-option>
        </el-select>
        <div v-if="params">
          <uwapper :selected-item="selectedItem" :params="params" :contract-addr="address" :abi-context="mtext" @update-result="updateResult"></uwapper>
        </div>
      </div>
      <div class="col">
        <el-card class="result-field">
          {{ result }}
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
import _ from "lodash"
import Uwapper from './ui_wapper.vue'
import {store} from "../store/store"
export default {
  store,
  components: {Uwapper},
  props: {
    mtext: String,
    address: String,
    render: Boolean,
  },
  computed: {
   count () {
     return store.state.count
   }
  },
  data() {
    return {
      msg: "hello",
      selectedItem: "",
      params: [],
      result: "",
    }
  },
  mounted() {
    this.functionListGen()
  },
  methods: {
    functionListGen() {
      let mt = JSON.parse(this.mtext)
      mt = _.filter(mt, (resp) => {
        return resp.type == "function"
      })
      this.msg = mt
    },
    selectedFunction() {
      console.log(this.selectedItem)
      let paramsTmp = this.getParams(this.selectedItem)
      if(paramsTmp.length != 0){
        this.params = paramsTmp[0]["inputs"]
      }
    },
    getParams(funcName){
      return _.filter(this.msg, (resp) => {
        return resp.name == funcName
      })
    },
    updateResult(ret){
      this.result = ret
    }
  },
  watch:{
    mtext() {
      this.functionListGen()
    }
  }
}
</script>

<style>
  .input-field{
    margin: 5px 0;
  }
  .result-field{
    margin: 5px 0;
  }
</style>
