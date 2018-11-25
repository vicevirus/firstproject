import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Dashboard from '@/components/Dashboard'
import Contacts from '@/components/Contacts'
import Profile from '@/components/Profile'
import Charts from '@/components/Charts'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/About',
      name: 'About',
      component: About
    },
    {
      path: '/Dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/Contacts',
      name: 'Contacts',
      component: Contacts
    },
    {
      path: '/Profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/Charts',
      name: 'Charts',
      component: Charts
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    }
  ]
})
