<template>
  <div class="wallet_body col-10">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="Send" name="first">Send</el-tab-pane>
      <el-tab-pane label="Transactions" name="second">Transactions</el-tab-pane>
      <el-tab-pane label="Contract" name="third"><contract></contract></el-tab-pane>
      <el-tab-pane label="Market" name="fourth">Market information</el-tab-pane>
      <el-tab-pane label="Exchange" name="fifth">Exchange</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import ifetch from "jsappbase/ifetch"
import _ from "lodash"
import Cookies from 'js-cookie'
import Contract from './contract.vue'

export default {
  components: {Contract},
  data() {
    return {
      // activeName decides which tab is open
      activeName: 'third'
    }
  },
  methods: {
    handleClick(tab, event) {
      this.$emit("on-tab-change", this.activeName)
    },
  },
  props: ['newActiveName'],
  watch: {
    newActiveName() {
      this.activeName = this.newActiveName
    }
  }
}
</script>

<style>
  .wallet_body{
    width: "90%";
  }
</style>
