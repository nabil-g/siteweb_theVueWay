import Vue from 'vue'
import Router from 'vue-router'
import Navbar from '@/components/Navbar'
import Skills from '@/components/Skills'
import Xp from '@/components/Xp'
import School from '@/components/School'
import About from '@/components/About'
import Legal from '@/components/Legal'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Navbar
    },
    {
      path: '/skills',
      name: 'Skills',
      component: Skills
    },
    {
      path: '/experience',
      name: 'Xp',
      component: Xp
    },
    {
      path: '/school',
      name: 'School',
      component: School
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/legal',
      name: 'Legal',
      component: Legal
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
  ]
})
