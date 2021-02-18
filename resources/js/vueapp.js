import Vue from 'vue'
import VueRouter from 'vue-router'

//  This tells vue to use the router package
Vue.use(VueRouter)

import App from './components/App'
import Welcome from './components/Welcome'
import Page from './components/Page'

// Defines the routes our application is going to have
const router = new VueRouter({
    mode: 'history', // The modem could be hash or history
    routes: [
        {
            path: '/home',
            name: 'welcome',
            component: Welcome,
            props: { 
                title: "This is the SPA Home" 
            }
        },
        {
            path: '/page1',
            name: 'first-page',
            component: Page,
            props: { 
                title: "This is the SPA First Page",
                author : {
                    name : "Fisayo Afolayan",
                    role : "Software Engineer",
                    code : "Always keep it clean"
                }
            }
        },
        {
            path: '/page2',
            name: 'second-page',
            component: Page,
            props: { 
                title: "This is the SPA Second Page",
                author : {
                    name : "Second Author",
                    role : "Second Software Engineer",
                    code : "Second Code"
                }
            }
        },
        {
            path: '/page3',
            name: 'third-page',
            component: Page,
            props: { 
                title: "This is the SPA Third Page",
                author : {
                    name : "Third Author",
                    role : "Third Software Engineer",
                    code : "Third Code"
                } 
            }
        },    
    ],
})
const app = new Vue({
    el: '#app',
    components: { App },
    router,
});