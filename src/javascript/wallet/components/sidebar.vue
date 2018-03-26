<template>
  <div class="col-2">
    <el-card class="box-card">
      <div>
        <h5>Your Account</h5>
        <div class="account">{{ account }}</div>
        <div class="account">{{ eth_balance }} ETH</div>
      </div>
    </el-card>
    <el-menu
      @open="handleOpen"
      @close="handleClose"
      :default-openeds="['1', '2']">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>Tokens</span>
        </template>
        <el-menu-item class="submenu-item" v-for="token in tokens" :key="token.id" :index="'1-1-' + token[0]">{{ token[1] }} {{ token[0] }}</el-menu-item>
        <el-menu-item index="1-2" class="submenu-add-button"><i class="el-icon-plus"></i> Add Token</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>Contracts</span>
        </template>
        <el-menu-item class="submenu-item" v-for="contract in contracts" :key="contract.id" :index="'2-1-' + contract">{{ contract }}</el-menu-item>
        <el-menu-item index="2-2" class="submenu-add-button"><i class="el-icon-plus"></i> Add Contract</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import {store} from "../store/store"

export default {
  data() {
    return {
        account: "",
        eth_balance: 0,
        tokens: [
            ["EOS", 1.2],
            ["MANA", 4.56]
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
    },
    setAccount() {
      if (store.state.web3.eth.accounts[0] === undefined) {
        this.$alert('Please unlock your MetaMask.', 'Notice', {
          confirmButtonText: 'Enter',
          callback: action => {
            // this.$message({
            //   type: 'info',
            //   message: `action: ${ action }`
            // });
          }
        })
      } else {
        this.account = store.state.web3.eth.accounts[0]
        store.commit("updateAccount")
      }
    },
    getEthBalance(account) {
      let self = this
      store.state.web3.eth.getBalance(account, function(error, result){
        if (error) {
          console.debug(error)
          return
        }
        self.eth_balance = result.div(1000000000000000000).toFixed(4,1)
        console.debug("Get ETH balance " + self.eth_balance)
      })
    }
  },
  mounted() {
    this.setAccount()

  },
  watch: {
    account() {
      this.getEthBalance(this.account)
    }
  }
}
</script>

<style>
  .account {
    font-size: 14px;
    color: #909399;
    padding-bottom: 5px;
  }
  .submenu-item {
    color: #909399;
;
  }
  .submenu-add-button {
    color: #C0C4CC;
  }
</style>
