import MainPage from '@/pages/MainPage'
import PostPage from '@/pages/PostPage'
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        component: MainPage
    },
    {
        path: '/posts',
        component: PostPage
    },
]



const router = createRouter({
    routes,
    history: createWebHashHistory(process.env.BASE_URL)
})

export default router