<template>
  <div id="classify">
    classify
    <Tabbar v-bind:tabbar="tabbar" />
  </div>
</template>

<script>

import Tabbar from "./tabbar.vue";


export default {
  name: "Classify",
  components: {
    Tabbar
  },
  data: function() {
    return {
      
      tabbar:[
        {
          id:'index',
          imgUrl:require("../assets/index.png"),
          imgUrl_selected:require("../assets/index_selected.png"),
          title:'首页'
        },
        {
          id:'classify',
          imgUrl:require("../assets/classify.png"),
          imgUrl_selected:require("../assets/classify_selected.png"),
          title:'分类'
        },
        {
          id:'seckill',
          imgUrl:require("../assets/seckill.png"),
          imgUrl_selected:require("../assets/seckill_selected.png"),
          title:'清仓'
        },
        {
          id:'shopcart',
          imgUrl:require("../assets/shopcart.png"),
          imgUrl_selected:require("../assets/shopcart_selected.png"),
          title:'购物车'
        },
        {
          id:'center',
          imgUrl:require("../assets/center.png"),
          imgUrl_selected:require("../assets/center_selected.png"),
          title:'我的'
        }
      ]
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
