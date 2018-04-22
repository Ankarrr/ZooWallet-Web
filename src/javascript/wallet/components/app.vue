<template>
  <div class="wallet_body col-10">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="Send" name="first">Send</el-tab-pane>
      <el-tab-pane label="Transactions" name="second" ><transactions ref="abc" /></el-tab-pane>
      <el-tab-pane label="Contract" name="third"><contract></contract></el-tab-pane>
      <el-tab-pane label="Exchange" name="fourth">exchange</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import ifetch from "jsappbase/ifetch"
import _ from "lodash"
import Cookies from 'js-cookie'
import Contract from './contract.vue'
import Transactions from './transactions.vue'


export default {
  components: {
    Contract,
    Transactions,
  },
  data() {
    return {
      activeName: 'third'
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
      this.$refs.abc.created();
    }
  }
}
</script>

<style>
  .wallet_body{
    width: "90%";
  }
</style>
