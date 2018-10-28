<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<style>
body {
  margin: 0;
}

img{
    width: 100%;
    height: 100%;
}

a{
    text-decoration: none;
    /* display: inline-block; */
}

#app {
  width: 100%;
  height: 100%;
  padding: 0 0 70px;
}
</style>

<script>
export default {
  name: "app",
  components: {},
  data: function() {
    return {};
  }
};
</script>
