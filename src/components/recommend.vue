<template>
    <div class="recommend">
        <div class="list-container">
            <div 
                v-for="(item,index) in recommend"
                v-bind:key="index"
                class="list-item" 
            >
                <img :src="item.imgUrl" alt="" srcset="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Recommend',
  props: {
    recommend: Array
  }
};
</script>

<style scoped>

.recommend{
    width: 100%;
    /* height: 20rem; */
    padding: 10px 0;
}

.list-container{
    width: 100%;
    /* height: 100%; */
    background-color: #eee;
}

.list-item{
    width: 100%;
    height: 7rem;
    margin: 5px 0;
}
</style>
