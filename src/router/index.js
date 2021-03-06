import Vue from 'vue'
import Router from 'vue-router'
import FlexLayoutBasic from '@/components/FlexLayoutBasic'
import FlexLayoutCardList1 from '@/components/FlexLayoutCardList1'
import FlexLayoutCardList2 from '@/components/FlexLayoutCardList2'
import FlexLayoutEllipsisTab from '@/components/FlexLayoutEllipsisTab'
const FlexLayoutScrollTab = () => import('@/components/FlexLayoutScrollTab')
const FlexLayoutOrderList1 = () => import('@/components/FlexLayoutOrderList1')

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
      path: '/flex/list/1',
      name: 'FlexLayoutCardList1',
      component: FlexLayoutCardList1
    },
    {
      path: '/flex/list/2',
      name: 'FlexLayoutCardList2',
      component: FlexLayoutCardList2
    },
    {
      path: '/flex/list/3',
      name: 'FlexLayoutOrderList1',
      component: FlexLayoutOrderList1
    },
    {
      path: '/flex/tab',
      name: 'FlexLayoutEllipsisTab',
      component: FlexLayoutEllipsisTab
    },
    {
      path: '/flex/scrollTab',
      name: 'FlexLayoutScrollTab',
      component: FlexLayoutScrollTab
    }
  ]
})
