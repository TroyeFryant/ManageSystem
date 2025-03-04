import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import User from '../views/User.vue'
import Main from '../views/Main.vue'
import Mall from '../views/Mall.vue'
import PageOne from '../views/PageOne.vue'
import PageTwo from '../views/PageTwo.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: Main,
        redirect: '/home',
        children: [
            {
                path: '/home',
                name:'home',
                component: Home
            }, {
                path: '/user',
                component: User
            }, {
                path: '/mall',
                component: Mall
            }, {
                path: '/page1',
                component: PageOne
            }, {
                path: '/page2',
                component: PageTwo
            }

        ]
    },
    {
        path: '/login',
        name:'login',
        component: Login
    }

]

const router = new VueRouter({
    routes
})

export default router;