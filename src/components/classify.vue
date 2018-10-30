<template>
  <div id="classify">
    <Header v-bind="header" />
    <mt-search
      v-model="value"
      cancel-text=""
      placeholder="搜索商品">
    </mt-search>
    <div class="all-classify">
      <div class="title"> 
        <img src="../assets/images/c.png" alt="" srcset="">
      </div>
      <div class="classify-content">
        <router-link
          class="items-container"
          v-for="(item,index) in classify"
          v-bind:key="index" 
          :to="item.id"
        >
          <div class="image-container">
            <img :src="item.imgUrl" >
          </div>
          <div class="text-container">
            {{item.text}}
          </div>
        </router-link>
      </div>
    </div>
    <Tabbar v-bind:selected="selected" />
  </div>
</template>

<style>
#classify {
  width: 100%;
  height: 100%;
}

.mint-searchbar {
  background-color: rgba(240, 240, 240, 0.5);
  padding: 12px 10px;
}
.mint-search {
  height: auto;
}
.mint-searchbar-inner {
  border-radius: 5px;
}

.title{
  padding: 5px 0 0;
}

.classify-content {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}

.items-container {
  display: block;
  width: 32.5%;
  border: 1px solid #eee;
  font-size: 0.9rem;
  color: #333;
  text-align: center;
  padding: 5px 0 10px;
}

.items-container img {
  width: 5rem;
}
</style>

<script>
import Header from './header.vue';
import Tabbar from './tabbar.vue';

export default {
  name: 'Classify',
  components: {
    Header,
    Tabbar
  },
  data: function() {
    return {
      selected: 'classify',
      value:'',
      header: {
        title: '商品分类',
        showBack: false,
        showMore: true
      },
      classify: [
        {
          id: 'index',
          imgUrl: require('../assets/images/p1.png'),
          text: '服装饰品'
        },
        {
          id: 'index',
          imgUrl: require('../assets/images/p2.png'),
          text: '家居日常'
        },
        {
          id: 'index',
          imgUrl: require('../assets/images/p3.png'),
          text: '精品鞋履'
        },
        {
          id: 'index',
          imgUrl: require('../assets/images/p4.png'),
          text: '手机数码'
        },
        {
          id: 'index',
          imgUrl: require('../assets/images/p1.png'),
          text: '个人护理'
        },
        {
          id: 'index',
          imgUrl: require('../assets/images/p2.png'),
          text: '户外运动'
        },
        {
          id: 'index',
          imgUrl: require('../assets/images/p3.png'),
          text: '妈咪宝贝'
        },
        {
          id: 'index',
          imgUrl: require('../assets/images/p4.png'),
          text: '家用电器'
        },
        {
          id: 'index',
          imgUrl: require('../assets/images/p1.png'),
          text: '休闲零食'
        }
      ]
    };
  }
};
</script>
