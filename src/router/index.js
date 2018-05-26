import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import newindex from '@/components/newindex'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'newindex',
      component: newindex
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
