<template>
    <div class="center">
        center
        <Tabbar v-bind:tabbar="tabbar" v-bind:selected="selected" />
    </div>
    
</template>

<style scoped>
.center {
  width: 100%;
  height: 100%;
}
</style>

<script>
import Tabbar from "./tabbar.vue";

export default {
  name: "Center",
  props: {
    // tabbar: Array,
    
  },
  components: {
    Tabbar
  },
  data: function() {
    return {
        selected: 'center'
    };
  }
};
</script>
