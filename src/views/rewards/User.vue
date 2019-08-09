<template>
    <div class="animated fadeIn">
        <b-row>
            <b-col cols="12" lg="6">
                <b-card no-header>
                    <template slot="header">
                        Foreman Tag [ <strong>{{ $route.params.id }}</strong> ]
                    </template>

                    <b-table striped small fixed responsive="sm" :items="items($route.params.id)" :fields="fields">
                        <template slot="value" slot-scope="data">
                            <strong>{{data.item.value}}</strong>
                        </template>
                    </b-table>

                    <template slot="footer">
                        <b-button variant="success" @click="goBack"><i class="fa fa-dot-circle-o"></i> Start Mining</b-button>
                        <b-button variant="danger" @click="goBack"><i class="fa fa-ban"></i> Stop Mining</b-button>
                        <b-button variant="warning" @click="goBack"><i class="fa fa-ban"></i> Test Hardware</b-button>
                    </template>
                </b-card>
            </b-col>

            <b-col cols="12" lg="6">
                <b-card
                    header-tag="header"
                    footer-tag="footer">
                    <div slot="header">
                        <i class="fa fa-align-justify"></i><strong> Collapse </strong> <small><code>accordion</code> support</small>
                    </div>

                    <div role="tablist">
                        <b-card no-body class="mb-1">
                            <b-card-header header-tag="header" class="p-1" role="tab">
                                <b-btn block href="#" v-b-toggle.accordion1 variant="info">Summary</b-btn>
                            </b-card-header>

                            <b-collapse id="accordion1" visible accordion="my-accordion" role="tabpanel">
                                <b-card-body>
                                    <p class="card-text">
                                        Time to make some coins.
                                        We won't ask much of you.
                                    </p>
                                </b-card-body>
                            </b-collapse>
                        </b-card>

                        <b-card no-body class="mb-1">
                            <b-card-header header-tag="header" class="p-1" role="tab">
                                <b-btn block href="#" v-b-toggle.accordion2 variant="info">Accordion 2</b-btn>
                            </b-card-header>

                            <b-collapse id="accordion2" accordion="my-accordion" role="tabpanel">
                                <b-card-body>
                                    <p class="card-text">
                                        {{ text }}
                                    </p>
                                </b-card-body>
                            </b-collapse>
                        </b-card>

                        <b-card no-body class="mb-1">
                            <b-card-header header-tag="header" class="p-1" role="tab">
                                <b-btn block href="#" v-b-toggle.accordion3 variant="info">Advanced Settings</b-btn>
                            </b-card-header>

                            <b-collapse id="accordion3" accordion="my-accordion" role="tabpanel">
                                <b-card-body>
                                    <p class="card-text">
                                        SettingsAdvanced
                                    </p>
                                </b-card-body>
                            </b-collapse>
                        </b-card>
                    </div>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col md="6">
                <p>
                    Introduction to Mining and Profit Calculations
                </p>
            </b-col>
        </b-row>
    </div>
</template>

<script>
/* Import libraries. */
import SockJS from 'sockjs-client'
import usersData from './UsersData'

/* Import components. */
// import Dashboard from './Dashboard.vue'
// import SettingsAdvanced from './SettingsAdvanced.vue'

/* Initialize libraries. */
const ethers = require('ethers')

/* Initialize constants. */
const MINADO_NETWORK_URL = 'http://asia.minado.network'

export default {
    // components: {
    //     Dashboard,
    //     SettingsAdvanced
    // },
    props: {
      caption: {
        type: String,
        default: 'User id'
      },
    },
    data: () => ({
        ws: null, // WebSocket

        // selected: [], // Must be an array reference!
        // show: true,
        items: (id) => {
          const user = usersData.find( user => user.id.toString() === id)
          const userDetails = user ? Object.entries(user) : [['id', 'Not found']]
          return userDetails.map(([key, value]) => {return {key: key, value: value}})
        },
        fields: [
          {key: 'key'},
          {key: 'value'},
        ],
    }),
    methods: {
        init () {
            /* Initialize primary web socket connection. */
            // this.ws = new WebSocket(MINADO_NETWORK_URL)

            this.ws = new SockJS(MINADO_NETWORK_URL)

            console.log('this.ws', this.ws)

            this.ws.onopen = () => {
                console.log('open')

                /* Build package. */
                const pkg = {
                    client: 'web',
                    version: 'latest'
                }

                this.ws.send(JSON.stringify(pkg))
            }

            this.ws.onmessage = (e) => {
                console.log('Incoming message:', e.data)
                // this.ws.close()
            }

            this.ws.onclose = () => {
                console.log('Connection closed.')
            }
        },
        startMining () {
            console.log('start mining')

            const pkg = {
                action: 'start_mining'
            }

            this.ws.send(JSON.stringify(pkg))

            console.log(pkg, this.ws)
        },
        stopMining () {
            console.log('stop mining')

            const pkg = {
                action: 'stop_mining'
            }

            this.ws.send(JSON.stringify(pkg))
        },
        cudaTest () {
            console.log('cuda test')

            const pkg = {
                action: 'cuda_test'
            }

            this.ws.send(JSON.stringify(pkg))
        },
        goBack() {
            this.$router.go(-1)
        }
    },
    mounted: async function () {
        /* Initialize. */
        this.init()
    }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
