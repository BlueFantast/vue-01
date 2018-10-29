<template>
    <div class="function-navigate">
          <div class="top">
            <div class="title">
              <span class="icon-title"><img :src="imgUrl" /></span>
              <span>{{title}}</span>
            </div>
            <router-link class="goto" :to="id">
                <span class="icon-enter"></span>
            </router-link>
            <!-- <div class="goto" :id="id">
              <span class="icon-enter"></span>
            </div> -->
          </div>
          <div class="bottom">
            <div 
                v-for="(item,index) in items"
                v-bind:key="index"
                class="item"
                :id="item.id"
                >
              <span v-if="item.imgUrl" class="item-icon"><img :src="item.imgUrl" /></span>
              <span v-else-if="item.num" :class="item.num ? 'item-num' : null">{{item.num}}<br></span>
              <br>
              <span class="item-title item1">{{item.title ? item.title : '我的订单'}}</span>
            </div>
          </div>
        </div>
</template>

<style scoped>
.function-navigate {
  width: 100%;
  height: 110px;
  border-bottom: 4px solid #eee;
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
  width: 6.5rem;
  height: 100%;
  justify-content: space-between;
  align-items: center;
}

.icon-title {
  width: 2rem;
  height: 2rem;
  display: inline-block;
  margin: 0.2rem 0;
}

.goto {
  width: 2rem;
  height: 100%;
  padding: 0 0 0 20px;
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

.item {
  height: 3rem;
}

.item-icon {
  width: 1.5rem;
  height: 1.5rem;
  display: inline-block;
}

.item-num{
    width: 1.5rem;
  height: 1.5rem;
  display: inline-block;
  line-height: 1.5rem;
  font-size: 1rem;
  color: #1296db;
  padding: 0 0 5px 0;
}

.item-title {
  display: inline-block;
  width: 6rem;
}

.bottom {
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  height: 3rem;
  font-size: 0.8rem;
  color: gray;
  margin: 15px 0 0;
}
</style>

<script>
export default {
  name: "Functionnavigate",
  props: {
    id: String,
    title: String,
    imgUrl: String,
    items: Array
  },
  components: {},
  data: function() {
    return {};
  }
};
</script>
