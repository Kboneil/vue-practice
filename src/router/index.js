import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Featured from '@/components/Featured'
import Albums from '@/components/Albums'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Detail from '@/components/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/featured',
      name: 'Featured',
      component: Featured
    },
    {
      path: '/albums',
      name: 'Albums',
      component: Albums
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    }
  ]
})
