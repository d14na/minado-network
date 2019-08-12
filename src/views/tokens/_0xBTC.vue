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

        <Explorer />
    </div>
</template>

<script>
/* Import modules. */
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
import Explorer from './Explorer.vue'
import Social from './Social.vue'
import Spotlight from './Spotlight.vue'
import Stats from './Stats.vue'
import Toolbox from './Toolbox.vue'

export default {
    components: {
        Explorer,
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
        async getContractAddress () {
            /* Initialize request promise. */
            const rp = require('request-promise')

            /* Initialize request options. */
            const requestOptions = {
                method: 'GET',
                uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
            }

            /* Make request. */
            const response = await rp(requestOptions)
                .catch((err) => {
                    console.log('API call error:', err.message)
                })

            console.log('API call response:', response)
        },
    },
    mounted: async function () {
        //
    }
}
</script>
