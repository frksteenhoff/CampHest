import Vue from 'vue'
import VueRouter from 'vue-router'
import Hello from '@/components/Hello.vue'
import About from '@/components/About.vue'
import Contact from '@/components/Contact.vue'
import Events from '@/components/Events.vue'
import Help from '@/components/Help.vue'

Vue.use(VueRouter)

const routes = [
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
    path: '/events',
    name: 'Events',
    component: Events
  },
  {
    path: '/help',
    name: 'Hjælp',
    component: Help
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }
]

const router = new VueRouter({ routes })

export default router
