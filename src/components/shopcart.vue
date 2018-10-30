<template>
    <div class="shop-cart">
        <Header v-bind="header" />
        <div class="purchased-list">
            <div 
                v-for="(shop,index) in purchased"
                v-bind:key="index"
                class="shop">
                <div class="shop-name">
                    <input type="checkbox" :checked="shop.selected" name="shopId" :value="shop.shopId"> <span class="name">书包专卖店</span>
                </div>
                <div class="goods-list">
                    <div
                        v-for="(goods,index) in shop.goodsList"
                        v-bind:key="index"
                        :id="goods.goodsId"
                        class="goods-item">
                        <div class="goods-image">
                            <input type="checkbox" :checked="goods.selected" name="goodsId" :value="goods.goodsId">
                            <span class="image">
                                <img :src="goods.imgUrl" alt="商品图片" >
                            </span>
                        </div>
                        <div class="goods-info">
                            <div class="goods-title">
                                {{goods.title}}
                            </div>
                            <div class="goods-describe">
                                {{goods.describe}}
                            </div>
                            <div class="goods-num">
                                <div class="goods-price">
                                    ￥{{goods.price}}
                                </div>
                                <div class="goods-counter">
                                    <span class="reduce" v-on="reduce">-</span>
                                    <span class="goods-count">{{count || 0}}</span>
                                    <span class="increase" v-on="increase">+</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.shop-cart {
  width: 100%;
  height: 100%;
}

.shop-name {
  width: 100%;
  height: 2rem;
  line-height: 2rem;
  padding: 0 0 0 10px;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
}

.name {
  padding: 0 10px;
}

.goods-list {
  display: flex;
  flex-direction: column;
}

.goods-item {
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
}

.goods-image {
  width: 12rem;
  height: 8rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.image {
  display: inline-block;
  width: 6rem;
  height: 6rem;
  margin: 0 0 0 -10px;
}
.goods-info {
  height: 75%;
  width: 18rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* margin: 0 10px 0 0; */
}
.goods-title {
  font-size: 0.9rem;
  width: 100%;
  height: 2rem;
  line-height: 1rem;
}

.goods-describe {
  width: 100%;
  height: 2rem;
  font-size: 0.8rem;
  color: gray;
  overflow: hidden;
}

.goods-num {
  height: 1.5rem;
  width: calc(100% - 20px);
  display: flex;
  justify-content: space-between;
  padding: 0 20px 0 0;
}
.goods-price {
  display: inline-block;
  width: 4rem;
  color: red;
  overflow: hidden;
}
.goods-counter {
  display: flex;
  width: 4rem;
  height: 1rem;
  justify-content: space-between;
  float: right;
}
</style>

<script>
import Header from "./header.vue";

export default {
  name: "Shopcart",
  props: {
    // purchased: Array
  },
  components: {
    Header
  },
  data: function() {
    return {
      header: {
        title: "购物车",
        showBack: true,
        showMore: true
      },
      purchased: [
        {
          shopId: "bagStore",
          selected: false,
          goodsList: [
            {
              goodsId: "bag",
              selected: false,
              imgUrl: require("../assets/images/goods1.jpg"),
              title: "爱华仕双肩包，休闲商务背包",
              describe: "重量：3.3kg 颜色：标配版",
              price: 100,
              num: 1
            }
          ]
        }
      ]
    };
  },
  methods: {}
};
</script>
