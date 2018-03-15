<template>
  <div>
    <!-- {{count}} -->
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
      <uwapper :items="params"></uwapper>
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
</style>
