<template>
  <div class="header">
    <mt-header :title="title">
      <router-link v-if="showBack" to="/index" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button v-if="showMore" icon="more" slot="right"></mt-button>
    </mt-header>

  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: String,
    showBack:Boolean,
    showMore:Boolean,
  }
}
</script>


<style scoped>
.header{
  width: 100%;
}

.mint-header{
  /* background-color: #fff; */
  /* color: black; */
}

</style>
