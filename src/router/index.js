import Vue from 'vue'
Vue.use(Router)
import Router from 'vue-router'
import test from "@/components/test"
import Layout from "@/layout"

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Layout
    }
  ]
})
