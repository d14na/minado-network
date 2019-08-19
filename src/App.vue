<template>
    <router-view></router-view>
</template>

<script>
/* Import modules. */
import SockJS from 'sockjs-client'

/* Import libraries. */
const ethers = require('ethers')

/* Import local libraries. */
const utils = require('@/_utils')

/* Initialize constants. */
const MINADO_NETWORK_URL = 'http://asia.minado.network'

export default {
    methods: {
        /**
         * Initialize WebSocket
         */
        initWs () {
            /* Initialize primary web socket connection. */
            const ws = new SockJS(MINADO_NETWORK_URL)

            // console.log('ws', ws)

            /* Save the WebSocket to the store. */
            this.$store.dispatch('setWebSocket', ws)

            /* Handle WebSocket ERRORS. */
            ws.onerror = (_err) => {
                console.log('Oh no! WebSocket has a problem:', _err)
            }

            /* Handle WebSocket OPEN. */
            ws.onopen = () => {
                console.info('Connection established to Minado.Network')

                /* Build package. */
                const pkg = {
                    client: 'web',
                    version: 'latest'
                }

                /* Send package to server. */
                ws.send(JSON.stringify(pkg))
            }

            /* Handle WebSocket MESSAGES. */
            ws.onmessage = (_e) => {
                console.log('Incoming message:', _e.data)

                this.$store.dispatch('addNetworkReport', _e.data)
            }

            /* Handle WebSocket CLOSE. */
            ws.onclose = () => {
                console.log('Connection closed.')

                /* Attempt re-connection. */
                utils.reconnect(this.initWs)
            }
        },
    },
    mounted: function () {
        /* Initialize WebSocket. */
        this.initWs()
    }
}
</script>

<style lang="scss">
// CoreUI Icons Set
@import '~@coreui/icons/css/coreui-icons.min.css';

/* Import Font Awesome Icons Set */
$fa-font-path: '~font-awesome/fonts/';
@import '~font-awesome/scss/font-awesome.scss';

/* Import Simple Line Icons Set */
$simple-line-font-path: '~simple-line-icons/fonts/';
@import '~simple-line-icons/scss/simple-line-icons.scss';

/* Import Flag Icons Set */
@import '~flag-icon-css/css/flag-icon.min.css';

/* Import Bootstrap Vue Styles */
@import '~bootstrap-vue/dist/bootstrap-vue.css';

// Import Main styles for this application
@import 'assets/scss/style';
</style>
