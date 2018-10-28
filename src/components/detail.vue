<template>
    <div class="detail">
        detail
    </div>
</template>

<style scoped>
.detail{
    width: 100%;
    height: 100%;
}
</style>

<script>
export default {
    name:'Detail',
    props:{},
    components:{},
    data:function () {
        return {
            rout:''
        }
    },
    methods:{
        created() {
            this.rout = this.$router.path
        },
    }
}
</script>
