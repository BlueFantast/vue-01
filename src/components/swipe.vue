<template>
    <div class="swipe">
        <mt-swipe id="my-swipe" 
          :auto="4000"
        >
          <mt-swipe-item 
            v-for="(item,index) in swipe"
            v-bind:key="index"
            v-bind:class="'slide' + (index+1)"
          >
            <img v-bind:src="item.imgUrl" alt="banner image" />
          </mt-swipe-item>

        </mt-swipe>
    </div>
</template>

<script>
export default {
  name: 'Swipe',
  props: {
    swipe: Array
  },
  data: function() {
    return {

    };
  },
  created: function() {
    // return this
    
  }
};
</script>

<style scoped>

#my-swipe {
  height: 7rem;
  color: #fff;
  font-size: 30px;
  text-align: center;
}

.swipe {
  width: 100%;
  height: 100%;
}

.slide1 {
  background-color: #2288fb;
  color: #fff;
}

.slide2 {
  background-color: #ffd705;
  color: #000;
}

.slide3 {
  background-color: #ff2d4b;
  color: #fff;
}
</style>
