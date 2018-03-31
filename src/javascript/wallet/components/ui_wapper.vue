<template>
  <div>
    <!-- {{count}} -->
    <span v-for="(item, index) in params" :key="index">
      <el-input v-model="inputs[index]" v-bind:placeholder="item.type" class="input-field"></el-input>
    </span>
    <el-button type="success" @click="submit()" class="submit-button">submit</el-button>
  </div>
</template>

<script>
import _ from "lodash"
import {store} from "../store/store"

export default {
  store,
  props: {
    selectedItem: String,
    params: Array,
    contractAddr: String,
    abiContext: String,
  },
  data() {
    return {
      inputs: [],
      contract: {},
    }
  },
  computed: {
    count () {
      return store.state.count
    },
  },
  methods: {
    updateContract(){
      // Create the contract instance
      this.contract = this.$store.state.contract(JSON.parse(this.abiContext)).at(this.contractAddr)
    },
    submit(){
      if (this.selectedItem == "") {
        this.$alert('Please select a function.')
        return
      }
      this.contract[this.selectedItem]().then((result) => {
          // TODO: Handle function's params and write data to Smart Contract
          this.$emit("update-result", result)
        })
        .catch((err) => console.log('rpc error:', err.message))
    }
  },
  watch:{ 
    params() {
      this.inputs = []
      store.commit('increment')
    },
    contractAddr(){
      this.updateContract()
    },
    abiContext(){
      this.updateContract()
    }
  }
}
</script>

<style>
  .input-field{
    margin: 5px 0;
  }
  .submit-button{
    margin: 5px 0;
  }
</style>
