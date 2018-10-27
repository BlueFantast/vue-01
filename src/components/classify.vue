<template>
  <div id="classify">
    classify
    <Tabbar v-bind:tabbar="tabbar" v-bind:selected="selected" />
  </div>
</template>

<script>

import Tabbar from "./tabbar.vue"


export default {
  name: "Classify",
  components: {
    Tabbar
  },
  data: function() {
    return {
      selected:'classify'
    };
  }
};
</script>

<style>

#classify {
  width: 100%;
  height: 100%;
}


</style>
