import Router from "vue-router";
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';

const router = new Router({
    mode: 'history',
    routes: [
        { path: '/', component: HomePage },
        { path: '/login', component: LoginPage }
        //{ path: '*', redirect: '/' }
    ]
});

router.beforeEach((to, from, next) => {
	// array of paths available to public
	const publicPages = ['/login'];
	// auth is required to everything not in publicPages
	const authRequired = !publicPages.includes(to.path);
	const loggedIn = localStorage.getItem('user');

	if (authRequired && !loggedIn) {
		return next('/login');
	}

	next();
});

export default router;