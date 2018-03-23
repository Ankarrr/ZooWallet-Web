<template>
  <b-navbar toggleable="md" type="dark" variant="info" class="">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-navbar-brand href="/wallet">Zoo Wallet</b-navbar-brand>
    <b-collapse is-nav id="nav_collapse">
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-text v-if="network == 1">Mainnet</b-nav-text>
        <b-nav-text v-else-if="network == 3">Ropsten Testnet</b-nav-text>
        <b-nav-text v-else-if="network == 4">Rinkeby Testnet</b-nav-text>       
        <b-nav-text v-else-if="network == 42">Kovan Testnet</b-nav-text>
        <b-nav-text v-else-if="network == 'loading'">Private Network</b-nav-text>
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
  data() {
      return {
          network: store.state.web3.version.network
      }
  },
  methods: {
    changeNetwork(id) {
      console.log(id)
    },
  }
}
</script>

<style>

</style>
