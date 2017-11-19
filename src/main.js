import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routerConfig from './router.config.js'

Vue.use(VueRouter);


	
const router = new VueRouter({
	mode:'history',//切换路径模式，变成history 模式
	scrollBehavior:() =>(
		{
			y:0
		}
	),//滚动条滚动的行为，不加这个默认就会记忆原来滚动条的位置
	routes:routerConfig
});
require('./assets/css/reset_pc.css');
require('./assets/css/sm.min.css');
require('./assets/css/sm-extend.min.css');
require('./assets/css/common.css');



new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

