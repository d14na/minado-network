<template>
    <div class="animated fadeIn">
        <b-row>
            <b-col cols="12" md="6">
                <b-alert show variant="dark">
                    <h4 class="alert-heading">0xBitcoin Pure-mined ERC20 Currency</h4>
                    <p>
                        0xBitcoin is the implementation of Bitcoin in Solidity and is the first decentralized ERC20 token for Ethereum.
                        0xBitcoin Token combines the scarcity and fair distribution model of Bitcoin with the speed and power of the Ethereum ecosystem.
                        Thus, it is named 0xBitcoin or 0xBTC where 0x represents the Ethereum Network and ecosystem.
                    </p>

                    <hr>

                    <p class="mb-0">
                        <b-dropdown right split text="Documents" variant="dark">
                            <b-dropdown-item>White Paper</b-dropdown-item>
                        </b-dropdown>

                        <b-dropdown class="ml-3" right split text="Links" variant="dark">
                            <b-dropdown-item>Website</b-dropdown-item>
                            <b-dropdown-item>Reddit</b-dropdown-item>
                            <b-dropdown-item>Github</b-dropdown-item>
                        </b-dropdown>

                        <b-dropdown class="ml-3" right split text="Contacts" variant="dark">
                            <b-dropdown-item>Discord</b-dropdown-item>
                            <b-dropdown-item>Telegram</b-dropdown-item>
                            <b-dropdown-item>Email</b-dropdown-item>
                        </b-dropdown>
                    </p>
                </b-alert>
            </b-col>

            <b-col sm="6" lg="3">
                <b-card no-body class="bg-success">
                    <b-card-body class="pb-0">
                        <h4 class="mb-0">{{zpiLastDisplay}} <small>({{zpiChangeDisplay}})</small></h4>

                        <p>USD PRICE <small><small>(updated 6 hrs ago)</small></small></p>
                    </b-card-body>

                    <card-bar-chart-example chartId="card-chart-04" class="chart-wrapper px-3" style="height:70px;" height="70"/>
                </b-card>
            </b-col>

            <b-col sm="6" lg="3">
                <b-card no-body class="bg-primary">
                    <b-card-body class="pb-0">
                        <h4 class="mb-0">{{hashRate}} <small>({{hashRateChange}})</small></h4>

                        <p>HASH RATE <small><small>(updated 3 days ago)</small></small></p>
                    </b-card-body>

                    <card-line3-chart-example chartId="card-chart-03" class="chart-wrapper" style="height:70px;" height="70"/>
                </b-card>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import { ethers } from 'ethers'
import numeral from 'numeral'

import CardLine3ChartExample from '../dashboard/CardLine3ChartExample'
import CardBarChartExample from '../dashboard/CardBarChartExample'

export default {
    components: {
        CardLine3ChartExample,
        CardBarChartExample
    },
    data: () => ({
        zpiLast: ethers.utils.bigNumberify(0),
        zpiChange: 0
    }),
    computed: {
        hashRate () {
            // Bitcoin's Divisor is ~7158278 (based on 2^224 max w/ 10min blocks)
            // 0xBitcoin Token's Divisor is ~4660 (based on 2^234 max w/ 15min blocks)
            // Token Divisors are ~6990 (based on 2^234 max w/ 10min block)

            const INT_MAX = ethers.utils.bigNumberify('0x010000000000000000000000000000000000000000000000000000000000000000') // 2^256
            const TOKEN_MAX = ethers.utils.bigNumberify('0x040000000000000000000000000000000000000000000000000000000000') // 2^234
            const SECONDS_PER_BLOCK = 900
            // const SECONDS_PER_BLOCK = 600

            const divisor = INT_MAX.div(TOKEN_MAX).div(SECONDS_PER_BLOCK)

            // TEMP FOR 0XBITCOIN
            const difficulty = ethers.utils.bigNumberify(1266800882)

            const MH_DECIMAL_DIVISOR = ethers.utils.bigNumberify(10000)
            const GH_DECIMAL_DIVISOR = ethers.utils.bigNumberify(10000000)
            const TH_DECIMAL_DIVISOR = ethers.utils.bigNumberify(10000000000)

            /* Calculate initial hash rate (based on MegaHashes/sec). */
            let hashRate = difficulty.mul(divisor).div(MH_DECIMAL_DIVISOR)

            /* Parse number of digits for display. */
            if (hashRate.gt(100000000)) {
                hashRate = difficulty.mul(divisor).div(TH_DECIMAL_DIVISOR)
                return `${hashRate / 100.0} TH/s`
            } else if (hashRate.gt(100000)) {
                hashRate = difficulty.mul(divisor).div(GH_DECIMAL_DIVISOR)
                return `${hashRate / 100.0} GH/s`
            } else {
                return `${hashRate / 100.0} MH/s`
            }
        },
        hashRateChange () {
            /* Generate random integer. */
            const _getRandomInt = function (_max) {
                return Math.floor(Math.random() * Math.floor(_max))
            }

            return `+${_getRandomInt(10)}.${_getRandomInt(10)}${_getRandomInt(10)}%`
        },
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
            /* Generate random integer. */
            const _getRandomInt = function (_max) {
                return Math.floor(Math.random() * Math.floor(_max))
            }

            return `+${_getRandomInt(10)}.${_getRandomInt(10)}${_getRandomInt(10)}%`
        }
    },
    methods: {
        init () {
            /* Get current price. */
            this.getPrice()
        },
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
