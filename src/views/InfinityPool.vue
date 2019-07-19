<template>
    <div class="animated fadeIn">
        <b-row>
            <b-col md="3" sm="6">
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
            <b-col md="3" sm="6">
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
            <b-col md="3" sm="6">
                <div class="brand-card">
                    <div class="brand-card-header bg-linkedin">
                        <i class="fa fa-linkedin"></i>
                        <div class="chart-wrapper">
                            <social-box-chart-example :data="[78, 81, 80, 45, 34, 12, 40]" />
                        </div>
                    </div>
                    <div class="brand-card-body">
                        <div>
                            <div class="text-value">500+</div>
                            <div class="text-uppercase text-muted small">contacts</div>
                        </div>
                        <div>
                            <div class="text-value">292</div>
                            <div class="text-uppercase text-muted small">feeds</div>
                        </div>
                    </div>
                </div>
            </b-col>
            <b-col md="3" sm="6">
                <div class="brand-card">
                    <div class="brand-card-header bg-google-plus">
                        <i class="fa fa-google-plus"></i>
                        <div class="chart-wrapper">
                            <social-box-chart-example :data="[35, 23, 56, 22, 97, 23, 64]" />
                        </div>
                    </div>
                    <div class="brand-card-body">
                        <div>
                            <div class="text-value">894</div>
                            <div class="text-uppercase text-muted small">followers</div>
                        </div>
                        <div>
                            <div class="text-value">92</div>
                            <div class="text-uppercase text-muted small">circles</div>
                        </div>
                    </div>
                </div>
            </b-col>
        </b-row><!--/.row-->

        <b-card-group class="mb-4">
            <b-card>
                <div class="h1 text-muted text-right mb-4">
                    <i class="icon-people"></i>
                </div>
                <div class="h4 mb-0">{{difficulty}}</div>
                <small class="text-muted text-uppercase font-weight-bold">Difficulty</small>
                <b-progress height={} class="progress-xs mt-3 mb-0" variant="info" :value="25"/>
            </b-card>
            <b-card>
                <div class="h1 text-muted text-right mb-4">
                    <i class="icon-user-follow"></i>
                </div>
                <div class="h4 mb-0">385</div>
                <small class="text-muted text-uppercase font-weight-bold">New Clients</small>
                <b-progress height={} class="progress-xs mt-3 mb-0" variant="success" :value="25"/>
            </b-card>
            <b-card>
                <div class="h1 text-muted text-right mb-4">
                    <i class="icon-basket-loaded"></i>
                </div>
                <div class="h4 mb-0">1238</div>
                <small class="text-muted text-uppercase font-weight-bold">Products sold</small>
                <b-progress height={} class="progress-xs mt-3 mb-0" variant="warning" :value="25"/>
            </b-card>
            <b-card>
                <div class="h1 text-muted text-right mb-4">
                    <i class="icon-pie-chart"></i>
                </div>
                <div class="h4 mb-0">28%</div>
                <small class="text-muted text-uppercase font-weight-bold">Returning Visitors</small>
                <b-progress height={} class="progress-xs mt-3 mb-0" :value="25"/>
            </b-card>
            <b-card>
                <div class="h1 text-muted text-right mb-4">
                    <i class="icon-speedometer"></i>
                </div>
                <div class="h4 mb-0">5:34:11</div>
                <small class="text-muted text-uppercase font-weight-bold">Avg. Time</small>
                <b-progress height={} class="progress-xs mt-3 mb-0" variant="danger" :value="25"/>
            </b-card>
        </b-card-group>

        <b-row>
            <b-col sm="6" md="2">
                <b-card class="text-white bg-info">
                    <div class="h1 text-muted text-right mb-4">
                        <i class="icon-people"></i>
                    </div>
                    <div class="h4 mb-0">87.500</div>
                    <small class="text-muted text-uppercase font-weight-bold">Visitors</small>
                    <b-progress height={} class="progress-white progress-xs mt-3" :value="25"/>
                </b-card>
            </b-col>
            <b-col sm="6" md="2">
                <b-card class="text-white bg-success">
                    <div class="h1 text-muted text-right mb-4">
                        <i class="icon-user-follow"></i>
                    </div>
                    <div class="h4 mb-0">385</div>
                    <small class="text-muted text-uppercase font-weight-bold">New Clients</small>
                    <b-progress height={} class="progress-white progress-xs mt-3" :value="25"/>
                </b-card>
            </b-col>
            <b-col sm="6" md="2">
                <b-card class="text-white bg-warning">
                    <div class="h1 text-muted text-right mb-4">
                        <i class="icon-basket-loaded"></i>
                    </div>
                    <div class="h4 mb-0">1238</div>
                    <small class="text-muted text-uppercase font-weight-bold">Products sold</small>
                    <b-progress height={} class="progress-white progress-xs mt-3" :value="25"/>
                </b-card>
            </b-col>
            <b-col sm="6" md="2">
                <b-card class="text-white bg-primary">
                    <div class="h1 text-muted text-right mb-4">
                        <i class="icon-pie-chart"></i>
                    </div>
                    <div class="h4 mb-0">28%</div>
                    <small class="text-muted text-uppercase font-weight-bold">Returning Visitors</small>
                    <b-progress height={} class="progress-white progress-xs mt-3" :value="25"/>
                </b-card>
            </b-col>
            <b-col sm="6" md="2">
                <b-card class="text-white bg-danger">
                    <div class="h1 text-muted text-right mb-4">
                        <i class="icon-speedometer"></i>
                    </div>
                    <div class="h4 mb-0">5:34:11</div>
                    <small class="text-muted text-uppercase font-weight-bold">Avg. Time</small>
                    <b-progress height={} class="progress-white progress-xs mt-3" :value="25"/>
                </b-card>
            </b-col>
            <b-col sm="6" md="2">
                <b-card class="text-white bg-info">
                    <div class="h1 text-muted text-right mb-4">
                        <i class="icon-speech"></i>
                    </div>
                    <div class="h4 mb-0">972</div>
                    <small class="text-muted text-uppercase font-weight-bold">Comments</small>
                    <b-progress height={} class="progress-white progress-xs mt-3" :value="25"/>
                </b-card>
            </b-col>
        </b-row><!--/.row-->

        <b-card-group columns class="card-columns">
            <b-card header="Line Chart">
                <div class="chart-wrapper">
                    <line-example chartId="chart-line-01"/>
                </div>
            </b-card>
            <b-card header="Bar Chart">
                <div class="chart-wrapper">
                    <bar-example chartId="chart-bar-01"/>
                </div>
            </b-card>
            <b-card header="Doughnut Chart">
                <div class="chart-wrapper">
                    <doughnut-example chartId="chart-doughnut-01"/>
                </div>
            </b-card>
            <b-card header="Radar Chart">
                <div class="chart-wrapper">
                    <radar-example chartId="chart-radar-01"/>
                </div>
            </b-card>
            <b-card header="Pie Chart">
                <div class="chart-wrapper">
                    <pie-example chartId="chart-pie-01"/>
                </div>
            </b-card>
            <b-card header="Polar Area Chart">
                <div class="chart-wrapper">
                    <polar-area-example chartId="chart-polar-area-01"/>
                </div>
            </b-card>
        </b-card-group>
    </div>
</template>

<script>
import BarExample from './charts/BarExample'
import LineExample from './charts/LineExample'
import DoughnutExample from './charts/DoughnutExample'
import RadarExample from './charts/RadarExample'
import PieExample from './charts/PieExample'
import PolarAreaExample from './charts/PolarAreaExample'

import SocialBoxChartExample from './dashboard/SocialBoxChartExample'

/* Initialize module. */
const ethers = require('ethers')

export default {
    name: 'infinitypool',
    data () {
        return {
            difficulty: 0,
            selected: [], // Must be an array reference!
            show: true
        }
    },
    components: {
        BarExample,
        LineExample,
        DoughnutExample,
        RadarExample,
        PieExample,
        PolarAreaExample,
        SocialBoxChartExample
    },
    methods: {
        click () {
            // do nothing
        },
        async loadStats () {
            // The Contract interface
            let abi = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"tokens","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"lastRewardEthBlockNumber","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getMiningDifficulty","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"nonce","type":"uint256"},{"name":"challenge_digest","type":"bytes32"}],"name":"mint","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"tokens","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"rewardEra","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getMiningTarget","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getMiningReward","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getChallengeNumber","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"maxSupplyForEra","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"tokensMinted","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"lastRewardTo","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"tokenOwner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"acceptOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"nonce","type":"uint256"},{"name":"challenge_digest","type":"bytes32"},{"name":"challenge_number","type":"bytes32"},{"name":"testTarget","type":"uint256"}],"name":"checkMintSolution","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"epochCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_MAXIMUM_TARGET","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"miningTarget","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"challengeNumber","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"nonce","type":"uint256"},{"name":"challenge_digest","type":"bytes32"},{"name":"challenge_number","type":"bytes32"}],"name":"getMintDigest","outputs":[{"name":"digesttest","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"tokens","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"_BLOCKS_PER_READJUSTMENT","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"lastRewardAmount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"tokens","type":"uint256"},{"name":"data","type":"bytes"}],"name":"approveAndCall","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"latestDifficultyPeriodStarted","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"newOwner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"tokenAddress","type":"address"},{"name":"tokens","type":"uint256"}],"name":"transferAnyERC20Token","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"_MINIMUM_TARGET","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"tokenOwner","type":"address"},{"name":"spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":false,"name":"reward_amount","type":"uint256"},{"indexed":false,"name":"epochCount","type":"uint256"},{"indexed":false,"name":"newChallengeNumber","type":"bytes32"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"tokens","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"tokenOwner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"tokens","type":"uint256"}],"name":"Approval","type":"event"}]

            // Connect to the network
            const provider = ethers.getDefaultProvider()

            // The address from the above deployment example
            const contractAddress = '0xB6eD7644C69416d67B522e20bC294A9a9B405B31'

            // We connect to the Contract using a Provider, so we will only
            // have read-only access to the Contract
            const contract = new ethers.Contract(contractAddress, abi, provider)

            console.log(contract)
            let difficulty = await contract.getMiningDifficulty()
            this.difficulty = ethers.utils.commify(difficulty.toString())
            console.log('Mining Difficulty', this.difficulty)
        }
    },
    mounted: async function () {
        console.log('Load 0xBitcoin blockchain stats')

        this.loadStats()
        // /* Set stats url */
        // const statsUrl = 'http://localhost:3000/stats'
        //
        // /* Fetch data. */
        // const response = await fetch(statsUrl)
        //
        // /* Parse JSON. */
        // const stats = await response.json()
        //
        // // console.log('STATS', stats)
        //
        // /* Set challenge number. */
        // if (stats.challengeNumber) {
        //     this.challengeNumber = stats.challengeNumber
        // }
    }
}
</script>
