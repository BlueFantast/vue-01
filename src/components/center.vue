<template>
    <div class="center">
        <Header v-bind="header" />
        <Tabbar v-bind:selected="selected" />
    </div>
    
</template>

<style scoped>
.center {
  width: 100%;
  height: 100%;
}
</style>

<script>
import Header from "./header.vue";
import Tabbar from "./tabbar.vue";

export default {
  name: "Center",
  props: {},
  components: {
    Header,
    Tabbar
  },
  data: function() {
    return {
      selected: "center",
      header: {
        title: "个人中心",
        showBack: true,
        showMore: true
      }
    };
  }
};
</script>
