<template>
    <div class="seckill">
        <Header v-bind="header" />
        <Swipe v-bind:swipe="swipe" /> 
        <div class="content-container">
            <div class="content-title">
                <img src="../assets/images/qct.png" alt="" srcset="">
            </div>
            <router-link 
                v-for="(item,index) in goodsList"
                v-bind:key="index"
                :id="item.id"
                :to="item.id"
            >
                <div class="goods-container">
                    <div class="goods-image">
                        <img :src="item.imgUrl" alt="" >
                        <div class="goods-number">
                            剩{{item.num || 0}}件
                        </div>
                    </div>
                    <div class="goods-detail">
                        <div class="goods-title">
                            {{item.title}}
                        </div>
                        <div class="goods-feature">
                            <div class="features">
                                <p  class="feature"
                                    v-for="(feature,i) in item.features"
                                    v-bind:key="i"
                                >
                                    {{feature}}
                                </p>
                            </div>
                            <div class="buy-now">
                                <p class="price">
                                    ￥{{item.price || 100}}
                                </p>
                                <button class="buy" size="default" type="default" disabled="false" >立即购买</button>
                            </div>
                        </div>
                    </div>
                </div>
            </router-link>
        </div>
        <Tabbar  v-bind:selected="selected" />
    </div>
</template>

<style scoped>
.seckill {
  width: 100%;
  height: 100%;
}

.content-container {
  width: 100%;
  height: auto;
}

.content-title {
  border: 1px solid #eee;
}

.goods-container {
  display: flex;
  justify-content: space-around;
  min-height: 130px;
  padding: 10px 0;
  border-bottom: 4px solid #eee;
}

.goods-image {
  width: 10rem;
  height: 8rem;
  position: relative;
}

.goods-number {
  position: absolute;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: rebeccapurple;
  top: 0;
  left: 1rem;
  font-size: 0.8rem;
  text-align: center;
  line-height: 3rem;
  opacity: 0.9;
  color: white;
}

.goods-title {
  font-size: 1rem;
  line-height: 1.5rem;
  padding: 0 10px;
}

.goods-feature {
  position: relative;
}

.features {
  padding: 5px;
}

.feature {
  font-size: 0.8rem;
  color: #777;
  margin: 6px;
}

.buy-now {
  width: 100px;
  height: auto;
  position: absolute;
  bottom: 10px;
  right: 10px;
  text-align: center;
}

.price {
  font-weight: 600;
  color: #f90981;
  text-align: center;
  margin: 2px;
}

.buy {
  width: auto;
  height: 30px;
  font-size: 0.7rem;
  color: white;
  background-color: #f90981;
  border-radius: 5px;
  display: inline-block;
  border: 1px solid #eee;
}
</style>

<script>
import Header from "./header.vue";
import Swipe from "./swipe.vue";
import Tabbar from "./tabbar.vue";

export default {
  name: "Seckill",
  props: {
    // selected:String
  },
  components: {
    Header,
    Swipe,
    Tabbar
  },
  data: function() {
    return {
      selected: "seckill",
      header: {
        title: "优购商城",
        showBack: true,
        showMore: true
      },
      swipe: [
        { imgUrl: require("../assets/images/g1.png") },
        { imgUrl: require("../assets/images/g2.png") },
        { imgUrl: require("../assets/images/g1.png") },
        { imgUrl: require("../assets/images/g2.png") }
      ],
      goodsList: [
        {
          id:'detail',
          imgUrl: require("../assets/images/goods1.jpg"),
          title: "【优购商城】爱华仕双肩包，休闲商务背包",
          features: ["轻薄体验收纳便捷", "萌萌的挂件", "专注每个细节"],
          price: 199,
          num: 9
        },
        {
          id:'detail',
          imgUrl: require("../assets/images/goods1.jpg"),
          title: "【优购商城】爱华仕双肩包，休闲商务背包",
          features: ["轻薄体验收纳便捷", "萌萌的挂件", "专注每个细节"],
          price: 199,
          num: 9
        },
        {
          id:'detail',
          imgUrl: require("../assets/images/goods1.jpg"),
          title: "【优购商城】爱华仕双肩包，休闲商务背包",
          features: ["轻薄体验收纳便捷", "萌萌的挂件", "专注每个细节"],
          price: 199,
          num: 9
        },
        {
          id:'detail',
          imgUrl: require("../assets/images/goods1.jpg"),
          title: "【优购商城】爱华仕双肩包，休闲商务背包",
          features: ["轻薄体验收纳便捷", "萌萌的挂件", "专注每个细节"],
          price: 199,
          num: 9
        }
      ]
    };
  }
};
</script>
