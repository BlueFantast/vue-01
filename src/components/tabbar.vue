<template>
    <div class="tabbar">
        <div class="container" v-on:click="goto">
            <router-link
                class="items"
                v-for="(item,index) in tabbar"
                v-bind:key="index"
                :to="item.id"
                :id="item.id"
                
            >
                <div class="image-container">
                    <img v-show="item.id == selected" :src="item.imgUrl_selected" alt="" srcset="">
                    <img v-show="item.id != selected" :src="item.imgUrl" alt="" srcset="">
                </div>
                <div :class="item.id == selected ? 'text-container-selected' : 'text-container' ">
                    {{item.title}}
                </div>
            </router-link>
        </div>
    </div>
</template>

<style scoped>
.tabbar {
  width: 100%;
  height: auto;
  position: fixed;
  bottom: 0;
  background-color: white;
}
.container {
  display: flex;
  justify-content: space-around;
  padding: 5px;
}

.items {
  flex: 1;
  text-align: center;
}

.image-container {
  display: inline-block;
  width: 30%;
}

.text-container {
  color: gray;
  font-size: 0.8rem;
}

.text-container-selected {
  color: #26a2ff;
  font-size: 0.8rem;
}
</style>

<script>
export default {
  name: 'Tabbar',
  props: {
    selected: {
      type: String,
      default: 'index'
    }
  },
  data: function() {
    return {
      tabbar: [
        {
          id: 'index',
          imgUrl: require('../assets/images/index.png'),
          imgUrl_selected: require('../assets/images/index_selected.png'),
          title: '首页'
        },
        {
          id: 'classify',
          imgUrl: require('../assets/images/classify.png'),
          imgUrl_selected: require('../assets/images/classify_selected.png'),
          title: '分类'
        },
        {
          id: 'seckill',
          imgUrl: require('../assets/images/seckill.png'),
          imgUrl_selected: require('../assets/images/seckill_selected.png'),
          title: '清仓'
        },
        {
          id: 'shopcart',
          imgUrl: require('../assets/images/shopcart.png'),
          imgUrl_selected: require('../assets/images/shopcart_selected.png'),
          title: '购物车'
        },
        {
          id: 'center',
          imgUrl: require('../assets/images/center.png'),
          imgUrl_selected: require('../assets/images/center_selected.png'),
          title: '我的'
        }
      ],
      // selected: this.selected
    };
  },
  methods: {
    goto: function() {
      this.$data.selected = 'classify';
    }
  }
};
</script>
