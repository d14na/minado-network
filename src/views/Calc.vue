<template>
    <div class="animated fadeIn">
        <b-row>
            <b-col md="6">
                <h2>
                    Calculators
                </h2>

                <b-card>
                    <div slot="header">
                        <strong>0xBitcoin</strong> Calculator
                    </div>

                    <b-form-group
                        label="Current Difficulty"
                        label-for="difficulty"
                        :label-cols="3"
                        :horizontal="true">
                        <b-form-input
                            plaintext
                            id="difficulty"
                            type="text"
                            :value="difficulty" />
                    </b-form-group>

                    <b-form-group>
                        <b-input-group>
                            <b-input-group-prepend>
                                <b-input-group-text><i class="fa fa-user"></i></b-input-group-text>
                            </b-input-group-prepend>

                            <b-form-input type="text" placeholder="Username"></b-form-input>
                        </b-input-group>
                    </b-form-group>

                    <b-form-group>
                        <b-input-group>
                            <b-form-input type="email" placeholder="Email" autocomplete="email"></b-form-input>
                            <b-input-group-append><b-input-group-text><i class="fa fa-envelope-o"></i></b-input-group-text></b-input-group-append>
                        </b-input-group>
                    </b-form-group>

                    <b-form-group>
                        <b-input-group>
                            <b-input-group-prepend>
                                <b-input-group-text><i class="fa fa-euro"></i></b-input-group-text>
                            </b-input-group-prepend>
                            <b-form-input type="text" placeholder="ex. $1.000.000"></b-form-input>
                            <b-input-group-append><b-input-group-text>.00</b-input-group-text></b-input-group-append>
                        </b-input-group>
                    </b-form-group>
                    <div slot="footer">
                        <b-button type="submit" size="sm" variant="success"><i class="fa fa-dot-circle-o"></i> Submit</b-button>
                        <b-button type="reset" size="sm" variant="danger"><i class="fa fa-ban"></i> Reset</b-button>
                    </div>
                </b-card>

                <b-card>
                    <div slot="header">
                        <strong>ZeroGold</strong> Calculator
                    </div>

                    <b-form-group>
                        <b-input-group>
                            <b-input-group-prepend>
                                <b-input-group-text><i class="fa fa-user"></i></b-input-group-text>
                            </b-input-group-prepend>

                            <b-form-input type="text" placeholder="Username"></b-form-input>
                        </b-input-group>
                    </b-form-group>

                    <b-form-group>
                        <b-input-group>
                            <b-form-input type="email" placeholder="Email" autocomplete="email"></b-form-input>
                            <b-input-group-append><b-input-group-text><i class="fa fa-envelope-o"></i></b-input-group-text></b-input-group-append>
                        </b-input-group>
                    </b-form-group>

                    <b-form-group>
                        <b-input-group>
                            <b-input-group-prepend>
                                <b-input-group-text><i class="fa fa-euro"></i></b-input-group-text>
                            </b-input-group-prepend>
                            <b-form-input type="text" placeholder="ex. $1.000.000"></b-form-input>
                            <b-input-group-append><b-input-group-text>.00</b-input-group-text></b-input-group-append>
                        </b-input-group>
                    </b-form-group>
                    <div slot="footer">
                        <b-button type="submit" size="sm" variant="success"><i class="fa fa-dot-circle-o"></i> Submit</b-button>
                        <b-button type="reset" size="sm" variant="danger"><i class="fa fa-ban"></i> Reset</b-button>
                    </div>
                </b-card>
            </b-col>

            <b-col md="6">
                <b-card>
                    <div slot="header">
                        <strong>Advanced</strong> Calculator
                    </div>

                    <b-form>
                        <b-form-group
                            description="Let us know your full name."
                            label="Enter your name"
                            label-for="basicName"
                            :label-cols="3"
                            :horizontal="true">
                            <b-form-input id="basicName" type="text" autocomplete="name"></b-form-input>
                        </b-form-group>

                        <b-form-group
                            label="Static"
                            label-for="basicStatic"
                            :label-cols="3"
                            :horizontal="true">
                            <b-form-input plaintext id="basicStatic" type="text" value="Username"></b-form-input>
                        </b-form-group>

                        <b-form-group
                            description="This is a help text"
                            label="Text Input"
                            label-for="basicText"
                            :label-cols="3"
                            :horizontal="true">
                            <b-form-input id="basicText" type="text" placeholder="Text"></b-form-input>
                        </b-form-group>

                        <b-form-group
                            label="Date" label-for="date"
                            :label-cols="3"
                            :horizontal="true">
                            <b-form-input type="date" id="date"></b-form-input>
                        </b-form-group>

                        <b-form-group
                            description="Please enter your email"
                            label="Email Alerts"
                            label-for="basicEmail"
                            :label-cols="3"
                            :horizontal="true">
                            <b-form-input id="basicEmail" type="email" placeholder="Enter your email" autocomplete="email"></b-form-input>
                        </b-form-group>

                        <b-form-group
                            label="Select"
                            label-for="basicSelect"
                            :label-cols="3"
                            :horizontal="true">
                            <b-form-select id="basicSelect"
                                :plain="true"
                                :options="['Please select','Option 1', 'Option 2', 'Option 3']"
                                value="Please select">
                            </b-form-select>
                        </b-form-group>

                        <b-form-group
                            label="Radios - custom"
                            label-for="basicRadiosCustom"
                            :label-cols="3"
                            :horizontal="true">
                            <b-form-radio-group
                                id="basicRadiosCustom"
                                value="1"
                                stacked>
                                <div class="custom-control custom-radio">
                                    <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input" value="1">
                                    <label class="custom-control-label" for="customRadio1">Option 1</label>
                                </div>
                                <div class="custom-control custom-radio">
                                    <input type="radio" id="customRadio2" name="customRadio" class="custom-control-input" value="2" checked>
                                    <label class="custom-control-label" for="customRadio2">Option 2</label>
                                </div>
                                <div class="custom-control custom-radio">
                                    <input type="radio" id="customRadio3" name="customRadio" class="custom-control-input" value="3">
                                    <label class="custom-control-label" for="customRadio3">Option 3</label>
                                </div>
                            </b-form-radio-group>
                        </b-form-group>

                        <b-form-group
                            label="Checkboxes - custom"
                            label-for="basicCustomCheckboxes"
                            :label-cols="3"
                            :horizontal="true">
                            <b-form-checkbox-group stacked id="basicCustomCheckboxes">
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="customChk1" value="1" checked>
                                    <label class="custom-control-label" for="customChk1">Option 1</label>
                                </div>
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="customChk2" value="2">
                                    <label class="custom-control-label" for="customChk2">Option 2</label>
                                </div>
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="customChk3" value="3">
                                    <label class="custom-control-label" for="customChk3">Option 3</label>
                                </div>
                            </b-form-checkbox-group>
                        </b-form-group>

                        <div slot="footer">
                            <b-button type="submit" size="sm" variant="primary"><i class="fa fa-dot-circle-o"></i> Submit</b-button>
                            <b-button type="reset" size="sm" variant="danger"><i class="fa fa-ban"></i> Reset</b-button>
                        </div>
                    </b-form>
                </b-card>
            </b-col>
        </b-row>
    </div>
</template>

<script>
// import ethers from 'ethers'
const ethers = require('ethers')

export default {
    name: 'forms',
    data () {
        return {
            difficulty: 0,
            selected: [], // Must be an array reference!
            show: true
        }
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
