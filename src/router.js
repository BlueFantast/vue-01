import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import Index from './components/index.vue'
import Classify from './components/classify.vue'
import Seckill from './components/seckill.vue'
import Shopcart from './components/shopcart.vue'
import Center from './components/center.vue'
import Detail from './components/detail.vue'

const routes = [{
        path: '/',
        redirect: '/index'
    }, {
        path: '/index',
        component: Index
    },
    {
        path: '/classify',
        component: Classify
    },
    {
        path: '/seckill',
        component: Seckill
    },
    {
        path: '/shopcart',
        component: Shopcart
    },
    {
        path: '/center',
        component: Center
    },
    {
        path: '/detail',
        component: Detail
    }
]

export default new VueRouter({ // 创建 router 实例，然后传 `routes` 配置
    routes // (缩写) 相当于 routes: routes
})