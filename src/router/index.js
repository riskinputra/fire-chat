import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Chat from '@/components/Chat'
import CreateChat from '@/components/CreateChat'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '/login',
          name: 'Login',
          component: Login
        },
        {
          path: '/register',
          name: 'Register',
          component: Register
        },
        {
          path: '/chat/:id',
          name: 'Chat',
          component: Chat,
          props: true
        },
        {
          path: '/create',
          name: 'CreateChat',
          component: CreateChat
        }
      ]
    }
  ]
})
