import Vue from 'vue'
import VueRouter from "vue-router"
import home from "../components/Home/index.vue"
import artical from "../components/Artical/index.vue"
import login from "../components/Login/index.vue"
import register from "../components/Register/index.vue"

Vue.use(VueRouter);

const router = new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/home',
			component: home
		},
		{
			path: '/artical',
			component: artical
		},
		{
			path: '/login',
			component: login
		},
		{
			path: '/register',
			component: register
		}
	]
})
export default router