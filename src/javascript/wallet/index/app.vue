<template>
  <div class="wallet_body col-10">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <h4>Contract</h4>
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
          v-model="abicontext"
          class="input-field">
        </el-input>
        <!-- <el-button type="success" @click="generateContract()">Generate</el-button> -->
      </div>
    </el-card>
    <br />
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <h4>Contract Functions</h4>
      </div>
      <div>
        <myfunc :mtext="abicontext"></myfunc>
      </div>
    </el-card>
  </div>
</template>

<script>
import ifetch from "jsappbase/ifetch"
import _ from "lodash"
import Cookies from 'js-cookie';
import Myfunc from './custom_func.vue'

export default {
  components: {Myfunc},
  data() {
    return {
      contractAddr: "0xc0ADF1CCc703A0a3393892600883A1A91a4E38de",
      abicontext: `[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"icoStartBlock","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"maxTotalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"totalContributions","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"contributions","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"claimToken","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"icoEndBlock","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"version","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"estimateBalanceOf","outputs":[{"name":"estimatedTokens","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"isICOOpen","outputs":[{"name":"_open","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"isICOEnded","outputs":[{"name":"_ended","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"},{"name":"_extraData","type":"bytes"}],"name":"approveAndCall","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"contribute","outputs":[{"name":"success","type":"bool"}],"payable":true,"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"redeemEther","outputs":[],"payable":false,"type":"function"},{"inputs":[{"name":"_icoStartBlock","type":"uint256"},{"name":"_icoEndBlock","type":"uint256"}],"payable":false,"type":"constructor"},{"payable":true,"type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_contributor","type":"address"},{"indexed":false,"name":"_value","type":"uint256"},{"indexed":false,"name":"_estimatedTotalTokenBalance","type":"uint256"}],"name":"Contributed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_contributor","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Claimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_spender","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Approval","type":"event"}]`
    }
  },
  mounted() {

  },
  methods: {
    generateContract(){
      console.log(this.abicontext)
    }
  }
}
</script>

<style>
  .wallet_body{
    width: "90%";
  }
  .input-field{
    margin: 5px 0;
  }
</style>
