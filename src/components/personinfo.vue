<template>
    <div class="person-info">
            <!-- <div class="bg">
              <img src="../assets/images/vip_bg.jpg" alt="" srcset="">
            </div> -->
            <div class="info-content">
              <div class="head-portrait">
                <img src="../assets/images/vip.png" alt="" srcset="">
              </div>
              <div class="info-detail">
                <div class="account">
                  123456789
                </div>
                <div class="grade">
                  普通会员
                </div>
                <div class="integral">
                  积分：<span>100</span>
                </div>
                <div class="red-packet">
                  红包：<span>100</span>
                </div>
              </div>
              <div class="order-status">
                <div class="stay-payment">
                  <span class="stay-num">0</span> <br>
                  <span>待付款</span>
                </div>
                <div class="stay-take">
                  <span class="stay-num">0</span> <br>
                  <span>待付款</span>
                </div>
                <div class="stay-evaluate">
                  <span class="stay-num">1</span> <br>
                  <span>待评价</span>
                </div>
              </div>
            </div>
        </div>
</template>

<style scoped>
.person-info {
  height: 160px;
  width: 100%;
  position: relative;
  background-image: url(/img/vip_bg.3747e869.jpg);
  background-repeat: no-repeat;
  background-position: top left;
  background-size: 100% 145%;
  border-bottom: 4px solid #eee;
}

.info-content {
  height: 100%;
  width: 100%;
  position: absolute;
}

.head-portrait {
  width: 60px;
  height: 60px;
  border: 1px solid white;
  border-radius: 50%;
  margin: 1.8rem 3.2rem;
  float: left;
}

.info-detail {
  display: flex;
  flex-wrap: wrap;
  width: 160px;
  height: 50px;
  float: left;
  margin: 2rem 0 0;
  justify-content: space-between;
}

.account {
  display: inline-block;
  height: 1.5rem;
  width: 5rem;
  line-height: 1.5rem;
  color: white;
  font-size: 0.8rem;
}

.grade {
  display: inline-block;
  height: 1.5rem;
  width: 4rem;
  line-height: 1.5rem;
  text-align: center;
  border-radius: 3px;
  font-size: 0.8rem;
  background-color: greenyellow;
  color: white;
}

.integral {
  display: inline-block;
  width: 4rem;
  font-size: 0.8rem;
  color: white;
}

.red-packet {
  display: inline-block;
  width: 4rem;
  font-size: 0.8rem;
  color: white;
}

.order-status {
  width: 100%;
  height: 50px;
  position: absolute;
  bottom: 0;
  display: flex;
  background-color: rgba(0, 0, 0, 0.3);
}

.order-status > div {
  flex: 1;
  color: white;
  text-align: center;
  line-height: 1.4rem;
  font-size: 0.8rem;
}
.stay-take{
    border-left:1px solid rgba(255, 255, 255, 0.3);
    border-right:1px solid rgba(255, 255, 255, 0.3);
}
.stay-num {
  font-size: 1rem;
}
</style>

<script>
export default {
  name: "Personinfo",
  props: {},
  components: {},
  data: function() {
    return {};
  }
};
</script>
