<template>
    <div class="center">
        <Header v-bind="header" />
        <Personinfo />  
        <Functionnavigate v-bind="orderManage" />
        <Functionnavigate v-bind="accountManage" />
        <Cell title="收货地址" id="takeDelivery" :imgUrl="require('../assets/images/icon_take_delivery.png')" />
        <Cell title="设置" id="setting" :imgUrl="require('../assets/images/icon_setting.png')" />
        <Cell title="客服" id="customService" :imgUrl="require('../assets/images/icon_custom_service.png')" />
        <Cell title="帮助和反馈" id="help" :imgUrl="require('../assets/images/icon_help.png')" />
        <Tabbar v-bind:selected="selected" />
    </div>
    
</template>

<style scoped>
.center {
  width: 100%;
  height: 100%;
}
</style>

<script>
import Header from './header.vue';
import Personinfo from './personinfo.vue';
import Functionnavigate from './functionnavigate.vue';
import Cell from './cell.vue';
import Tabbar from './tabbar.vue';

export default {
  name: 'Center',
  props: {},
  components: {
    Header,
    Personinfo,
    Functionnavigate,
    Cell,
    Tabbar
  },
  data: function() {
    return {
      selected: 'center',
      header: {
        title: '个人中心',
        showBack: false,
        showMore: true
      },
      personInfo:{
        portrait:require('../assets/images/vip.png'),
      },
      orderManage: {
        id: 'orderManage',
        imgUrl:require('../assets/images/icon_gift.png'),
        title: '订单管理',
        items: [
          {
            id: 'myOrder',
            title: '我的订单',
            imgUrl: require('../assets/images/icon_order.png')
          },
          {
            id: 'mySeckill',
            title: '我的秒杀',
            imgUrl: require('../assets/images/icon_seckill.png')
          },
          {
            id: 'myCrowdFunding',
            title: '我的众筹',
            imgUrl: require('../assets/images/icon_crowd_funding.png'),
          },
          {
            id: 'myBespeak',
            title: '我的预约',
            imgUrl: require('../assets/images/icon_bespeak.png')
          }
        ]
      },
      accountManage:{
        id: 'accountManage',
        imgUrl:require('../assets/images/icon_account.png'),
        title: '帐户管理',
        items: [
          {
            id: 'myOrder',
            title: '帐户余额',
            num:100
          },
          {
            id: 'mySeckill',
            title: '我的积分',
            num:1000
          },
          {
            id: 'myCrowdFunding',
            title: '我的礼券',
            num:1
          },
          {
            id: 'myBespeak',
            title: '我的收藏',
            num:5
          }
        ]
      },
    };
  }
};
</script>
