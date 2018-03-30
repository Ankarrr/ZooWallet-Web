<template>
  <b-navbar toggleable="md" type="dark" variant="" class="nav-bar">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-navbar-brand href="/wallet">Zoo Wallet</b-navbar-brand>
    <b-collapse is-nav id="nav_collapse">
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-text v-if="isConnected === true">{{ network }}</b-nav-text>
        <!--
        <b-nav-item-dropdown text="Network" right>
          <b-dropdown-item v-on:click="changeNetwork(1)">Mainnet</b-dropdown-item>
          <b-dropdown-item v-on:click="changeNetwork(3)">Ropsten</b-dropdown-item>
        </b-nav-item-dropdown>
        -->
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import {store} from "../store/store"

export default {
  methods: {
    changeNetwork(id) {
      console.log(id)
    },
  },
  computed: {
    network() {
      let networkID = store.state.web3.version.network
      if (networkID == 1) {
        return 'Mainnet'
      } else if (networkID == 3) {
        return 'Ropsten Testnet'
      } else if (networkID == 4) {
        return 'Rinkeby Testnet'
      } else if (networkID == 42) {
        return 'Kovan Testnet'
      } else {
        return 'Private Network'
      }
    },
    isConnected() {
      return store.state.web3.isConnected()
    }
  }
}
</script>

<style>
  .nav-bar {
    background-color: #409EFF;
  }
</style>
