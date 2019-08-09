export default {
    items: [{
        name: 'My Home',
        url: '/home',
        icon: 'icon-grid'
    }, {
        name: 'My Foreman',
        url: '/foreman',
        icon: 'fa fa-industry'
        // icon: 'icon-energy'
    }, {
        name: 'My Payouts',
        url: '/payouts',
        icon: 'fa fa-usd'
    // Community
    }, {
        title: true,
        name: 'Community'
    // }, {
    //     name: 'InfinityPool',
    //     url: '/infinitypool',
    //     icon: 'icon-layers'
    // }, {
    //     name: 'InfinityWell',
    //     url: '/infinitywell',
    //     icon: 'icon-present',
    //     // variant: 'info',
    //     badge: {
    //         variant: 'warning',
    //         text: 'DEMO'
    //     }
    }, {
        name: 'Faucets',
        url: '/faucets',
        icon: 'icon-present'
    // Mineables
    }, {
        title: true,
        name: 'Mineables'
    }, {
        name: '0xBitcoin Token',
        url: '/0xBTC',
        icon: 'icon-chart'
    }, {
        name: 'ZeroGold',
        url: '/0GOLD',
        icon: 'icon-chart',
        // variant: 'warning',
        badge: {
            variant: 'warning',
            text: 'NEW'
        }
    // Extras
    }, {
        title: true,
        name: 'Extras'
    }, {
        name: 'Calculators',
        url: '/calculators',
        icon: 'icon-calculator'
    }, {
        name: `Notebook`,
        url: '/notebook',
        icon: 'icon-info'
    // Developer Use ONLY
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
