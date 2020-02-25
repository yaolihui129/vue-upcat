import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Desktop from '../views/Desktop.vue'
import login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
	{
		path:'/login',
		name:'Login',
		component: Login
	},
	{
		path: '/upcat',
		name: 'Home',
		component: Home,
		children:[
		{
		  path: '/desktop',
		  name: 'Desktop',
		  component: Desktop
		},
		// {
		//   path: '/b',
		//   name: 'B',
		//   component: B
		// }
		]
	}

]

const router = new VueRouter({
  routes
})

export default router
