import Nr from './components/Nr.vue'
import Activity from './components/Activity.vue'
import Classification from './components/Classification.vue'
import Car from './components/Car.vue'
import Pec from './components/Pec.vue'

export default[
	//{ path: '/', redirect: '/home' },// 默认就跳转此页面
	{ path: '/', redirect: '/home' },// 默认就跳转此页面
	{ path: '*', redirect: '/home' },//当这些路由都找不到的时候 调到首页
	{
		path:'/home',
		component:Nr
	},
	{
		path:'/activity',
		component:Activity
	},
	{
		path:'/Fl',
		component:Classification
	},
	{
		path:'/car',
		component:Car
	},
	{
		path:'/PersonalCenter',
		component:Pec
	}
]
