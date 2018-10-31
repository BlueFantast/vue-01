<template>
    <div class="shop-cart">
        <Header v-bind="header" />
        <div class="purchased-list">
            <div 
                v-for="(shop,index) in purchased"
                v-bind:index="index"
                v-bind:key="shop.shopId"
                class="shop">
                <div class="shop-name">
                    <input type="checkbox" v-model="shop.selected" :id="shop.shopId" v-on:click="checkBoxShop(shop.shopId)" /> <span class="name">{{shop.shopName}}</span>
                </div>
                <div class="goods-list">
                    <div
                        v-for="(goods,index) in shop.goodsList"
                        v-bind:key="index"
                        :id="goods.goodsId"
                        class="goods-item">
                        <div class="goods-image">
                            <input type="checkbox" v-model="goods.selected" :id="goods.goodsId" />
                            <span class="image">
                                <img :src="goods.imgUrl" alt="商品图片" >
                            </span>
                        </div>
                        <div class="goods-info">
                            <div class="goods-title">
                                {{goods.goodsTitle}}
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
                                    <span>￥{{goods.goodsPrice | toString}}</span>
                                </div>
                                <div class="goods-counter">
                                    <span class="reduce" v-on:click="reduce(shop.shopId,goods.goodsId,goods.goodsCount)">-</span>
                                    <span class="goods-count">{{goods.goodsCount}}</span>
                                    <span class="increase" v-on:click="increase(shop.shopId,goods.goodsId)">+</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="shop-total">
                  本店总计：<span class="total-price">{{shop.shopTotal | toString}}</span>
                </div>
            </div>
        </div>
        <div class="check-out">
          <div class="check-all">
            <input type="checkbox" v-model="checkAll" id="checkAll" v-on:click="checkBoxAll('checkAll')"> <span class="checkAll">全选</span>
          </div>
          <div class="final-price">总价：<span class="finalPrice">{{finalPrice | toString}}</span></div>
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
  color: red;
  font-weight: 600;
}
.goods-counter {
  display: flex;
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

.goods-count {
  display: inline-block;
  min-width: 2rem;
  text-align: center;
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
  background-color: white;
}

.final-price {
  overflow: hidden;
  padding: 0 40px 0 0;
  font-weight: bold;
}
.finalPrice {
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
          shopId: "bagStore1",
          shopName: "书包专卖店",
          selected: false,
          goodsList: [
            {
              goodsId: "bag1",
              selected: false,
              imgUrl: require("../assets/images/goods1.jpg"),
              goodsTitle: "爱华仕双肩包，休闲商务背包",
              describe: ["重量：3.3kg", "颜色：标配版"],
              goodsPrice: 199,
              goodsCount: 1,
              goodsTotal: 0
            },
            {
              goodsId: "bag2",
              selected: false,
              imgUrl: require("../assets/images/goods1.jpg"),
              goodsTitle: "爱华仕双肩包，休闲商务背包",
              describe: ["重量：3.3kg", "颜色：标配版"],
              goodsPrice: 199,
              goodsCount: 1,
              goodsTotal: 0
            }
          ],
          shopTotal: 0
        },
        {
          shopId: "bagStore2",
          shopName: "书包专卖店",
          selected: false,
          goodsList: [
            {
              goodsId: "bag1",
              selected: false,
              imgUrl: require("../assets/images/goods1.jpg"),
              goodsTitle: "爱华仕双肩包，休闲商务背包",
              describe: ["重量：3.3kg", "颜色：标配版"],
              goodsPrice: 199,
              goodsCount: 1,
              goodsTotal: 0
            },
            {
              goodsId: "bag2",
              selected: false,
              imgUrl: require("../assets/images/goods1.jpg"),
              goodsTitle: "爱华仕双肩包，休闲商务背包",
              describe: ["重量：3.3kg", "颜色：标配版"],
              goodsPrice: 199,
              goodsCount: 1,
              goodsTotal: 0
            }
          ],
          shopTotal: 0
        }
      ],
      checkAll: false,
      finalPrice: 0
    };
  },
  methods: {
    reduce: function(shopId, goodsId, goodsCount) {
      console.log(shopId, goodsId, goodsCount);
      if (goodsCount <= 0) {
        return;
      }
      let purchased = this.purchased;
      for (let i = 0; i < purchased.length; i++) {
        let shop = purchased[i];
        if (shop.shopId == shopId) {
          let goodsList = shop.goodsList;
          for (let j = 0; j < goodsList.length; j++) {
            let goods = goodsList[j];
            if (goods.goodsId == goodsId) {
              goods.goodsCount--;
              goods.goodsTotal = goods.goodsPrice * goods.goodsCount;
              console.log(goods.goodsCount, goods.goodsTotal);
            }
          }
        }
      }
    },
    increase: function(shopId, goodsId) {
      let purchased = this.purchased;
      for (let i = 0; i < purchased.length; i++) {
        let shop = purchased[i];
        if (shop.shopId == shopId) {
          let goodsList = shop.goodsList;
          for (let j = 0; j < goodsList.length; j++) {
            let goods = goodsList[j];
            if (goods.goodsId == goodsId) {
              goods.goodsCount++;
              goods.goodsTotal = goods.goodsPrice * goods.goodsCount;
              console.log(goods.goodsCount, goods.goodsTotal);
            }
          }
        }
      }
    },
    checkBoxShop: function(id) {
      let that = this;
      let shopInput = document.getElementById(id);
      console.log("checkBox input", shopInput);
      let purchased = that.purchased;
      for (let i = 0; i < purchased.length; i++) {
        let shop = purchased[i];
        if (shop.shopId == id) {
          let goodsList = shop.goodsList;
          for (let j = 0; j < goodsList.length; j++) {
            let goods = goodsList[j];
            goods.selected = shopInput.checked;
          }
        }
      }
    },
    checkBoxAll: function(id) {
      let that = this;
      let allInput = document.getElementById(id);
      console.log("all input", allInput);
      let purchased = that.purchased;
      for (let i = 0; i < purchased.length; i++) {
        let shop = purchased[i];
        shop.selected = allInput.checked;
        let goodsList = shop.goodsList;
        for (let j = 0; j < goodsList.length; j++) {
          let goods = goodsList[j];
          goods.selected = allInput.checked;
        }
      }
    }
  },
  watch: {
    goodsCount: function(newValue, oldValue) {
      console.log(newValue, oldValue);
    },
    shopTotal: function(newValue, oldValue) {
      console.log(newValue, oldValue);
      let that = this;
      // let shopId = "bagStore1";
      let total = 0;
      let purchased = that.purchased;
      for (let i = 0; i < purchased.length; i++) {
        let shop = purchased[i];
        // if (shop.shopId == shopId) {
        shop.shopTotal = newValue[i];
        total += newValue[i];
        // that.finalPrice = newValue;
        // }
      }
      that.finalPrice = total;
    }
  },
  computed: {
    goodsCount: function() {
      const purchased = this.purchased;
      for (let i = 0; i < purchased.length; i++) {
        const shop = purchased[i];
        if (shop.shopId == "bagStore") {
          const goodsList = shop.goodsList;
          for (let j = 0; j < goodsList.length; j++) {
            const goods = goodsList[j];
            if (goods.goodsId == "bag") {
              return goods.goodsCount;
            }
          }
        }
      }
    },
    shopTotal: function() {
      let that = this;
      let purchased = that.purchased;
      // let total = 0;
      let total = [];
      let flagAll = true;
      for (let i = 0; i < purchased.length; i++) {
        let flag = true;
        let shop = purchased[i];
        let goodsList = shop.goodsList;
        for (let j = 0; j < goodsList.length; j++) {
          let goods = goodsList[j];
          if (goods.selected) {
            // total += goods.goodsTotal;
            total.push(goods.goodsTotal);
          } else {
            flag = false;
          }
        }
        shop.selected = flag;
        if (!shop.selected) {
          flagAll = false;
        }
        that.checkAll = flagAll;
      }
      return total;
    }
  },
  filters: {
    toString: function(v) {
      let str = v + "";
      let arr = str.split(".");
      if (arr[1]) {
        if (arr[1].length == 1) {
          return str + "0";
        } else {
          return str;
        }
      } else {
        return str + ".00";
      }
    }
  }
};
</script>
