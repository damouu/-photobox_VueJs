import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from "../components/HelloWorld";
import evenements from "../components/Evenements";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HelloWorld
    },
    {
        path: '/evenements',
        name: 'evenements',
        component: evenements
    },
]

const router = new VueRouter({
    routes
})

export default router
