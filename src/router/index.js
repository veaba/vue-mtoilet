import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../components/HomePage'
import Contact from '../components/Contact'
import About from '../components/About'
import mHomePage from '../components/mHomePage'
import mAbout from '../components/mAbout'
import mContact from '../components/mContact'
import mGuide from '../components/mGuide'

Vue.use(Router)

export default new Router({
	routes: [
		{ path: '/', name: 'homepage', component: HomePage },
		{ path: '/contact', name: 'contact', component: Contact },
		{ path: '/about', name: 'about', component: About },
		{
			path: '/m',
			name: 'mobile',
			component: mHomePage
		},
		{ path: '/mabout', name: 'mabout', component: mAbout },
		{ path: '/mcontact', name: 'mcontact', component: mContact },
		{ path: '/mguide', name: 'guide', component: mGuide }
	]
})