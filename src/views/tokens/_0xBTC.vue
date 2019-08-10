<template>
    <div class="animated fadeIn">
        <Spotlight />
        <Stats />

        <b-row>
            <b-col>
                <Social />
            </b-col>

            <b-col xs="12" lg="6">
                <Toolbox />
            </b-col>
        <!-- </b-col> -->
        </b-row>
    </div>
</template>

<script>
import { ethers } from 'ethers'
import numeral from 'numeral'

import CardLine1ChartExample from '../dashboard/CardLine1ChartExample'
import CardLine2ChartExample from '../dashboard/CardLine2ChartExample'
import CardLine3ChartExample from '../dashboard/CardLine3ChartExample'
import CardBarChartExample from '../dashboard/CardBarChartExample'
import MainChartExample from '../dashboard/MainChartExample'
import CalloutChartExample from '../dashboard/CalloutChartExample'
import { Callout } from '@coreui/vue'

/* Import components. */
import Social from './Social.vue'
import Spotlight from './Spotlight.vue'
import Stats from './Stats.vue'
import Toolbox from './Toolbox.vue'

export default {
    components: {
        Social,
        Spotlight,
        Stats,
        Toolbox,

        Callout,
        CardLine1ChartExample,
        CardLine2ChartExample,
        CardLine3ChartExample,
        CardBarChartExample,
        MainChartExample,
        // SocialBoxChartExample,
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
            ]
        }
    },
    computed: {
        //
    },
    methods: {
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
        // this.getListing()
        // this.getCoinList()
        // this.testListings()
    }
}
</script>
