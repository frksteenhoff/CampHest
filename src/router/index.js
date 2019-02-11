import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import About from '@/components/About' 
import Contact from '@/components/Contact' 
import Events from '@/components/Events' 
import Help from '@/components/Help' 

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
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
      path: '/events',
      name: 'Events',
      component: Events
    }, 
    {
      path: '/help',
      name: 'Hjælp',
      component: Help
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})