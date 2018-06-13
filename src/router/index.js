import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import newindex from '@/components/newindex'
import  socketPage from '@/components/socketPage'
import  loginPage from '@/components/loginPage'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/newindex',
            name: 'newindex',
            component: newindex
        },
        {
            path: '/HelloWorld',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/socket',
            name: 'SocketTest',
            component: socketPage
        },
        {
            path: '/',
            name: 'login',
            component: loginPage
        }
    ]
})
