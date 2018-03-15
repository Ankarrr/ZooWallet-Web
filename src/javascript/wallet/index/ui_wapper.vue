<template>
  <div>
    <!-- {{count}} -->
    <span v-for="(item, index) in items">
      <el-input v-model="inputs[index]" v-bind:placeholder="item.type" class="input-field"></el-input>
    </span>
    <el-button type="success" @click="submit()">submit</el-button>
  </div>
</template>

<script>
import _ from "lodash"
import {store} from "../store/store"
export default {
  store,
  props: {
    items: Array,
  },
  data() {
    return {
      inputs: [],
    }
  },
  mounted() {
  },
  computed: {
   count () {
     return store.state.count
   }
  },
  methods: {
    submit(){
      console.log(this.inputs)
    }
  },
  watch:{
    items() {
      this.inputs = []
      store.commit('increment')
    }
  }
}
</script>

<style>
  .input-field{
    margin: 5px 0;
  }
</style>
