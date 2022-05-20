import {
	createRouter,
	createWebHistory
} from 'vue-router'
const routerHistory = createWebHistory()
export default createRouter({
	history: routerHistory,
	routes: [{
			path: '/',
			name: '首页',
			component: () => import('@/view/HomePage')
		},
		{
			path: '/model/:id',
			name: '示例',
			component: () => import('@/view/ModelPage')
		}
	]
})
