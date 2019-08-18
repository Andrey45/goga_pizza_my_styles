import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/Pizza',
			name: 'Pizza',
			component: () => import(/* webpackChunkName: "about" */ './views/mainViews/Pizza.vue')
		},
		{
			path: '/Snacks',
			name: 'Snacks',
			component: () => import(/* webpackChunkName: "about" */ './views/mainViews/Snacks.vue')
		},
		{
			path: '/Dessert',
			name: 'Dessert',
			component: () => import(/* webpackChunkName: "about" */ './views/mainViews/Dessert.vue')
		},
		{
			path: '/Drinks',
			name: 'Drinks',
			component: () => import(/* webpackChunkName: "about" */ './views/mainViews/Drinks.vue')
		}
	]
})
