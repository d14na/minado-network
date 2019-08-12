import Vue from 'vue'
import Router from 'vue-router'

// Containers
const DefaultContainer = () => import('@/containers/DefaultContainer')

// Views
const Home = () => import('@/views/Home')

const Colors = () => import('@/views/theme/Colors')

const Widgets = () => import('@/views/Widgets')

const InfinityPool = () => import('@/views/InfinityPool')
const InfinityWell = () => import('@/views/InfinityWell')
// const Rewards = () => import('@/views/Rewards')
const Payouts = () => import('@/views/Payouts')
const Notebook = () => import('@/views/faq/Notebook')

// Views - Components
const Cards = () => import('@/views/base/Cards')
const Forms = () => import('@/views/base/Forms')
const Switches = () => import('@/views/base/Switches')
const Tables = () => import('@/views/base/Tables')
const Tabs = () => import('@/views/base/Tabs')
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

// Users
const Foremen = () => import('@/views/foremen/Users')
const Users = () => import('@/views/foremen/Users')
const User = () => import('@/views/foremen/User')
const Rewards = () => import('@/views/rewards/Users')
const Reward = () => import('@/views/rewards/User')

// FAQ
// const Questions = () => import('@/views/faq/Questions')
const Answer = () => import('@/views/faq/Answer')

// Tokens
const _0GOLD = () => import('@/views/tokens/_0GOLD')
const _0xBTC = () => import('@/views/tokens/_0xBTC')

Vue.use(Router)

export default new Router({
    mode: 'hash', // https://router.vuejs.org/api/#mode
    linkActiveClass: 'open active',
    scrollBehavior: () => ({ y: 0 }),
    routes: [{
        path: '/',
        redirect: '/home',
        name: 'Home',
        component: DefaultContainer,
        children: [{
            path: 'home',
            name: 'Home',
            component: Home
        }, {
            path: 'foremen',
            name: 'My Foremen',
            component: Foremen
        }, {
            path: 'payouts',
            name: 'My Payouts',
            component: Payouts
        }, {
            path: 'rewards',
            name: 'Rewards',
            component: Rewards
        }, {
            path: 'infinitypool',
            name: 'InfinityPool',
            component: InfinityPool
        }, {
            path: 'infinitywell',
            name: 'InfinityWell',
            component: InfinityWell
        }, {
            path: '0GOLD',
            name: 'ZeroGold',
            component: _0GOLD
        }, {
            path: '0xBTC',
            name: '0xBitcoin Token',
            component: _0xBTC
        }, {
            path: 'notebook',
            meta: { label: `Notebook`},
            component: {
                render (c) { return c('router-view') }
            },
            children: [{
                path: '',
                component: Notebook,
            }, {
                path: ':id',
                meta: { label: 'Entry Detail'},
                name: 'Answer',
                component: Answer,
            }]
        }, {
            path: 'tag',
            meta: { label: 'Foremen'},
            component: {
                render (c) { return c('router-view') }
            },
            children: [{
                path: '',
                component: Users,
            }, {
                path: ':id',
                meta: { label: 'Foremen Dashboard'},
                name: 'Foremen',
                component: User,
            }]
        }, {
            path: 'reward',
            meta: { label: 'Rewards'},
            component: {
                render (c) { return c('router-view') }
            },
            children: [{
                path: '',
                component: Rewards,
            }, {
                path: ':id',
                meta: { label: 'Reward Dashboard'},
                name: 'Reward',
                component: Reward,
            }]

        // DEVELOPER ONLY
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
            path: 'widgets',
            name: 'Widgets',
            component: Widgets
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
    }]
})
