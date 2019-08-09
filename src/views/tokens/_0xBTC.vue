<template>
    <div class="animated fadeIn">
        <b-row>
            <b-col cols="12" md="6">
                <b-alert show variant="info">
                    <h4 class="alert-heading">Well done!</h4>
                    <p>
                        Aww yeah, you successfully read this important alert message.
                        This example text is going to run a bit longer so that you can see
                        how spacing within an alert works with this kind of content.
                    </p>
                    <hr>
                    <p class="mb-0">
                        Whenever you need to, be sure to use margin utilities to keep things nice and tidy.
                    </p>
                </b-alert>
            </b-col>

            <b-col sm="6" lg="3">
                <b-card no-body class="bg-primary">
                    <b-card-body class="pb-0">
                        <b-dropdown class="float-right" variant="transparent p-0" right>
                            <template slot="button-content">
                                <i class="icon-settings"></i>
                            </template>
                            <b-dropdown-item>Last 24 hours</b-dropdown-item>
                            <b-dropdown-item>Last 7 days</b-dropdown-item>
                            <b-dropdown-item>Last 30 days</b-dropdown-item>
                        </b-dropdown>
                        <h4 class="mb-0">{{zpiLastDisplay}} <small>{{zpiChangeDisplay}}</small></h4>
                        <p>USD Price</p>
                    </b-card-body>
                    <card-bar-chart-example chartId="card-chart-04" class="chart-wrapper px-3" style="height:70px;" height="70"/>
                </b-card>
            </b-col>

            <b-col sm="6" lg="3">
                <b-card no-body class="bg-warning">
                    <b-card-body class="pb-0">
                        <b-dropdown class="float-right" variant="transparent p-0" right>
                            <template slot="button-content">
                                <i class="icon-settings"></i>
                            </template>
                            <b-dropdown-item>Increase STAEK</b-dropdown-item>
                            <b-dropdown-item>Decrease STAEK</b-dropdown-item>
                            <b-dropdown-item disabled>Zero₵a¢he IN</b-dropdown-item>
                            <b-dropdown-item disabled>Zero₵a¢he OUT</b-dropdown-item>
                        </b-dropdown>
                        <h4 class="mb-0">10k <small>(8.92%)</small></h4>
                        <p>ZeroGold @STAEK</p>
                    </b-card-body>
                    <card-line3-chart-example chartId="card-chart-03" class="chart-wrapper" style="height:70px;" height="70"/>
                </b-card>
            </b-col>
        </b-row><!--/.row-->

        <b-row>
            <b-col cols="12" sm="6" lg="3">
                <b-card :no-body="true" footer-class="px-3 py-2">
                    <b-card-body class="p-3 clearfix">
                        <i class="fa fa-cogs bg-primary p-3 font-2xl mr-3 float-left"></i>
                        <div class="h5 text-primary mb-0 mt-2">$1.999,50</div>
                        <div class="text-muted text-uppercase font-weight-bold font-xs">Income</div>
                    </b-card-body>
                    <div slot="footer">
                        <b-link class="font-weight-bold font-xs btn-block text-muted" href="#">View More <i class="fa fa-angle-right float-right font-lg"></i></b-link>
                    </div>
                </b-card>
            </b-col>

            <b-col cols="12" sm="6" lg="3">
                <b-card :no-body="true" footer-class="px-3 py-2">
                    <b-card-body class="p-3 clearfix">
                        <i class="fa fa-laptop bg-info p-3 font-2xl mr-3 float-left"></i>
                        <div class="h5 text-info mb-0 mt-2">$1.999,50</div>
                        <div class="text-muted text-uppercase font-weight-bold font-xs">Income</div>
                    </b-card-body>
                    <div slot="footer">
                        <b-link class="font-weight-bold font-xs btn-block text-muted" href="#">View More <i class="fa fa-angle-right float-right font-lg"></i></b-link>
                    </div>
                </b-card>
            </b-col>
            <b-col cols="12" sm="6" lg="3">
                <b-card :no-body="true" footer-class="px-3 py-2">
                    <b-card-body class="p-3 clearfix">
                        <i class="fa fa-moon-o bg-warning p-3 font-2xl mr-3 float-left"></i>
                        <div class="h5 text-warning mb-0 mt-2">$1.999,50</div>
                        <div class="text-muted text-uppercase font-weight-bold font-xs">Income</div>
                    </b-card-body>
                    <div slot="footer">
                        <b-link class="font-weight-bold font-xs btn-block text-muted" href="#">View More <i class="fa fa-angle-right float-right font-lg"></i></b-link>
                    </div>
                </b-card>
            </b-col>
            <b-col cols="12" sm="6" lg="3">
                <b-card :no-body="true" footer-class="px-3 py-2">
                    <b-card-body class="p-3 clearfix">
                        <i class="fa fa-bell bg-danger p-3 font-2xl mr-3 float-left"></i>
                        <div class="h5 text-danger mb-0 mt-2">$1.999,50</div>
                        <div class="text-muted text-uppercase font-weight-bold font-xs">Income</div>
                    </b-card-body>
                    <div slot="footer">
                        <b-link class="font-weight-bold font-xs btn-block text-muted" href="#">View More <i class="fa fa-angle-right float-right font-lg"></i></b-link>
                    </div>
                </b-card>
            </b-col>
        </b-row><!--/.row-->

        <b-row>
            <!-- Social (Facebook & Twitter) -->
            <b-col>
                <b-row>
                    <b-col md="6" sm="12">
                        <div class="brand-card">
                            <div class="brand-card-header bg-facebook">
                                <i class="fa fa-facebook"></i>
                                <div class="chart-wrapper">
                                    <social-box-chart-example :data="[65, 59, 84, 84, 51, 55, 40]" />
                                </div>
                            </div>

                            <div class="brand-card-body">
                                <div>
                                    <div class="text-value">89k</div>
                                    <div class="text-uppercase text-muted small">friends</div>
                                </div>
                                <div>
                                    <div class="text-value">459</div>
                                    <div class="text-uppercase text-muted small">feeds</div>
                                </div>
                            </div>
                        </div>
                    </b-col>
                    <b-col md="6" sm="12">
                        <div class="brand-card">
                            <div class="brand-card-header bg-twitter">
                                <i class="fa fa-twitter"></i>
                                <div class="chart-wrapper">
                                    <social-box-chart-example :data="[1, 13, 9, 17, 34, 41, 38]" />
                                </div>
                            </div>

                            <div class="brand-card-body">
                                <div>
                                    <div class="text-value">973k</div>
                                    <div class="text-uppercase text-muted small">followers</div>
                                </div>
                                <div>
                                    <div class="text-value">1.792</div>
                                    <div class="text-uppercase text-muted small">tweets</div>
                                </div>
                            </div>
                        </div>
                    </b-col>
                </b-row>

                <b-card>
                    <div slot="header">
                        Tabs with icons
                    </div>
                    <b-tabs>
                        <b-tab active>
                            <template slot="title">
                                <i class="icon-calculator"></i>
                            </template>
                            <br> 1. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                            officia deserunt mollit anim id est laborum.
                        </b-tab>
                        <b-tab>
                            <template slot="title">
                                <i class="icon-basket-loaded"></i>
                            </template>
                            <br>2. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                            officia deserunt mollit anim id est laborum.
                        </b-tab>
                        <b-tab>
                            <template slot="title">
                                <i class="icon-pie-chart"></i>
                            </template>
                            <br>3. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                            officia deserunt mollit anim id est laborum.
                        </b-tab>
                    </b-tabs>
                </b-card>
            </b-col><!--/.col-->

            <b-col xs="12" lg="6">
                <b-card>
                  <div slot="header">
                    Tabs vertical
                  </div>
                  <b-card no-body>
                  <b-tabs card pills vertical nav-wrapper-class="w-40" v-model="tabIndex[1]">
                    <b-tab active>
                      <template slot="title">
                        <i class="icon-calculator"></i> {{tabs[0]}}
                      </template>
                      1. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                      et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                      aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                      dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </b-tab>
                    <b-tab>
                      <template slot="title">
                        <i class="icon-basket-loaded"></i> {{tabs[1]}}
                      </template>
                      2. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                      et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                      aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                      dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </b-tab>
                    <b-tab>
                      <template slot="title">
                        <i class="icon-pie-chart"></i> {{tabs[2]}}
                      </template>
                      3. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                      et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                      aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                      dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </b-tab>
                  </b-tabs>
                  </b-card>
                </b-card>
            </b-col>
      </b-col>
  </b-row>
  </div>
</template>

<script>
import { ethers } from 'ethers'
import numeral from 'numeral'

// import SocialBoxChartExample from '../dashboard/SocialBoxChartExample'

import CardLine1ChartExample from '../dashboard/CardLine1ChartExample'
import CardLine2ChartExample from '../dashboard/CardLine2ChartExample'
import CardLine3ChartExample from '../dashboard/CardLine3ChartExample'
import CardBarChartExample from '../dashboard/CardBarChartExample'
import MainChartExample from '../dashboard/MainChartExample'
import SocialBoxChartExample from '../dashboard/SocialBoxChartExample'
import CalloutChartExample from '../dashboard/CalloutChartExample'
import { Callout } from '@coreui/vue'

export default {
    name: 'widgets',
    components: {
        // SocialBoxChartExample

        Callout,
        CardLine1ChartExample,
        CardLine2ChartExample,
        CardLine3ChartExample,
        CardBarChartExample,
        MainChartExample,
        SocialBoxChartExample,
        CalloutChartExample
    },
    data () {
        return {
            msg: 'Widgets',
            tabIndex: [0, 0],
            tabs: [
                'Calculator',
                'Shopping cart',
                'Charts'
            ],

            zpiLast: ethers.utils.bigNumberify(0),
            zpiChange: 0
        }
    },
    computed: {
        zpiLastDisplay () {
            let formatted = this.zpiLast

            /* Calculate micro-cent value. */
            formatted = this.zpiLast.div(1000000000000000)

            /* Convert to (floating point) number. */
            formatted = formatted.toNumber() * 1.0

            /* Format to micro-cent. */
            formatted = numeral(formatted / 1000.0).format('$0,0.000')

            return formatted
        },
        zpiChangeDisplay () {
            return '(0.0%)'
        }
    },
    methods: {
        async getPrice () {
            const ethers = require('ethers')

            /* Initialize ABI. */
            const abi = require('../../../contracts/ZeroPriceIndex')

            /* Initialize blockchain provider. */
            const provider = ethers.getDefaultProvider()

            /* Initialize contract address. */
            let contractAddress = '0xc3b09ceED594cc0a09ce082C022799C605AE20E5'

            /* Initialize contract. */
            let contract = new ethers.Contract(contractAddress, abi, provider)

            let zpiLast = await contract.tradePriceOf('0xBTC')

            // console.log('ZPI LAST for 0xBTC', zpiLast.toString())

            /* Update instance. */
            this.zpiLast = zpiLast
        },
        getListing () {
            /* Example in Node.js ES6 using request-promise */

            const rp = require('request-promise')

            const requestOptions = {
                method: 'GET',
                uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
            qs: {
                // 'symbol': 'ETH'
                'id': 1027
                // 'start': '1',
                // 'limit': '5000',
                // 'convert': 'USD'
            },
            headers: {
                'X-CMC_PRO_API_KEY': 'b54bcf4d-1bca-4e8e-9a24-22ff2c3d462c'
            },
                json: true,
                gzip: true
            }

            rp(requestOptions).then(response => {
                console.log('API call response:', response)
            }).catch((err) => {
                console.log('API call error:', err.message)
            })
        },
        getCoinList () {
            /* Example in Node.js ES6 using request-promise */

            const rp = require('request-promise')

            const requestOptions = {
                method: 'GET',
                uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/map',
            qs: {
                'symbol': 'BTC,USDT,BNB'
            },
            headers: {
                'X-CMC_PRO_API_KEY': 'b54bcf4d-1bca-4e8e-9a24-22ff2c3d462c'
            },
                json: true,
                gzip: true
            }

            rp(requestOptions).then(response => {
                console.log('API call response:', response)
            }).catch((err) => {
                console.log('API call error:', err.message)
            })
        }
    },
    mounted: async function () {
        this.getPrice()
        // this.getListing()

        // this.getCoinList()

        // this.testListings()
    }
}
</script>
