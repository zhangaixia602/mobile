import { createRouter,createWebHistory } from 'vue-router'
const routerHistory=createWebHistory()
export default createRouter({
  history:routerHistory,
  routes: [
    // {
    //   path: '/model/:id',
    //   name: '示例',
    //   component: () => import('@/view/ModelPage')
    // }
  ]
})
