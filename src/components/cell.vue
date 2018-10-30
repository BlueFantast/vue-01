<template>
    <div class="cell">
        <div class="title">
                <span class="icon-title"><img :src="imgUrl" /></span>
                <span class="title-text">{{title}}</span>
            </div>
            <router-link class="goto" :to="id">
                <span class="icon-enter"></span>
            </router-link>
    </div>
</template>

<style scoped>
.cell {
  width: 95%;
  height: 3rem;
  border-bottom: 1px solid #eee;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  /* padding: 0 2px 0 0; */
}

.top {
  height: 40px;
  width: calc(100% - 6px);
  display: flex;
  justify-content: space-between;
  padding: 0 0 0 6px;
}

.title {
  display: flex;
  width: 8.2rem;
  height: 100%;
  justify-content: space-between;
  align-items: center;
}

.icon-title {
  width: 1.5rem;
  height: 1.5rem;
  display: inline-block;
  margin: 0.2rem 0;
}

.title-text {
  display: inline-block;
  width: 6rem;
  /* color: gray; */
}

.goto {
  width: 1rem;
  height: 100%;
  padding: 0 0 0 30px;
}

.icon-enter {
  display: inline-block;
  width: 100%;
  height: 100%;
  background-image: url("../assets/images/icon_enter.png");
  background-size: 1rem;
  background-repeat: no-repeat;
  background-position: 50%;
}
</style>

<script>
export default {
  name: 'Cell',
  props: {
    id: String,
    title: String,
    imgUrl: String
  },
  data: function() {
    return {};
  }
};
</script>
