<template>
    <div class="seckill">
        seckill
        <Tabbar v-bind:tabbar="tabbar" v-bind:selected="selected" />
    </div>
</template>

<style scoped>
.seckill{
    width: 100%;
    height: 100%;
}
</style>

<script>
import Tabbar from './tabbar.vue'

export default {
    name:'Seckill',
    props:{
        // selected:String
    },
    components:{
        Tabbar
    },
    data:function () {
        return {
            selected:'seckill'
        }
    }
}
</script>
