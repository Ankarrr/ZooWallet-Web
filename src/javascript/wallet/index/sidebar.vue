<template>
  <div class="col-2">

    <el-card class="box-card">
      <div>
        <h5>Your Account</h5>
        <span class="time">{{ account }}</span>
      </div>
    </el-card>
    <el-menu
      @open="handleOpen"
      @close="handleClose"
      :default-openeds="['2', '3']">      
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>Tokens</span>
        </template>
        <el-menu-item-group v-for="token in tokens">
          <el-menu-item index="2">{{ token[1] }}  <span class="text-left">{{ token[0] }}</span></el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>Contracts</span>
        </template>
        <el-menu-item-group v-for="contract in contracts">
          <el-menu-item index="3">{{ contract }}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import {store} from "../store/store"

export default {
  data() {
      return {
          account: store.state.web3.eth.accounts[0],
          // This is test Data
          tokens: [
              ["ETH", 2.0],
              ["EOS", 1.2]
          ],
          contracts: [
              "CryptoKitties",
              "Bancor"
          ]
      }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style>
  .time {
    font-size: 14px;
    color: #999;
  }
</style>
