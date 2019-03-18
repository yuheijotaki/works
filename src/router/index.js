import Vue from 'vue'
import Router from 'vue-router'
import top from '@/components/page/top'
import about from '@/components/page/about'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.ROOT_BASE, // Vue router を GitHub Pages で動かす用の設定
  routes: [
    {
      path: "/",
      name: 'top',
      component: top
    },
    {
      path: "/about",
      name: 'about',
      component: about
    }
  ]
})
