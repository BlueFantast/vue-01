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
                                <span 
                                  v-for="(des,j) in goods.describe"
                                  v-bind:key="j"
                                >
                                  {{des}}&nbsp;&nbsp;
                                </span>
                                
                            </div>
                            <div class="goods-num">
                                <div class="goods-price">
                                    <span>￥{{goods.price}}</span>
                                </div>
                                <div class="goods-counter">
                                    <span class="reduce" v-on:click="reduce(shop.shopId,goods.goodsId)">-</span>
                                    <span class="goods-count">{{goods.count}}</span>
                                    <span class="increase" v-on:click="increase(shop.shopId,goods.goodsId)">+</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="shop-total">
                  本店总计：<span class="total-price">{{shop.shopTotal}}</span>
                </div>
            </div>
        </div>
        <div class="check-out">
          <div class="check-all">
            <input type="checkbox" :checked="checkAll" name="checkAll" :value="checkAll"> <span class="checkAll">全选</span>
          </div>
          <div class="final-price">总价：<span class="finalPrice">{{finalPrice}}</span></div>
          <div class="checkOut">结算</div>
        </div>
    </div>
</template>

<style scoped>
.shop {
  border-bottom: 5px solid #eee;
  padding: 0 0 4px 0;
}
.shop-cart {
  width: 100%;
  height: 100%;
}

.shop-name {
  width: calc(100% - 10px);
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
  align-items: baseline;
  padding: 0 20px 0 0;
}
.goods-price {
  display: inline-block;
  width: 4rem;
  color: red;
  font-weight: 600;
  overflow: hidden;
}
.goods-counter {
  display: flex;
  width: 5rem;
  height: 1.5rem;
  line-height: 1.5rem;
  justify-content: space-between;
  float: right;
  border: 1px solid #eee;
}

.reduce {
  width: 1.5rem;
  border-right: 1px solid #eee;
  text-align: center;
  font-size: 1.5rem;
  color: #26a2ff;
}

.increase {
  width: 1.5rem;
  border-left: 1px solid #eee;
  text-align: center;
  font-size: 1.5rem;
  color: #26a2ff;
}

.shop-total {
  height: 2rem;
  line-height: 2rem;
  text-align: right;
  padding: 0 20px 0 0;
}

.total-price {
  color: red;
}

.check-out {
  width: 100%;
  height: 3rem;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #eee;
}

.final-price {
  /* width: 6rem; */
  overflow: hidden;
  padding: 0 40px 0 0;
  font-weight: bold;
}
.finalPrice{
  color: red;
}
.check-all {
  width: 5rem;
  text-align: center;
}
.checkAll {
  padding: 0 0 0 10px;
}
.checkOut {
  width: 5rem;
  height: 100%;
  line-height: 3rem;
  text-align: center;
  color: white;
  background-color: red;
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
              describe: ["重量：3.3kg", "颜色：标配版"],
              price: "100.00",
              count: 1
            },
            {
              goodsId: "bag",
              selected: false,
              imgUrl: require("../assets/images/goods1.jpg"),
              title: "爱华仕双肩包，休闲商务背包",
              describe: ["重量：3.3kg", "颜色：标配版"],
              price: "100.00",
              count: 1
            }
          ],
          shopTotal: "0.00"
        },
        {
          shopId: "bagStore",
          selected: false,
          goodsList: [
            {
              goodsId: "bag",
              selected: false,
              imgUrl: require("../assets/images/goods1.jpg"),
              title: "爱华仕双肩包，休闲商务背包",
              describe: ["重量：3.3kg", "颜色：标配版"],
              price: "100.00",
              count: 1
            },
            {
              goodsId: "bag",
              selected: false,
              imgUrl: require("../assets/images/goods1.jpg"),
              title: "爱华仕双肩包，休闲商务背包",
              describe: ["重量：3.3kg", "颜色：标配版"],
              price: "100.00",
              count: 1
            }
          ],
          shopTotal: "0.00"
        }
      ],
      finalPrice:'0.00',
      count: 0,
      changeObj: {}
    };
  },
  methods: {
    reduce: function(shopId, goodsId) {
      console.log(shopId, goodsId);
      const purchased = this.$data.purchased;
      for (let i = 0; i < purchased.length; i++) {
        const shop = purchased[i];
        if (shop.shopId == shopId) {
          const goodsList = shop.goodsList;
          for (let j = 0; j < goodsList.length; j++) {
            const goods = goodsList[j];
            if (goods.goodsId == goodsId) {
              goods.count--;
              console.log(goods.count);
            }
          }
        }
      }
    },
    increase: function(shopId, goodsId) {
      const purchased = this.$data.purchased;
      for (let i = 0; i < purchased.length; i++) {
        const shop = purchased[i];
        if (shop.shopId == shopId) {
          const goodsList = shop.goodsList;
          for (let j = 0; j < goodsList.length; j++) {
            const goods = goodsList[j];
            if (goods.goodsId == goodsId) {
              goods.count++;
              console.log(goods.count);
            }
          }
        }
      }
    }
  },
  computed: {
    totalNumber: function(count) {
      return this.firstName + " " + this.lastName;
    }
  },
  filters: {}
};
</script>
