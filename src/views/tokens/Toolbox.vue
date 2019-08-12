<template>
    <div class="animated fadeIn">
        <b-card>
            <div slot="header">
                <strong>Toolbox</strong>
            </div>

            <b-tabs>
                <b-tab active>
                    <template slot="title">
                        <i class="icon-calculator"></i>
                    </template>

                    <b-card>
                        <div slot="header">
                            <strong>Profit Calculator</strong>
                        </div>

                        <b-row>
                            <b-col sm="12">
                                <b-form-group>
                                    <label for="name">Name</label>
                                    <b-form-input type="text" id="name" placeholder="Enter your name"></b-form-input>
                                </b-form-group>
                            </b-col>
                        </b-row>

                        <b-row>
                            <b-col sm="12">
                                <b-form-group>
                                    <label for="ccnumber">Credit Card Number</label>
                                    <b-form-input type="text" id="ccnumber" placeholder="0000 0000 0000 0000"></b-form-input>
                                </b-form-group>
                            </b-col>
                        </b-row>

                        <b-row>
                            <b-col sm="4">
                                <b-form-group >
                                    <label for="month1">Month</label>
                                    <b-form-select id="month1"
                                        :plain="true"
                                        :options="[1,2,3,4,5,6,7,8,9,10,11,12]">
                                    </b-form-select>
                                </b-form-group>
                            </b-col>

                            <b-col sm="4">
                                <b-form-group>
                                    <label for="year1">Year</label>
                                    <b-form-select id="year1"
                                        :plain="true"
                                        :options="[2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025]">
                                    </b-form-select>
                                </b-form-group>
                            </b-col>

                            <b-col sm="4">
                                <b-form-group>
                                    <label for="cvv">CVV/CVC</label>
                                    <b-form-input type="text" id="cvv" placeholder="123"></b-form-input>
                                </b-form-group>
                            </b-col>
                        </b-row>
                    </b-card>
                </b-tab>

                <b-tab>
                    <template slot="title">
                        <i class="icon-basket-loaded"></i>
                    </template>

                    <ol>
                        <li>
                            Current Difficulty: <strong>{{difficulty}}</strong>
                        </li>
                        <li>
                            Rewards Until Re-adjustment - 117 (~1.8 days)
                        </li>
                        <li>
                            Current Average Reward Time - 22.19 minutes
                        </li>
                        <li>
                            Tokens Minted - 4,806,900 - 0xBTC
                        </li>
                        <li>
                            Current Mining Reward - 50 0xBTC
                        </li>
                        <li>
                            Total Supply - 20,999,983.69 0xBTC
                        </li>
                        <li>
                            Token Holders - 5,572 holders
                        </li>
                    </ol>
                </b-tab>
            </b-tabs>
        </b-card>
    </div>
</template>

<script>
/* Import modules. */
import { ethers } from 'ethers'
import numeral from 'numeral'

export default {
    components: {
        //
    },
    data () {
        return {
            difficulty: 0,
        }
    },
    methods: {
        init () {
            /* Load stats. */
            this.loadStats()
        },
        async loadStats () {
            /* Initialize contract ABI. */
            const abi = require('../../../contracts/_0xBitcoinToken.json')

            /* Initialize blockchain provider. */
            const provider = ethers.getDefaultProvider()

            /* Initialize (token) contract address. */
            const contractAddress = '0xB6eD7644C69416d67B522e20bC294A9a9B405B31'

            /* Initialize contract. */
            const contract = new ethers.Contract(contractAddress, abi, provider)

            /* Retrieve difficulty. */
            let difficulty = await contract.getMiningDifficulty()

            /* Set (formatted) difficulty. */
            this.difficulty = ethers.utils.commify(difficulty.toString())

            console.log('Mining Difficulty', this.difficulty)
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
