<template>
  <div id="index">
    <Header v-bind="header" />
    <Swipe v-bind:swipe="swipe" /> 
    <Domain v-bind:domain="domain" />
    <Recommend v-bind:recommend="recommend" />
    <Tabbar v-bind:tabbar="tabbar" />
  </div>
</template>

<script>
import Header from "./header.vue";
import Swipe from "./swipe.vue";
import Domain from "./domain.vue";
import Recommend from "./recommend.vue";
import Tabbar from "./tabbar.vue";



export default {
  name: "Index",
  components: {
    Header,
    Swipe,
    Domain,
    Recommend,
    Tabbar
  },
  data: function() {
    return {
      swipe: [
        { imgUrl: require("../assets/banner.png") },
        { imgUrl: require("../assets/g1.png") },
        { imgUrl: require("../assets/g2.png") }
      ],
      header: {
        title: "优购商城",
        showBack: false,
        showMore: false
      },
      domain: [
        {
          imgUrl: require("../assets/icon.png"),
          text: "超值大牌"
        },
        {
          imgUrl: require("../assets/icon1.png"),
          text: "新品特惠"
        },
        {
          imgUrl: require("../assets/icon2.png"),
          text: "免费试用"
        },
        {
          imgUrl: require("../assets/icon3.png"),
          text: "一元云购"
        },
        {
          imgUrl: require("../assets/icon4.png"),
          text: "热销商品"
        }
      ],
      recommend:[
        {
          imgUrl: require("../assets/g1.png"),
          text: "超值大牌"
        },
        {
          imgUrl: require("../assets/g2.png"),
          text: "超值大牌"
        },
        {
          imgUrl: require("../assets/g1.png"),
          text: "超值大牌"
        },
        {
          imgUrl: require("../assets/g2.png"),
          text: "超值大牌"
        },
      ],
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

#index {
  width: 100%;
  height: 100%;
}


</style>
