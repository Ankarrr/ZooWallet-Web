<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <h5>{{ contract }} Contract</h5>
      </div>
      <div>
        <span>Address</span>
        <div class="input-field">
          <el-input placeholder="Please enter contract's address" v-model="contractAddr" class="input-field"></el-input>
        </div>
        <span>ABI</span> 
        <el-input
          type="textarea"
          :autosize="{ minRows: 2, maxRows: 10}"
          placeholder="Please enter contract's ABI"
          v-model="abiContext"
          class="input-field">
        </el-input>
        <!-- <el-button type="success" @click="generateContract()">Generate</el-button> -->
      </div>
    </el-card>
    <br />
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <h5>Contract Functions</h5>
      </div>
      <div>
        <myfunc :mtext="abiContext"></myfunc>
      </div>
    </el-card>
  </div>
</template>

<script>
import Myfunc from './custom_func.vue'

export default {
    components: {Myfunc},
    data() {
      return {
        contractAddr: "",
        abiContext: ""
      }
    },
    mounted() {
    },
    methods: {
      generateContract(){
          console.log(this.abiContext)
      }
    },
    computed: {
      contract() {
        // Get current contract name from Vuex
        return this.$store.state.currentContract
      },
    },
    watch: {
      // Get address and abi when current contract is updated
      contract() {
        this.contractAddr = this.$store.state.contracts[this.contract].address
        this.abiContext = this.$store.state.contracts[this.contract].abi
      }
    }
}
</script>

<style>
  .input-field{
    margin: 5px 0;
  }
</style>
