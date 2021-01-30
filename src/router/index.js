import Vue from 'vue'
import Router from 'vue-router'
import FlexLayoutBasic from '@/components/FlexLayoutBasic'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/flex/basic',
      name: 'FlexLayoutBasic',
      component: FlexLayoutBasic
    }
  ]
})
