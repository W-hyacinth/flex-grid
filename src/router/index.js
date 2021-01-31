import Vue from 'vue'
import Router from 'vue-router'
import FlexLayoutBasic from '@/components/FlexLayoutBasic'
import FlexLayoutCardList from '@/components/FlexLayoutCardList'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/flex/basic',
      name: 'FlexLayoutBasic',
      component: FlexLayoutBasic
    },
    {
      path: '/flex/card-list',
      name: 'FlexLayoutCardList',
      component: FlexLayoutCardList
    }
  ]
})
