export default {
    items: [{
        name: 'Dashboard',
        url: '/dashboard',
        icon: 'icon-grid'
    }, {
        name: 'Ministo',
        url: '/ministo',
        // icon: 'fa fa-industry'
        icon: 'icon-energy'
    }, {
        name: 'InfinityPools',
        url: '/pools',
        icon: 'icon-layers'
    }, {
        name: 'Payouts',
        url: '/payouts',
        icon: 'fa fa-usd'
    }, {
        name: 'Analytics',
        url: '/charts',
        icon: 'icon-chart'
    }, {
        name: 'Settings',
        url: '/settings',
        icon: 'icon-settings'
    }, {
        name: 'Help & Support',
        url: '/support',
        icon: 'icon-support'
    }, {
        title: true,
        name: 'Minado Extras'
    }, {
        name: 'InfinityWell',
        url: '/infinitywell',
        icon: 'icon-present',
        variant: 'success',
        badge: {
            variant: 'warning',
            text: 'NEW'
        }
    }, {
        name: 'Profit Calculator',
        url: '/calc',
        icon: 'icon-calculator'
    }, {
        name: 'Online Resources',
        url: '/resources',
        icon: 'icon-info'
    }, {
        name: 'Minado.App',
        url: 'https://minado.app',
        icon: 'icon-screen-smartphone',
        attributes: {
            target: '_blank',
            rel: 'noopener',
            disabled: true
        }
    }, {
        name: 'Dev Use ONLY',
        url: '/base',
        icon: 'icon-puzzle',
        children: [{
            name: 'Colors',
            url: '/theme/colors',
            icon: 'icon-drop'
        }, {
            name: 'Cards',
            url: '/base/cards',
            icon: 'icon-puzzle'
        }, {
            name: 'Collapses',
            url: '/base/collapses',
            icon: 'icon-puzzle'
        }, {
            name: 'Forms',
            url: '/base/forms',
            icon: 'icon-puzzle'
        }, {
            name: 'List Groups',
            url: '/base/list-groups',
            icon: 'icon-puzzle'
        }, {
            name: 'Navs',
            url: '/base/navs',
            icon: 'icon-puzzle'
        }, {
            name: 'Paginations',
            url: '/base/paginations',
            icon: 'icon-puzzle'
        }, {
            name: 'Popovers',
            url: '/base/popovers',
            icon: 'icon-puzzle'
        }, {
            name: 'Progress Bars',
            url: '/base/progress-bars',
            icon: 'icon-puzzle'
        }, {
            name: 'Switches',
            url: '/base/switches',
            icon: 'icon-puzzle'
        }, {
            name: 'Tables',
            url: '/base/tables',
            icon: 'icon-puzzle'
        }, {
            name: 'Tabs',
            url: '/base/tabs',
            icon: 'icon-puzzle'
        }, {
            name: 'Button Dropdowns',
            url: '/buttons/dropdowns',
            icon: 'icon-cursor'
        }, {
            name: 'Button Groups',
            url: '/buttons/button-groups',
            icon: 'icon-cursor'
        }, {
            name: 'Flags',
            url: '/icons/flags',
            icon: 'icon-star'
        }, {
            name: 'Font Awesome',
            url: '/icons/font-awesome',
            icon: 'icon-star',
            badge: {
                variant: 'secondary',
                text: '4.7'
            }
        }, {
            name: 'Simple Line Icons',
            url: '/icons/simple-line-icons',
            icon: 'icon-star'
        }, {
            name: 'Alerts',
            url: '/notifications/alerts',
            icon: 'icon-bell'
        }, {
            name: 'Modals',
            url: '/notifications/modals',
            icon: 'icon-bell'
        }, {
            name: 'Widgets',
            url: '/widgets',
            icon: 'icon-calculator',
            badge: {
                variant: 'primary',
                text: 'NEW'
            }
        }]
    }]
}
