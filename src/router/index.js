import Vue from 'vue'
import Router from 'vue-router'

// Containers
const DefaultContainer = () => import('@/containers/DefaultContainer')

// Views
const Dashboard = () => import('@/views/Dashboard')

const Colors = () => import('@/views/theme/Colors')

const Charts = () => import('@/views/Charts')
const Widgets = () => import('@/views/Widgets')

const Calc = () => import('@/views/Calc')
const Ministo = () => import('@/views/Ministo')
const Pools = () => import('@/views/Pools')

// Views - Components
const Cards = () => import('@/views/base/Cards')
const Forms = () => import('@/views/base/Forms')
const Switches = () => import('@/views/base/Switches')
const Tables = () => import('@/views/base/Tables')
const Tabs = () => import('@/views/base/Tabs')
const Collapses = () => import('@/views/base/Collapses')
const ListGroups = () => import('@/views/base/ListGroups')
const Navs = () => import('@/views/base/Navs')
const Paginations = () => import('@/views/base/Paginations')
const Popovers = () => import('@/views/base/Popovers')
const ProgressBars = () => import('@/views/base/ProgressBars')

// Views - Buttons
const ButtonGroups = () => import('@/views/buttons/ButtonGroups')
const Dropdowns = () => import('@/views/buttons/Dropdowns')

// Views - Icons
const Flags = () => import('@/views/icons/Flags')
const FontAwesome = () => import('@/views/icons/FontAwesome')
const SimpleLineIcons = () => import('@/views/icons/SimpleLineIcons')

// Views - Notifications
const Alerts = () => import('@/views/notifications/Alerts')
const Modals = () => import('@/views/notifications/Modals')

// Views - Pages
const Page404 = () => import('@/views/pages/Page404')
const Page500 = () => import('@/views/pages/Page500')
const Login = () => import('@/views/pages/Login')
const Register = () => import('@/views/pages/Register')

// Users
const Users = () => import('@/views/users/Users')
const User = () => import('@/views/users/User')

Vue.use(Router)

export default new Router({
    mode: 'hash', // https://router.vuejs.org/api/#mode
    linkActiveClass: 'open active',
    scrollBehavior: () => ({ y: 0 }),
    routes: [{
        path: '/',
        redirect: '/dashboard',
        name: 'Minado',
        component: DefaultContainer,
        children: [{
            path: 'dashboard',
            name: 'Dashboard',
            component: Dashboard
        }, {
            path: 'calc',
            name: 'Calc',
            component: Calc
        }, {
            path: 'ministo',
            name: 'Ministo',
            component: Ministo
        }, {
            path: 'pools',
            name: 'Pools',
            component: Pools
        }, {
            path: 'theme',
            redirect: '/theme/colors',
            name: 'Theme',
            component: {
                render (c) { return c('router-view') }
            },
            children: [{
                path: 'colors',
                name: 'Colors',
                component: Colors
            }]
        }, {
            path: 'charts',
            name: 'Charts',
            component: Charts
        }, {
            path: 'widgets',
            name: 'Widgets',
            component: Widgets
        }, {
            path: 'users',
            meta: { label: 'Users'},
            component: {
                render (c) { return c('router-view') }
            },
            children: [{
                path: '',
                component: Users,
            }, {
                path: ':id',
                meta: { label: 'User Details'},
                name: 'User',
                component: User,
            }]
        }, {
            path: 'base',
            redirect: '/base/cards',
            name: 'Base',
            component: {
                render (c) { return c('router-view') }
            },
            children: [{
                path: 'cards',
                name: 'Cards',
                component: Cards
            }, {
                path: 'forms',
                name: 'Forms',
                component: Forms
            }, {
                path: 'switches',
                name: 'Switches',
                component: Switches
            }, {
                path: 'tables',
                name: 'Tables',
                component: Tables
            }, {
                path: 'tabs',
                name: 'Tabs',
                component: Tabs
            }, {
                path: 'collapses',
                name: 'Collapses',
                component: Collapses
            }, {
                path: 'list-groups',
                name: 'List Groups',
                component: ListGroups
            }, {
                path: 'navs',
                name: 'Navs',
                component: Navs
            }, {
                path: 'paginations',
                name: 'Paginations',
                component: Paginations
            }, {
                path: 'popovers',
                name: 'Popovers',
                component: Popovers
            }, {
                path: 'progress-bars',
                name: 'Progress Bars',
                component: ProgressBars
            }]
        }, {
            path: 'buttons',
            redirect: '/buttons/standard-buttons',
            name: 'Buttons',
            component: {
                render (c) { return c('router-view') }
            },
            children: [{
                path: 'button-groups',
                name: 'Button Groups',
                component: ButtonGroups
            }, {
                path: 'dropdowns',
                name: 'Dropdowns',
                component: Dropdowns
            }]
        }, {
            path: 'icons',
            redirect: '/icons/font-awesome',
            name: 'Icons',
            component: {
                render (c) { return c('router-view') }
            },
            children: [{
                path: 'flags',
                name: 'Flags',
                component: Flags
            }, {
                path: 'font-awesome',
                name: 'Font Awesome',
                component: FontAwesome
            }, {
                path: 'simple-line-icons',
                name: 'Simple Line Icons',
                component: SimpleLineIcons
            }]
        }, {
            path: 'notifications',
            redirect: '/notifications/alerts',
            name: 'Notifications',
            component: {
                render (c) { return c('router-view') }
            },
            children: [{
                path: 'alerts',
                name: 'Alerts',
                component: Alerts
            }, {
                path: 'modals',
                name: 'Modals',
                component: Modals
            }]
        }]
    }, {
        path: '/pages',
        redirect: '/pages/404',
        name: 'Pages',
        component: {
            render (c) { return c('router-view') }
        },
        children: [{
            path: '404',
            name: 'Page404',
            component: Page404
        }, {
            path: '500',
            name: 'Page500',
            component: Page500
        }, {
            path: 'login',
            name: 'Login',
            component: Login
        }, {
            path: 'register',
            name: 'Register',
            component: Register
        }]
    }]
})
