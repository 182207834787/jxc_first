import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import home from '@/components/home'
import tianjia from '@/view/article/tianjia'
import erji from '@/view/erji'
import liebiao from '@/view/liebiao'
import yiji from '@/view/yiji'
import fenlie from '@/view/fenlie'
import lastjiekou from '@/view/lastjiekou'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      children: [
        {
          path: '/tianjia',
          name: 'tianjia',
          component: tianjia
        },
        {
          path: '/erji',
          name: 'erji',
          component: erji
        },
        {
          path: '/yiji',
          name: 'yiji',
          component: yiji
        },
        {
          path: '/liebiao',
          name: 'liebiao',
          component: liebiao
        },
        {
          path: '/fenlie',
          name: 'fenlie',
          component: fenlie
        },
        {
          path: '/lastjiekou',
          name: 'lastjiekou',
          component: lastjiekou
        }
        
      ]
    },




  ]
})
