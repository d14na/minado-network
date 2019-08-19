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
                                <b-btn block href="#" v-b-toggle.accordion1 variant="info">Dashboard</b-btn>
                            </b-card-header>

                            <b-collapse id="accordion1" visible accordion="my-accordion" role="tabpanel">
                                <b-card-body>
                                    <Dashboard />
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
                                        <SettingsAdvanced />
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
import usersData from './UsersData'

/* Import components. */
import Dashboard from './Dashboard.vue'
import SettingsAdvanced from './SettingsAdvanced.vue'

export default {
    components: {
        Dashboard,
        SettingsAdvanced
    },
    props: {
      caption: {
        type: String,
        default: 'User id'
      },
    },
    data: () => ({
        text: 'what kind of text do you want here?',

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
            console.log('Initializing Foremen')
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
    mounted: function () {
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
