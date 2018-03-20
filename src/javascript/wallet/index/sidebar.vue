<template>
  <div class="col-2">
   <el-menu
      @open="handleOpen"
      @close="handleClose"
      :default-openeds="['2', '3']">
      <el-menu-item index="1">
        <span slot="title">Account {{ account }}</span>    
      </el-menu-item>         
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
  export default {
    data() {
        return {
            // This is test Data
            account: "0x123ABC",
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

</style>
