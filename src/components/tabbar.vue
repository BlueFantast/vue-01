<template>
    <div class="tabbar">
        <div class="container">
            <router-link
                class="items"
                v-for="(item,index) in tabbar"
                v-bind:key="index"
                :to="item.id"
                :id="item.id"
            >
                <div class="image-container">
                    <img v-show="item.id == selected" :src="item.imgUrl_selected" alt="" srcset="">
                    <img v-show="item.id != selected" :src="item.imgUrl" alt="" srcset="">
                </div>
                <div :class="item.id == selected ? 'text-container-selected' : 'text-container' ">
                    {{item.title}}
                </div>
            </router-link>
        </div>
    </div>
</template>

<style scoped>

.tabbar{
    width: 100%;
    height: auto;
    position: fixed;
    bottom: 0;
    background-color: white;
}
.container{
    display: flex;
    justify-content: space-around;
    padding: 5px;
}

.items{
    flex: 1;
    text-align: center;
}

.image-container{
    display: inline-block;
    width: 30%;
}

.text-container{
    color: gray;
    font-size: 0.8rem;
}

.text-container-selected{
    color: #26a2ff;
    font-size: 0.8rem;
}

</style>

<script>
export default {
    name:'Tabbar',
    props:{
        tabbar:Array
    },
    data:function () {
        return {
            selected:'index'
        }
    }
}
</script>
